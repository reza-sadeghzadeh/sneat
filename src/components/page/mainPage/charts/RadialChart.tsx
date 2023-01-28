import React from "react"
import Chart from "react-apexcharts"

const RadialChart = () => {
  return (
    <Chart
      height={100}
      width={80}
      type="radialBar"
      series={[70]}
      options={{
        chart: {
          height: 100,

          type: "radialBar",
        },
        dataLabels: { enabled: false },
        series: [70],
        colors: ["#696cff"],
        // labels:
        plotOptions: {
          radialBar: {
            dataLabels: {
              show: true,
              value: {
                show: true,
                offsetY: 5,
                color: "#696cff",
              },
              name: {
                show: false,
              },
            },
            hollow: {},
            // track
          },
        },
      }}
    />
  )
}

export default RadialChart
