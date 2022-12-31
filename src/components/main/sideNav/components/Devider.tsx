import React from "react"
import { useTranslation } from "react-i18next"

const Devider = ({ title }: { title: string }) => {
  const { t } = useTranslation()
  return (
    <p className="text-xs mt-7 px-5 mb-3.5 opacity-80 uppercase side-line">
      {t(title)}
    </p>
  )
}

export default Devider
