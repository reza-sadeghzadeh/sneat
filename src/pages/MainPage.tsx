import { Box, Menu } from "@mantine/core"
import Chart from "react-apexcharts"
import { AiOutlineArrowUp } from "react-icons/ai"
import {
  BiChevronDown,
  BiCreditCard,
  BiDollar,
  BiPieChartAlt,
  BiWalletAlt,
} from "react-icons/bi"
import { GrPaypal } from "react-icons/gr"
import SEOutil from "../components/misc/SEOutil"
import BoxInfo from "../components/page/mainPage/BoxInfo"
import GrowthChart from "../components/page/mainPage/charts/GrowthChart"
import ProfileReportChart from "../components/page/mainPage/charts/ProfileReportChart"
import RevenuChart from "../components/page/mainPage/charts/RevenuChart"
import Cong from "../components/page/mainPage/Cong"
import { BgStyles, shadowStyles, TxtStyles } from "../utils"

const MainPage = () => {
  return (
    <>
      <SEOutil title="Dashboard" />
      <div className="flex flex-wrap ">
        {/* cong */}
        <div className="w-2/3 2xl:w-2/3">
          <Cong />
        </div>

        {/* box nums */}
        <div className="w-1/3 flex-center 2xl:w-1/3">
          <BoxInfo
            ml={24}
            Icon={
              <BiPieChartAlt
                className="text-brand-green bg-brand-green/10 p-2 rounded-md"
                size={38}
              />
            }
            text={{ label: "Profit", value: "$14,829" }}
            change={72.8}
          />
          <BoxInfo
            ml={24}
            Icon={
              <BiWalletAlt
                className="text-brand-blue bg-brand-blue/10 p-2 rounded-md"
                size={38}
              />
            }
            text={{ label: "Sales", value: "$4,999" }}
            change={28.34}
          />
        </div>

        {/* left charts */}
        <Box
          style={{ ...BgStyles(), ...shadowStyles(), ...TxtStyles() }}
          className="w-2/3 flex mt-6 rounded-lg overflow-hidden"
        >
          <Box
            style={{ ...BgStyles(), ...TxtStyles() }}
            dir="ltr"
            className="w-2/3 p-6 pb-1"
          >
            <h1 className="text-lg mb-4 font-bold">Total Revenue</h1>
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
              62% Company Growth
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
        <Box className="w-1/3  flex mt-6 flex-col">
          <Box className="grow flex-center">
            <BoxInfo
              ml={24}
              Icon={
                <GrPaypal
                  className="text-brand-red bg-brand-red/10 p-2 rounded-md"
                  size={38}
                />
              }
              text={{ label: "Payments", value: "$22,829" }}
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
              text={{ label: "Transactions", value: "$719" }}
              change={-21}
            />
          </Box>
          <Box
            style={{ ...BgStyles(), ...TxtStyles(), ...shadowStyles() }}
            ml={24}
            className="flex justify-between  p-6  mt-6 rounded-lg"
          >
            <div className="w-1/2">
              <h1 className="text-lg mb-2 text-brand-primary font-bold">
                Profile report
              </h1>
              <p className="text-xs w-fit font-bold text-brand-orange bg-brand-orange/10 rounded-full px-2 py-1">
                YEAR 2022
              </p>
              <div className="text-xs flex items-center font-bold mt-6 text-brand-green">
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
    </>
  )
}

export default MainPage
