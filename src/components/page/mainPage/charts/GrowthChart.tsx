import Chart from "react-apexcharts"

const GrowthChart = () => {
  return (
    <Chart
      type="radialBar"
      series={[89]}
      options={{
        chart: {
          height: 240,
          type: "radialBar",
        },

        colors: ["#696CFF"],
        plotOptions: {
          radialBar: {
            offsetY: 10,
            startAngle: -150,
            endAngle: 150,
            hollow: {
              size: "60%",
            },
            track: {
              background: "#F0F0FF",
              strokeWidth: "0%",
            },
            dataLabels: {
              name: {
                offsetY: 15,
                color: "#697a8d",
                fontSize: "15px",
                fontWeight: "600",
              },
              value: {
                offsetY: -25,
                color: "#697a8d",
                fontSize: "22px",
                fontWeight: "500",
              },
            },
          },
        },

        fill: {
          type: "gradient",
          gradient: {
            shade: "light",
            shadeIntensity: 1,
            gradientToColors: ["#A0A2FF"],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 0.5,
            stops: [30, 70, 100],
          },
        },

        stroke: {
          lineCap: "butt",
          dashArray: 5,
        },
        states: {
          hover: {
            filter: {
              type: "none",
            },
          },
          active: {
            filter: {
              type: "none",
            },
          },
        },

        labels: ["Progress"],
      }}
    />
  )
}

export default GrowthChart
