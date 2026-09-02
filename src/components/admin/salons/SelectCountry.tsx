"use client";

import { useLocale } from "next-intl";
import { Control, Controller, UseFormSetValue, UseFormWatch } from "react-hook-form";
import Select from "react-select";
import Alert from "../ui/Alert";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { number } from "motion";

type Data = {
  name: string;
  video : File | null;
  description: string;
  address: string;
  small_desc: string;
  phone: string;
  status: number;
  salon_owner_id : number,
  image: File | null;
  city_id: string | null;
  country_id: string | null;
  state_id: string | null;
};

type Props = {
 
  errors: {
    city_id: string;
    country_id: string;
    state_id: string;
  } | null;
  setValue: UseFormSetValue<Data>;
  watch: UseFormWatch<Data>;
  control: Control<Data>;
 
};

type City = {
  name: string;
  id: string | number;
};

type Country = {
  label: string;
  value: string;
};

export default function SelectCountry({
  errors,
  control,
  setValue,
  watch,
}: Props) {
  const locale = useLocale();
  const [countries, setCountries] = useState<Country[]>([]);
  const [cities, setCities] = useState<Country[]>([]);
  const [states, setStates] = useState<Country[]>([]);

  const city_id = watch("city_id");
  const country_id = watch("country_id");
  const state_id= watch("state_id");

  const { data, isPending } = useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_ADDRESS}/data/countries`,
      );
      return response.data.data;
    },
  });

  const { data: stateData, isPending: StatePending } = useQuery({
    queryKey: ["states", country_id],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_ADDRESS}/data/states/${country_id}`,
      );
      return response.data.data;
    },
    enabled: !!country_id,
  });

  const { data: cityData, isPending: cityPending } = useQuery({
    queryKey: ["cities", state_id],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_ADDRESS}/data/cities/${state_id}`,
      );
      return response.data.data;
    },
    enabled: !!state_id,
  });

  useEffect(() => {
    if (isPending) return;

    const items = data?.map((country: City) => ({
      label: country.name,
      value: country.id,
    }));

    setCountries(items);
  }, [data, isPending]);

  useEffect(() => {
    if (!cityData) return;
    if (cityPending) return;

    const items = cityData?.map((city: City) => ({
      label: city.name,
      value: city.id,
    }));

    setCities(items);
  }, [cityData, cityPending]);

  useEffect(() => {
    if (!stateData) return;
    if (StatePending) return;

    const items = stateData?.map((state: City) => ({
      label: state.name,
      value: state.id,
    }));

    setStates(items);
  }, [stateData, StatePending]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mb-10">
      <div className="flex flex-col gap-2  ">
        <label className="text-sm font-medium text-slate-700">
          انتخاب کشور
        </label>
        <Controller
          name="country_id"
          control={control}
          render={({ field }) => (
            <Select
               className="react-select-container"
              classNamePrefix="react-select"
              {...field}
              value={
                countries.find((country) => country.value === field.value) ??
                null
              }
              onChange={(country) => {
                field.onChange(country?.value ?? null);

                // وقتی کشور عوض شد، استان و شهر قبلی پاک شوند
                setValue("state_id", null);
                setValue("city_id", null);
              }}
              isDisabled={isPending}
              isLoading={isPending}
              isClearable
              isRtl={locale === "fa"}
              isSearchable
              options={countries}
            />
          )}
        />
      </div>

      <div className="flex flex-col gap-2  ">
        <label className="text-sm font-medium text-slate-700">
          انتخاب ایالت / استان
        </label>
        <Controller
          name="state_id"
          control={control}
          render={({ field }) => (
            <Select
               className="react-select-container"
              classNamePrefix="react-select"
              {...field}
              value={
                states.find((state) => state.value === field.value) ?? null
              }
              onChange={(state) => {
                field.onChange(state?.value ?? null);

                // با تغییر استان، شهر قبلی باید پاک شود
                setValue("city_id", null);
              }}
              isDisabled={!country_id || StatePending}
              isLoading={StatePending}
              isClearable
              isRtl={locale === "fa"}
              isSearchable
              options={states}
            />
          )}
        />
        {errors && errors.state_id && <Alert mesg={errors?.state_id} />}
      </div>

      <div className="flex flex-col gap-2  ">
        <label className="text-sm font-medium text-slate-700">انتخاب شهر</label>
        <Controller
          name="city_id"
          control={control}
          render={({ field }) => (
            <Select
               className="react-select-container"
              classNamePrefix="react-select"
              {...field}
              value={cities.find((city) => city.value === field.value) ?? null}
              onChange={(city) => {
                field.onChange(city?.value ?? null);
              }}
              isDisabled={!state_id || cityPending}
              isLoading={cityPending}
              isClearable
              isRtl={locale === "fa"}
              isSearchable
              options={cities}
            />
          )}
        />
        {errors && errors.city_id && <Alert mesg={errors?.city_id} />}
      </div>
    </div>
  );
}
