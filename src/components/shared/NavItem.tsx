import { Box, Text } from "@mantine/core"
import React, { ReactNode } from "react"
import { NavLink } from "react-router-dom"

interface NavItemProps {
  name: string
  to: string
  icon: ReactNode
}

const NavItem: React.FC<NavItemProps> = ({ icon, name, to }) => {
  return (
    <Box>
      <NavLink to={to} className="nav-item">
        <>
          <Box sx={{ transform: "scale(1.2)" }}>{icon}</Box>
          <Text sx={{ marginLeft: 12 }} size={"sm"}>
            {name}
          </Text>
        </>
      </NavLink>
    </Box>
  )
}

export default NavItem
