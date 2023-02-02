import { useMantineTheme } from "@mantine/core"
import Chart from "react-apexcharts"
import { useDarkMode } from "../../../../hooks"

const RevenuChart = () => {
  const { colorScheme } = useDarkMode()
  const theme = useMantineTheme()
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
    <Chart
      dir="ltr"
      height={300}
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
          mode: colorScheme === "dark" ? "dark" : "light",
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
              colors:
                colorScheme === "dark"
                  ? [
                      "#697a8d",
                      "#697a8d",
                      "#697a8d",
                      "#697a8d",
                      "#697a8d",
                      "#697a8d",
                      "#697a8d",
                    ]
                  : [],
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              fontFamily: "Inter",
              fontWeight: "semibold",
              colors:
                colorScheme === "dark"
                  ? [
                      "#697a8d",
                      "#697a8d",
                      "#697a8d",
                      "#697a8d",
                      "#697a8d",
                      "#697a8d",
                      "#697a8d",
                    ]
                  : [],
            },
          },
        },
        stroke: {
          width: 8,
          curve: "smooth",
          colors: colorScheme === "dark" ? [theme.colors.dark[7]] : ["white"],
          lineCap: "round",
        },
        dataLabels: {
          enabled: false,
        },
        grid: {
          // show: false,
          // borderColor: "#f5f5f5",
        },

        colors: ["#696cff", "rgba(3, 195, 236)"],
        plotOptions: {
          bar: {
            borderRadiusApplication: "around",
            borderRadiusWhenStacked: "all",
            rangeBarGroupRows: true,
            distributed: false,
            rangeBarOverlap: true,
          },
        },
        responsive: [
          {
            breakpoint: 5000,
            options: {
              plotOptions: {
                bar: {
                  borderRadius: 9,
                  columnWidth: "40%",
                },
              },
            },
          },
          {
            breakpoint: 1580,
            options: {
              plotOptions: {
                bar: {
                  borderRadius: 8,
                  columnWidth: "50%",
                },
              },
            },
          },
          {
            breakpoint: 1440,
            options: {
              plotOptions: {
                bar: {
                  borderRadius: 7,
                  columnWidth: "55%",
                },
              },
            },
          },
          {
            breakpoint: 1350,
            options: {
              plotOptions: {
                bar: {
                  borderRadius: 7,
                  columnWidth: "60%",
                },
              },
            },
          },
          {
            breakpoint: 1300,
            options: {
              plotOptions: {
                bar: {
                  borderRadius: 8,
                  columnWidth: "70%",
                },
              },
            },
          },
          {
            breakpoint: 1280,
            options: {
              plotOptions: {
                bar: {
                  borderRadius: 10,
                  columnWidth: "40%",
                },
              },
            },
          },
          {
            breakpoint: 1200,
            options: {
              plotOptions: {
                bar: {
                  borderRadius: 9,
                  columnWidth: "35%",
                },
              },
            },
          },
          {
            breakpoint: 1040,
            options: {
              plotOptions: {
                bar: {
                  borderRadius: 8,
                  columnWidth: "35%",
                },
              },
            },
          },

          {
            breakpoint: 970,
            options: {
              plotOptions: {
                bar: {
                  borderRadius: 9,
                  columnWidth: "40%",
                },
              },
            },
          },
          {
            breakpoint: 870,
            options: {
              plotOptions: {
                bar: {
                  borderRadius: 8,
                  columnWidth: "50%",
                },
              },
            },
          },
          {
            breakpoint: 768,
            options: {
              plotOptions: {
                bar: {
                  borderRadius: 8,
                  columnWidth: "65%",
                },
              },
            },
          },
          {
            breakpoint: 680,
            options: {
              plotOptions: {
                bar: {
                  borderRadius: 8,
                  columnWidth: "80%",
                },
              },
            },
          },
          {
            breakpoint: 576,
            options: {
              plotOptions: {
                bar: {
                  borderRadius: 10,
                  columnWidth: "37%",
                },
              },
            },
          },
          {
            breakpoint: 480,
            options: {
              plotOptions: {
                bar: {
                  borderRadius: 10,
                  columnWidth: "45%",
                },
              },
            },
          },
          {
            breakpoint: 420,
            options: {
              plotOptions: {
                bar: {
                  borderRadius: 10,
                  columnWidth: "52%",
                },
              },
            },
          },
          {
            breakpoint: 380,
            options: {
              plotOptions: {
                bar: {
                  borderRadius: 10,
                  columnWidth: "60%",
                },
              },
            },
          },
        ],
      }}
    />
  )
}

export default RevenuChart
