import { Button } from "@mantine/core"
import React from "react"
import { useTranslation } from "react-i18next"

import { useI18n } from "../hooks"
import { toPersianNumb } from "../utils/toPersianNumb"

const CardsPage = () => {
  const { t, i18n } = useTranslation()
  const { setLng } = useI18n()

  return <div>{}</div>
}

export default CardsPage
