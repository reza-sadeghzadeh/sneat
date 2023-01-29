import { Box } from "@mantine/core"
import { FC, ReactNode } from "react"

interface IDatafullItem {
  icon: ReactNode
  label: string
  detail: string
  sell: string
  switchLabelPosition?: boolean
}
const DatafullLtem: FC<IDatafullItem> = ({
  detail,
  icon,
  label,
  sell,
  switchLabelPosition = false,
}) => {
  return (
    <li className="flex pt-8 justify-between items-center">
      <div className="flex-center">
        {icon}
        <Box
          className={`flex ${
            switchLabelPosition ? "flex-col-reverse" : "flex-col"
          }`}
          component="div"
          ml={16}
        >
          <h4 className="font-semibold text-sm"> {label}</h4>
          <p className="text-xs mt-1 opacity-75">{detail}</p>
        </Box>
      </div>
      <span className="text-sm">{sell}</span>
    </li>
  )
}

export default DatafullLtem
