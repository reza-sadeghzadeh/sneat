import { Button } from "@mantine/core"
import React from "react"
import { useTranslation } from "react-i18next"

const CardsPage = () => {
  const { t, i18n } = useTranslation()
  return (
    <div>
      <Button onClick={() => i18n.changeLanguage("fa")} variant="subtle">
        {t("hey")}
      </Button>
    </div>
  )
}

export default CardsPage
