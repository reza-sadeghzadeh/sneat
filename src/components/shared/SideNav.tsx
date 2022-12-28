import {
  ActionIcon,
  Box,
  Image,
  MediaQuery,
  Navbar,
  Text,
  useMantineTheme,
} from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import React from "react"
import { BiHomeCircle, BiLeftArrow } from "react-icons/bi"
import NavItem from "../NavItem"
interface SearchHeaderProps {
  menuToggle: {
    opened: boolean
    setOpened: React.Dispatch<React.SetStateAction<boolean>>
  }
}

const SideNav: React.FC<SearchHeaderProps> = ({ menuToggle }) => {
  const theme = useMantineTheme()
  const matches = useMediaQuery(`(min-width:${theme.breakpoints.lg}px)`)
  return (
    <Navbar
      sx={{ left: matches ? "0" : menuToggle.opened ? "0" : "-100%" }}
      width={{ base: 260 }}
      hiddenBreakpoint="lg"
      className="shadow border-none transition-all"
      pl={"md"}
    >
      {/* logo */}
      <Box className="flex items-center justify-start mt-2 px-1 py-3">
        <Image
          height={36}
          width={22}
          withPlaceholder
          alt="logo"
          src={"/logo.svg"}
          className="mx-2"
        />
        <Text fw={"bold"} size={28} className="text-brand-mainTextColor">
          sneat
        </Text>
      </Box>
      {/* drawer close button in small screens */}
      <MediaQuery largerThan={"sm"} styles={{ display: "hiden" }}>
        <div className="absolute top-8 flex justify-center items-center  -right-4  rounded-full">
          <ActionIcon
            variant="filled"
            color={"violet"}
            onClick={() => menuToggle.setOpened(false)}
          >
            <BiLeftArrow color="white" />
          </ActionIcon>
        </div>
      </MediaQuery>

      {/* menu items */}
      <Box>
        <ul>
          <li className="nav-item-link-holder">
            <NavItem icon={<BiHomeCircle />} name="Dashboard" to="/" />
          </li>
          <li className="nav-item-link-holder">
            <NavItem icon={<BiHomeCircle />} name="Cards" to="/cards" />
          </li>
        </ul>
      </Box>
    </Navbar>
  )
}

export default SideNav
