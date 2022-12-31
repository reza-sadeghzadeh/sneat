import { Box, Text } from "@mantine/core"
import React, { ReactNode } from "react"
import { NavLink } from "react-router-dom"
import NavItemIcon from "./NavItemIcon"

interface NavItemProps {
  label: string
  to: string
  icon: ReactNode
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, to }) => {
  return (
    <Box component={NavLink} to={to} className="nav-item">
      <NavItemIcon icon={icon} />
      <Text sx={{ marginLeft: 14, fontSize: 14.5 }} size={"sm"}>
        {label}
      </Text>
    </Box>
  )
}

export default NavItem
