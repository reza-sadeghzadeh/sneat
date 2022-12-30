import { ReactNode, useEffect, useState } from "react"
import { I18nContext } from "../contexts"
import { useRTL } from "../hooks"
import { useTranslation } from "react-i18next"
import { languageProfiles, Lngs } from "./language"

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lng, setLng] = useState(
    localStorage.getItem("i18nextLng") === Lngs.FA ? Lngs.FA : Lngs.EN
  )
  const { setRTL } = useRTL()
  const { i18n } = useTranslation()

  useEffect(() => {
    i18n.changeLanguage(lng)
    setRTL(languageProfiles.find((p) => p.locale === lng)?.dir === "rtl")
  }, [lng])
  return (
    <I18nContext.Provider value={{ lng: lng, setLng: setLng }}>
      {children}
    </I18nContext.Provider>
  )
}
