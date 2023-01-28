import React from "react"
import Chart from "react-apexcharts"

const LineChart = () => {
  return (
    <Chart
      height={260}
      series={[
        {
          name: "Sells",
          data: [
            {
              x: "",
              y: 45,
            },
            {
              x: "Jan",
              y: 45,
            },
            {
              x: "Feb",
              y: 50,
            },
            {
              x: "Mar",
              y: 40,
            },
            {
              x: "Apr",
              y: 60,
            },
            {
              x: "Jun",
              y: 50,
            },
            {
              x: "Jul",
              y: 55,
            },
          ],
        },
      ]}
      options={{
        chart: {
          type: "area",
          offsetX: 0,
          parentHeightOffset: 0,
          //   parentWidthOffset: 0,
          toolbar: {
            show: false,
          },
          stackType: "normal",
        },
        grid: {
          strokeDashArray: 3,
          borderColor: "#f5f5f9",
        },
        stroke: {
          width: 2,
        },
        fill: {
          gradient: {
            opacityFrom: 0.5,
            opacityTo: 0.25,
          },
        },
        xaxis: {
          labels: {
            style: {
              colors: ["gray"],
              fontWeight: "medium",
            },
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#696cff"],
        legend: {
          show: false,
        },
        forecastDataPoints: {
          dashArray: 12,
        },
        markers: {
          radius: 8,
          discrete: [
            {
              fillColor: "white",
              seriesIndex: 0,
              dataPointIndex: 6,
              strokeColor: "#696cff",
              size: 6,
            },
          ],
          hover: {
            size: 7,
          },
          strokeColors: "#696cff",
          strokeWidth: 3,
        },
      }}
      type="area"
    />
  )
}

export default LineChart
