import { Accordion, Box, Flex, Text } from "@mantine/core"
import React, { ReactNode } from "react"
import { BiChevronRight } from "react-icons/bi"
import { NavLink, useLocation } from "react-router-dom"
import { TxtStyles } from "../../utils"

interface NavItemProps {
  label: string
  icon: ReactNode
  basePath: string
  childRoutes: { to: string; label: string }[]
}

const NavItemExpansible: React.FC<NavItemProps> = ({
  icon,
  label,
  basePath,
  childRoutes,
}) => {
  const location = useLocation()

  return (
    <Accordion
      chevron={<BiChevronRight className="rtl:rotate-180" />}
      chevronPosition="right"
      sx={{ maxWidth: 400 }}
      mx="auto"
      styles={{
        item: {
          border: "0",
        },
        content: {
          padding: 0,
        },
        chevron: {
          transform: "translateX( 0.7rem)",
          "&[data-rotate]": {
            transform: "translateX(0.7rem) rotate(90deg)",
          },
        },
      }}
    >
      <Accordion.Item value="item-1">
        <Accordion.Control
          sx={TxtStyles()}
          className={`nav-item ${
            location.pathname.startsWith(basePath) ? "active" : ""
          }`}
        >
          <Box className="flex justify-start items-center">
            <Box sx={{ transform: "scale(1.2)" }}>{icon}</Box>
            <Text sx={{ marginLeft: 14, fontSize: 15 }} size={"sm"}>
              {label}
            </Text>
          </Box>
        </Accordion.Control>
        {childRoutes.map((c) => (
          <Accordion.Panel sx={{ margin: 0, padding: 0 }}>
            <Box
              component={NavLink}
              to={basePath + c.to}
              end={true}
              pl={22}
              className="flex justify-start items-center nav-item-expaned-panel"
            >
              <Box className="w-1.5 h-1.5 dot rounded-full" />
              <Text sx={{ marginLeft: 22, fontSize: 15 }} size={"sm"}>
                {c.label}
              </Text>
            </Box>
          </Accordion.Panel>
        ))}
      </Accordion.Item>
    </Accordion>
  )
}

export default NavItemExpansible
