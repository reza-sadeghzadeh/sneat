import { ActionIcon, Box, Menu } from "@mantine/core"
import { FC } from "react"
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai"
import { BiDotsVerticalRounded } from "react-icons/bi"
import { BgStyles, shadowStyles, TxtStyles } from "../../../utils"

interface IBoxInfo {
  Icon: React.ReactNode
  text: {
    label: string
    value: string
  }
  change: number
  ml: number
}

const BoxInfo: FC<IBoxInfo> = ({ change, Icon, text, ml = 0 }) => {
  return (
    <Box
      ml={ml}
      component={"div"}
      sx={{ ...shadowStyles(), ...TxtStyles(), ...BgStyles() }}
      className="p-6 2xl:p-6 w-full h-full min-h-fit rounded-lg flex-col flex justify-between"
    >
      <div className="flex justify-between items-center">
        {Icon}
        <Menu
          transition="pop-top-right"
          position="bottom-end"
          shadow="md"
          width={200}
          styles={{
            item: {
              ...TxtStyles(),
            },
          }}
        >
          <Menu.Target>
            <ActionIcon>
              <BiDotsVerticalRounded size={20} />
            </ActionIcon>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item>View More</Menu.Item>
            <Menu.Item>Details</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
      <div>
        <h4 className="text-light text-sm">{text.label}</h4>
        <h1 className="text-2xl xl:text-xl 2xl:text-2xl mt-0.5 font-medium">
          {" "}
          {text.value}
        </h1>
      </div>
      <div
        className={`text-sm flex items-center font-bold ${
          change > 0 ? "text-brand-green" : "text-brand-red"
        }`}
      >
        <span className="text-md">
          {change > 0 ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
        </span>
        <Box component="p" ml={3}>
          {change}%
        </Box>
      </div>
    </Box>
  )
}

export default BoxInfo
