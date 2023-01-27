import { Box } from "@mantine/core"
import { FC, ReactNode } from "react"

interface IDatafullItem {
  icon: ReactNode
  label: string
  detail: string
  sell: string
}
const DatafullLtem: FC<IDatafullItem> = ({ detail, icon, label, sell }) => {
  return (
    <li className="flex py-4 justify-between items-center">
      <div className="flex-center">
        {icon}
        <Box component="div" ml={16}>
          <h4 className="font-semibold"> {label}</h4>
          <p className="text-sm opacity-75">{detail}</p>
        </Box>
      </div>
      <span className="text-sm">{sell}</span>
    </li>
  )
}

export default DatafullLtem
