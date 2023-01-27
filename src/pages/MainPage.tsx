import { ActionIcon, Box, Menu } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import { useTranslation } from "react-i18next"
import { AiOutlineArrowUp } from "react-icons/ai"
import {
  BiChevronDown,
  BiCloset,
  BiCreditCard,
  BiDollar,
  BiDotsVerticalRounded,
  BiHomeAlt,
  BiMobileAlt,
  BiPieChartAlt,
  BiWalletAlt,
} from "react-icons/bi"
import { GrPaypal } from "react-icons/gr"
import SEOutil from "../components/misc/SEOutil"
import BoxInfo from "../components/page/mainPage/BoxInfo"
import GrowthChart from "../components/page/mainPage/charts/GrowthChart"
import ProfileReportChart from "../components/page/mainPage/charts/ProfileReportChart"
import RevenuChart from "../components/page/mainPage/charts/RevenuChart"
import StatisticChart from "../components/page/mainPage/charts/StatisticChart"
import Cong from "../components/page/mainPage/Cong"
import DatafullLtem from "../components/page/mainPage/DatafullLtem"
import { BgStyles, shadowStyles, TxtStyles } from "../utils"

const MainPage = () => {
  const matchesXL = useMediaQuery("(min-width:1280px)")
  const { t } = useTranslation()
  return (
    <>
      <SEOutil title="Dashboard" />
      <div className="flex flex-wrap">
        {/* cong */}
        <div className="w-full max-xl:order-0 xl:w-2/3">
          <Cong />
        </div>

        {/* box nums */}
        <div className="flex-col xl:flex-row w-1/3 flex-center">
          <BoxInfo
            ml={matchesXL ? 24 : 0}
            mt={!matchesXL ? 24 : 0}
            Icon={
              <BiPieChartAlt
                className="text-brand-green bg-brand-green/10 p-2 rounded-md"
                size={38}
              />
            }
            text={{
              label: t("pages.main_page.box_info.profit"),
              value: "$14,829",
            }}
            change={72.8}
          />
          <BoxInfo
            mt={!matchesXL ? 24 : 0}
            ml={matchesXL ? 24 : 0}
            Icon={
              <BiWalletAlt
                className="text-brand-blue bg-brand-blue/10 p-2 rounded-md"
                size={38}
              />
            }
            text={{
              label: t("pages.main_page.box_info.sales"),
              value: "$4,999",
            }}
            change={28.34}
          />
        </div>

        {/* left charts */}
        <Box
          style={{ ...BgStyles(), ...shadowStyles(), ...TxtStyles() }}
          className="w-full xl:w-2/3 max-xl:order-1 flex mt-6 rounded-lg overflow-hidden"
        >
          <Box
            style={{ ...BgStyles(), ...TxtStyles() }}
            className="w-2/3 p-6 pb-1"
          >
            <h1 className="text-lg mb-4 font-bold">
              {t("pages.main_page.revenue")}
            </h1>
            <RevenuChart />
          </Box>
          <Box
            style={{ ...BgStyles(), ...TxtStyles() }}
            className="min-w-fit rtl:border-r ltr:border-l py-2 "
          >
            <div className="flex-center">
              <Menu
                transition="pop-top-right"
                position="bottom-end"
                shadow="md"
                width={100}
                styles={{
                  item: {
                    ...TxtStyles(),
                  },
                }}
              >
                <Menu.Target>
                  <button className="outline-btn flex-center">
                    2023 <BiChevronDown size={16} />
                  </button>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Item>2022</Menu.Item>
                  <Menu.Item>2021</Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </div>
            <GrowthChart />
            <p className="text-sm font-bold text-center mt-2">
              62% {t("pages.main_page.growth")}
            </p>
            <div className="flex justify-around mt-6">
              <div className="flex-center">
                <BiDollar
                  className="text-brand-primaryTextColor bg-brand-primaryTextColor/10 p-2 rounded-md"
                  size={38}
                />
                <Box ml={6} className="">
                  <h5 className="text-xs">2022</h5>
                  <p className="text-sm font-medium">$32.5k</p>
                </Box>
              </div>
              <div className="flex-center">
                <BiWalletAlt
                  className="text-brand-blue bg-brand-blue/10 p-2 rounded-md"
                  size={38}
                />
                <Box ml={6} className="">
                  <h5 className="text-xs">2022</h5>
                  <p className="text-sm font-medium">$32.5k</p>
                </Box>
              </div>
            </div>
          </Box>
        </Box>

        {/* right chart */}
        <Box className="xl:w-1/3 w-2/3 max-xl:order-0 flex mt-6 flex-col">
          <Box className="grow flex-center">
            <BoxInfo
              ml={24}
              Icon={
                <GrPaypal
                  className="text-brand-red bg-brand-red/10 p-2 rounded-md"
                  size={38}
                />
              }
              text={{
                label: t("pages.main_page.box_info.payments"),
                value: "$22,829",
              }}
              change={-8.4}
            />
            <BoxInfo
              ml={24}
              Icon={
                <BiCreditCard
                  className="text-brand-primaryTextColor bg-brand-primaryTextColor/10 p-2 rounded-md"
                  size={38}
                />
              }
              text={{
                label: t("pages.main_page.box_info.transactions"),
                value: "$719",
              }}
              change={-21}
            />
          </Box>
          <Box
            style={{ ...BgStyles(), ...TxtStyles(), ...shadowStyles() }}
            ml={24}
            className="flex justify-between items-center  p-6 mt-6 rounded-lg"
          >
            <div className="w-1/2">
              <h1 className="text-lg mb-1 xl:mb-2 text-brand-primary font-bold">
                {t("pages.main_page.profile_report")}
              </h1>
              <p className="text-xs w-fit font-bold text-brand-orange bg-brand-orange/10 rounded-full px-2 py-1">
                {t("pages.main_page.year")} 2022
              </p>
              <div className="text-sm flex items-center font-bold mt-2 xl:mt-6 text-brand-green">
                <span className="text-md">
                  <AiOutlineArrowUp />
                </span>
                <Box component="p" ml={3}>
                  +9%
                </Box>
              </div>
              <h2 className="text-xl text-brand-primary/80 font-medium">
                $84,686k
              </h2>
            </div>
            <div className="w-24 flex-center grow ">
              <ProfileReportChart />
            </div>
          </Box>
        </Box>
      </div>
      <Box className="flex justify-center items-center mt-6">
        {/* order statistics */}

        <Box
          className="p-6 w-full rounded-lg"
          style={{ ...shadowStyles(), ...TxtStyles(), ...BgStyles() }}
        >
          {/* <h1 className="text-lg font-bold">{t("pages.main_page.revenue")}</h1> */}
          <h1 className="text-lg font-medium">Order Statistics</h1>
          <div className="flex justify-between items-center">
            <p className="text-sm opacity-80">42.82k Total Sales</p>
            <Menu
              transition="pop-top-right"
              position="bottom-end"
              shadow="md"
              width={200}
              styles={{
                item: {
                  ...TxtStyles(),
                },
              }}
            >
              <Menu.Target>
                <ActionIcon>
                  <BiDotsVerticalRounded size={20} />
                </ActionIcon>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item>{t("pages.main_page.box_info.view_more")}</Menu.Item>
                <Menu.Item>{t("pages.main_page.box_info.details")}</Menu.Item>
                <Menu.Item>{t("pages.main_page.box_info.details")}</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>
          {/* first column */}
          <div className="flex justify-between mt-2">
            <div>
              <h1 className="text-4xl font-medium mt-12">8,258</h1>
              <p className="mt-2  text-brand-primary">Total Orders</p>
            </div>
            <StatisticChart />
          </div>
          <Box mt={24} component="ul">
            <DatafullLtem
              detail="Mobile, Earbuds, TV"
              icon={
                <BiMobileAlt
                  className="text-brand-primaryTextColor bg-brand-primaryTextColor/10 p-2 rounded-md"
                  size={38}
                />
              }
              label="Electronic"
              key={1}
              sell="82.5k"
            />
            <DatafullLtem
              detail="T-shirt, Jeans, Shoes"
              icon={
                <BiCloset
                  className="text-brand-green bg-brand-green/10 p-2 rounded-md"
                  size={38}
                />
              }
              label="Fashion"
              key={1}
              sell="82.5k"
            />
            <DatafullLtem
              detail="Mobile, Earbuds, TV"
              icon={
                <BiHomeAlt
                  className="text-brand-blue bg-brand-blue/10 p-2 rounded-md"
                  size={38}
                />
              }
              label="Electronic"
              key={1}
              sell="82.5k"
            />
            <DatafullLtem
              detail="Mobile, Earbuds, TV"
              icon={
                <BiPieChartAlt
                  className="text-brand-green bg-brand-green/10 p-2 rounded-md"
                  size={38}
                />
              }
              label="Electronic"
              key={1}
              sell="82.5k"
            />
          </Box>
        </Box>
        {/* void */}
        <Box
          className="p-6 w-full rounded-lg"
          style={{ ...shadowStyles(), ...TxtStyles(), ...BgStyles() }}
        ></Box>
        {/* void */}
        <Box
          className="p-6 w-full rounded-lg"
          style={{ ...shadowStyles(), ...TxtStyles(), ...BgStyles() }}
        ></Box>
      </Box>
    </>
  )
}

export default MainPage
