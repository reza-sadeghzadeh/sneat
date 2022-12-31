import { Accordion, Box, Flex, Text } from "@mantine/core"
import React, { ReactNode } from "react"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import { NavLink, useLocation } from "react-router-dom"
import { useRTL } from "../../hooks"
import { TxtStyles } from "../../utils"
import NavItemIcon from "./NavItemIcon"

interface NavItemProps {
  items: {
    label: string
    icon: ReactNode
    basePath: string
    childRoutes: { to: string; label: string }[]
  }[]
}

const NavItemExpansibleGroup: React.FC<NavItemProps> = ({ items }) => {
  const location = useLocation()
  const { RTL } = useRTL()

  return (
    <Accordion
      transitionDuration={300}
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
          transform: RTL ? "" : "translateX(10px)  ",
          opacity: 0.8,
          "&[data-rotate]": {
            transform: RTL
              ? "rotate(-90deg)"
              : "rotate(90deg) translateY(-10px) ",
          },
        },
      }}
    >
      {items.map((i, indx) => (
        <Accordion.Item key={indx} value={i.label}>
          <Accordion.Control
            chevron={
              RTL ? (
                <BiChevronLeft className="scale-125" />
              ) : (
                <BiChevronRight className="scale-125" />
              )
            }
            sx={TxtStyles()}
            className={`nav-item ${
              location.pathname.startsWith(i.basePath) ? "active" : ""
            }`}
            py={10}
          >
            <Box className="flex justify-start items-center">
              <NavItemIcon icon={i.icon} />

              <Text sx={{ marginLeft: 14, fontSize: 14.5 }} size={"sm"}>
                {i.label}
              </Text>
            </Box>
          </Accordion.Control>
          {i.childRoutes.map((c, index) => (
            <Accordion.Panel key={index} sx={TxtStyles()}>
              <Box
                component={NavLink}
                to={i.basePath + c.to}
                end={true}
                pl={22}
                className="flex justify-start items-center nav-item-expaned-panel"
              >
                <Box className="w-1.5 h-1.5 dot rounded-full" />
                <Text sx={{ marginLeft: 20, fontSize: 14.5 }} size={"sm"}>
                  {c.label}
                </Text>
              </Box>
            </Accordion.Panel>
          ))}
        </Accordion.Item>
      ))}
    </Accordion>
  )
}

export default NavItemExpansibleGroup
