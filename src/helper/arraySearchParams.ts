const arraySearchParams = (
    key: string,
    value: string,
    checked: boolean,
  ) => {
    const params = new URLSearchParams(window.location.search);

    const current = params.get(key)?.split(",").filter(Boolean) ?? [];

    let next: string[];

    if (checked) {
      next = current.includes(value) ? current : [...current, value];
    } else {
      next = current.filter((item) => item !== value);
    }

    if (next.length > 0) {
      params.set(key, next.join(","));
    } else {
      params.delete(key);
    }

    window.history.pushState(
      null,
      "",
      `${window.location.pathname}?${params.toString()}`,
    );
  };


  export default arraySearchParams;