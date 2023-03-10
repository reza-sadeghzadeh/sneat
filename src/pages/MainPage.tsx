import { ActionIcon, Box, Menu, Tabs } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import { useState } from "react"
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
import LineChart from "../components/page/mainPage/charts/LineChart"
import ProfileReportChart from "../components/page/mainPage/charts/ProfileReportChart"
import RevenuChart from "../components/page/mainPage/charts/RevenuChart"
import StatisticChart from "../components/page/mainPage/charts/StatisticChart"
import Cong from "../components/page/mainPage/Cong"
import DatafullLtem from "../components/page/mainPage/DatafullLtem"
import RadialChart from "../components/page/mainPage/charts/RadialChart"
import { BgStyles, shadowStyles, TxtStyles } from "../utils"

const MainPage = () => {
  const matchesXL = useMediaQuery("(min-width:1280px)")
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState<string | null>("income")

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
      <Box className="flex justify-center mt-6">
        {/* order statistics #1 */}
        <Box
          className="p-6 w-full rounded-lg flex flex-col justify-between "
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

          <div className="flex justify-between mt-2">
            <div>
              <h1 className="text-4xl font-medium mt-12">8,258</h1>
              <p className="mt-2  text-brand-primary">Total Orders</p>
            </div>
            <StatisticChart />
          </div>
          <Box mt={12} component="ul">
            <DatafullLtem
              detail="Mobile, Earbuds, TV"
              icon={
                <BiMobileAlt
                  className="text-brand-primaryTextColor bg-brand-primaryTextColor/10 p-2 rounded-md"
                  size={38}
                />
              }
              label="Electronic"
              sell="82.5k USD"
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
              sell="82.5k USD"
            />
            <DatafullLtem
              detail="T-shirt, Jeans, Shoes"
              icon={
                <BiHomeAlt
                  className="text-brand-blue bg-brand-blue/10 p-2 rounded-md"
                  size={38}
                />
              }
              label="Fashion"
              sell="82.5k USD"
            />
            <DatafullLtem
              detail="Football, Cricket Kit"
              icon={
                <BiPieChartAlt
                  className="text-brand-green bg-brand-green/10 p-2 rounded-md"
                  size={38}
                />
              }
              label="Sports"
              sell="46 USD"
            />
          </Box>
        </Box>

        {/* tabs #2 */}
        <Box
          className="w-full overflow-hidden mx-6 rounded-lg grow"
          style={{ ...shadowStyles(), ...TxtStyles(), ...BgStyles() }}
        >
          <Tabs
            keepMounted={false}
            activateTabWithKeyboard={true}
            defaultValue="income"
            classNames={{
              tabsList: "p-6",
            }}
            styles={{
              panel: {
                marginTop: "2rem",
              },
              tabsList: {
                border: 0,
                padding: 0,
              },
              tab: {
                border: "none",
                padding: "0.8rem 1rem",
                fontSize: "0.9rem",
              },
            }}
            onTabChange={setActiveTab}
            value={activeTab}
          >
            <Tabs.List>
              <Tabs.Tab value="income">Income</Tabs.Tab>
              <Tabs.Tab value="expens">Expenses</Tabs.Tab>
              <Tabs.Tab value="profit">Profit</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel
              value="income"
              className=" flex flex-col justify-between h-full"
            >
              <Box className="flex justify-start items-center px-6">
                <BiPieChartAlt
                  className="text-brand-primaryTextColor bg-brand-primaryTextColor/10 p-2 rounded-md"
                  size={38}
                />
                <Box ml={16}>
                  <p className="text-xs">Total balance</p>
                  <div className="flex">
                    <h4 className="text-sm font-bold">$459.10</h4>
                    <Box
                      ml={8}
                      className={`text-xs flex items-center font-bold text-brand-green`}
                    >
                      <span className="text-md">
                        <AiOutlineArrowUp />
                      </span>
                      <Box component="p" ml={3}>
                        45.7%
                      </Box>
                    </Box>
                  </div>
                </Box>
              </Box>
              <Box
                style={{
                  transform: "translateX(-14px)",
                }}
              >
                <LineChart />
              </Box>
              <Box className="flex-center mt-6">
                <RadialChart />
                <div>
                  <h5 className="text-sm">Expenses This Week</h5>
                  <p className="text-xs opacity-75">$39 less than last week</p>
                </div>
              </Box>
            </Tabs.Panel>
            <Tabs.Panel className="px-6" value="expens">
              Nothing planned for here!
            </Tabs.Panel>
            <Tabs.Panel className="px-6" value="profit">
              Nothing planned for here also!
            </Tabs.Panel>
          </Tabs>
        </Box>
        {/* transactions #3 */}
        <Box
          style={{ ...shadowStyles(), ...TxtStyles(), ...BgStyles() }}
          className="w-full overflow-hidden rounded-lg grow flex flex-col justify-between py-6"
        >
          <div className="flex justify-between px-6 ">
            <h1 className="text-lg font-medium">Transactions</h1>
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
                {/* <Menu.Item>{t("pages.main_page.box_info.view_more")}</Menu.Item>
                <Menu.Item>{t("pages.main_page.box_info.details")}</Menu.Item>
                <Menu.Item>{t("pages.main_page.box_info.details")}</Menu.Item> */}
                <Menu.Item> Last 28 days </Menu.Item>
                <Menu.Item> Last month </Menu.Item>
                <Menu.Item> Last Year </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>
          <Box px={24} component="ul">
            <DatafullLtem
              switchLabelPosition={true}
              detail="Mobile, Earbuds, TV"
              icon={
                <BiMobileAlt
                  className="text-brand-primaryTextColor bg-brand-primaryTextColor/10 p-2 rounded-md"
                  size={38}
                />
              }
              label="Electronic"
              sell="82.5k USD"
            />
            <DatafullLtem
              switchLabelPosition={true}
              detail="Mobile, Earbuds, TV"
              icon={
                <BiMobileAlt
                  className="text-brand-primaryTextColor bg-brand-primaryTextColor/10 p-2 rounded-md"
                  size={38}
                />
              }
              label="Electronic"
              sell="82.5k USD"
            />

            <DatafullLtem
              switchLabelPosition={true}
              detail="T-shirt, Jeans, Shoes"
              icon={
                <BiCloset
                  className="text-brand-green bg-brand-green/10 p-2 rounded-md"
                  size={38}
                />
              }
              label="Fashion"
              sell="82.5k USD"
            />
            <DatafullLtem
              switchLabelPosition={true}
              detail="T-shirt, Jeans, Shoes"
              icon={
                <BiCloset
                  className="text-brand-green bg-brand-green/10 p-2 rounded-md"
                  size={38}
                />
              }
              label="Fashion"
              sell="82.5k USD"
            />
            <DatafullLtem
              switchLabelPosition={true}
              detail="T-shirt, Jeans, Shoes"
              icon={
                <BiCloset
                  className="text-brand-green bg-brand-green/10 p-2 rounded-md"
                  size={38}
                />
              }
              label="Fashion"
              sell="82.5k USD"
            />
            <DatafullLtem
              switchLabelPosition={true}
              detail="T-shirt, Jeans, Shoes"
              icon={
                <BiHomeAlt
                  className="text-brand-blue bg-brand-blue/10 p-2 rounded-md"
                  size={38}
                />
              }
              label="Fashion"
              sell="82.5k USD"
            />
            <DatafullLtem
              switchLabelPosition={true}
              detail="Football, Cricket Kit"
              icon={
                <BiPieChartAlt
                  className="text-brand-green bg-brand-green/10 p-2 rounded-md"
                  size={38}
                />
              }
              label="Sports"
              sell="46 USD"
            />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default MainPage
