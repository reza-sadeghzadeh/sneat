import SEOutil from "../components/misc/SEOutil"
import Cong from "../components/page/mainPage/Cong"

const MainPage = () => {
  return (
    <>
      <SEOutil title="Dashboard" />
      <div className="flex">
        <div className="w-full 2xl:w-2/3">
          <Cong />
        </div>
        {/* <div className="w-1/2 flex-center 2xl:w-1/3">
          <BoxInfo
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
            Icon={
              <BiWalletAlt
                className="text-brand-blue bg-brand-blue/10 p-2 rounded-md"
                size={38}
              />
            }
            text={{ label: "Sales", value: "$4,999" }}
            change={28.34}
          />
        </div> */}
      </div>
    </>
  )
}

export default MainPage
