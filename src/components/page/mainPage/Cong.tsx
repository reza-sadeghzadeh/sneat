import { Box, Paper } from "@mantine/core"
import { useTranslation } from "react-i18next"
import { useRTL } from "../../../hooks"
import { BgStyles, shadowStyles, TxtStyles } from "../../../utils"

const Cong = () => {
  const { t } = useTranslation()
  const { RTL } = useRTL()

  return (
    <Box
      sx={{ ...shadowStyles(), ...TxtStyles(), ...BgStyles() }}
      component="div"
      className="rounded-lg flex justify-between items-end"
    >
      <div className="w-2/3 p-6">
        <h1 className="text-lg font-semibold text-brand-primaryTextColor">
          {t("pages.main_page.cong.header")}
        </h1>
        <p className="mt-3 text-sm leading-relaxed w-4/5">
          {t("pages.main_page.cong.message")}
        </p>
        <button className="p-1.5 hover:text-white hover:bg-brand-primaryTextColor hover:shadow-lg transition-all rounded mt-6 text-xs text-brand-primaryTextColor border border-brand-primaryTextColor">
          {t("pages.main_page.cong.button")}
        </button>
      </div>
      <div className={`flex-center w-1/3 ${RTL ? "-scale-x-100" : ""}`}>
        <img
          className="h-32"
          src="/images/illustrations/man-with-laptop.png"
          alt="man with laptop"
        />
      </div>
    </Box>
  )
}

export default Cong
