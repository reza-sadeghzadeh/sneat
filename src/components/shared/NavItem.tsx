import { Box, Text } from "@mantine/core"
import React, { ReactNode } from "react"
import { NavLink } from "react-router-dom"

interface NavItemProps {
  label: string
  to: string
  icon: ReactNode
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, to }) => {
  return (
    <Box component={NavLink} to={to} className="nav-item">
      <Box sx={{ transform: "scale(1.2)" }}>{icon}</Box>
      <Text sx={{ marginLeft: 14, fontSize: 15 }} size={"sm"}>
        {label}
      </Text>
    </Box>
  )
}

export default NavItem
