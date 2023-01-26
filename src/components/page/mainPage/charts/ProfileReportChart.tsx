import Chart from "react-apexcharts"

const ProfileReportChart = () => {
  return (
    <Chart
      type="line"
      series={[
        {
          data: [0, 3, 1, 2, 1, 4],
        },
      ]}
      options={{
        colors: ["#FFB621"],
        stroke: {
          width: 5,

          curve: "smooth",
          lineCap: "round",
        },

        chart: {
          toolbar: {
            show: false,
          },
          dropShadow: {
            enabled: true,
            top: 10,
            left: 5,
            blur: 3,
            color: "#FFB621",
            opacity: 0.15,
          },
          sparkline: {
            enabled: true,
          },
          stacked: true,
          offsetY: -12,
        },
        grid: {
          show: false,
          padding: {
            right: 8,
          },
        },

        dataLabels: {
          enabled: false,
        },
        legend: {
          horizontalAlign: "left",
          offsetX: 40,
        },
      }}
    />
  )
}

export default ProfileReportChart
