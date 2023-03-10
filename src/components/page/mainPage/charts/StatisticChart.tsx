import { useMantineTheme } from "@mantine/core"
import { useColorScheme } from "@mantine/hooks"
import Chart from "react-apexcharts"
import { useDarkMode } from "../../../../hooks"

const StatisticChart = () => {
  const { colorScheme } = useDarkMode()
  const theme = useMantineTheme()
  const data = {
    series: [44, 55, 13, 33],
    labels: ["Electronic", "Sports", "Decor", "Fashion"],
  }

  return (
    <Chart
      height={175}
      width={175}
      series={data.series}
      options={{
        labels: data.labels,
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
          formatter: function (v) {
            return v + "%"
          },
        },
        colors: ["#03C3EC", "#696cff", "#697a8d", "#71DD37", "#03C3EC"],

        fill: {
          colors: ["#03C3EC", "#696cff", "#697a8d", "#71DD37", "#03C3EC"],
        },
        tooltip: {
          fillSeriesColor: true,
        },
        stroke: {
          width: 4,
          colors: colorScheme === "dark" ? [theme.colors.dark[7]] : ["white"],
        },
        chart: {
          height: 110,
          width: 120,
          type: "donut",
        },

        plotOptions: {
          pie: {
            donut: {
              size: "75%",
              labels: {
                show: true,
                value: {
                  fontSize: "26px",
                  color: "#696cff",
                  offsetY: -15,
                  formatter: function (val: string) {
                    return parseInt(val) + "%"
                  },
                },
                name: {
                  offsetY: 24,
                },
                total: {
                  show: true,
                  fontSize: "14px",

                  color: "#697a8d",
                  label: "Weekly",
                  formatter: function () {
                    return "38%"
                  },
                },
              },
            },
          },
        },
      }}
      type="donut"
    />
  )
}

export default StatisticChart
