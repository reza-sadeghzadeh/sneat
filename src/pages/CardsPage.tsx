import Chart from "react-apexcharts"

import { useDarkMode } from "../hooks"

const CardsPage = () => {
  const { colorScheme } = useDarkMode()

  const width = 35

  const series = [
    {
      name: "2022",
      data: [18, 7, 15, 29, 18, 12, 9],
    },
    {
      name: "2021",
      data: [-13, -18, -9, -14, -5, -17, -15],
    },
  ]

  return (
    <div dir="ltr" className="lg:w-1/2 p-8">
      <Chart
        width={600}
        type="bar"
        series={series}
        options={{
          chart: {
            // background: ,
            stacked: true, // puts the bar on top eachother
            toolbar: {
              offsetX: 10,

              export: {
                png: {
                  filename: "Sneat data overview",
                },
                csv: {
                  filename: "Sneat data overview",
                },
                svg: {
                  filename: "Sneat data overview",
                },
              },
              tools: {
                download: true,
              },
            },

            animations: {
              speed: 500,
              easing: "easeinout",
            },
          },
          theme: {
            mode: "light",
            palette: "white",
          },
          legend: {
            show: true,
            horizontalAlign: "left",
            position: "top",
            labels: {
              colors: ["#697a8d"],
            },
            markers: {
              height: 8,
              width: 8,
              radius: 12,
              offsetX: -3,
            },
            itemMargin: {
              horizontal: 10,
            },
          },
          xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            // axisTicks: { color: "gray" },
            labels: {
              style: {
                fontFamily: "Inter",
                fontWeight: "semibold",
                colors: [
                  "#697a8d",
                  "#697a8d",
                  "#697a8d",
                  "#697a8d",
                  "#697a8d",
                  "#697a8d",
                  "#697a8d",
                ],
              },
            },
          },
          yaxis: {
            labels: {
              style: {
                fontFamily: "Inter",
                fontWeight: "semibold",
                colors: [
                  "#697a8d",
                  "#697a8d",
                  "#697a8d",
                  "#697a8d",
                  "#697a8d",
                  "#697a8d",
                  "#697a8d",
                ],
              },
            },
          },
          stroke: {
            width: 8,
            curve: "smooth",
            colors: colorScheme === "dark" ? ["#2a2b31"] : ["white"],
            lineCap: "round",
          },
          dataLabels: {
            enabled: false,
          },
          grid: {
            // show: false,
            borderColor: "#f5f5f5",
          },

          colors: ["#696cff", "rgba(3, 195, 236)"],
          plotOptions: {
            bar: {
              borderRadiusApplication: "around",
              borderRadius: width * 0.27,

              columnWidth: `${width}px`,
              borderRadiusWhenStacked: "all",
              rangeBarGroupRows: true,
              distributed: false,
              rangeBarOverlap: true,
            },
          },
        }}
      />
    </div>
  )
}

export default CardsPage
