import { Accordion, Box, Flex, Text } from "@mantine/core"
import React, { ReactNode } from "react"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import { NavLink, useLocation } from "react-router-dom"
import { useRTL } from "../../hooks"
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
  const { RTL } = useRTL()

  return (
    <Accordion
      transitionDuration={400}
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
      <Accordion.Item value="item-1">
        <Accordion.Control
          chevron={
            RTL ? (
              <BiChevronLeft className="scale-125" />
            ) : (
              <BiChevronRight className="scale-125" />
            )
          }
          sx={TxtStyles()}
          className={`nav-item mb-1 ${
            location.pathname.startsWith(basePath) ? "active" : ""
          }`}
          py={10}
        >
          <Box className="flex justify-start items-center">
            <Box sx={{ transform: "scale(1.2)" }}>{icon}</Box>
            <Text sx={{ marginLeft: 14, fontSize: 15 }} size={"sm"}>
              {label}
            </Text>
          </Box>
        </Accordion.Control>
        {childRoutes.map((c, index) => (
          <Accordion.Panel key={index} sx={TxtStyles()}>
            <Box
              component={NavLink}
              to={basePath + c.to}
              end={true}
              pl={22}
              className="flex justify-start items-center nav-item-expaned-panel"
            >
              <Box className="w-1.5 h-1.5 dot rounded-full" />
              <Text sx={{ marginLeft: 20, fontSize: 14 }} size={"sm"}>
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
