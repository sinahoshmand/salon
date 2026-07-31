import { Link } from "@/src/i18n/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function Page({params} : {  params: Promise<{ locale: string }>;}){

    const {locale} = await params
    const t = await getTranslations('MainPage')
    setRequestLocale(locale);
    return(
       <div>
          <h1>{t('text_one')}</h1>
        <Link href={'/contact'}>
            contact
        </Link>
       </div>
    )
}