import { Box } from "@mantine/core"
import { ReactNode } from "react"

const NavItemIcon = ({ icon }: { icon: ReactNode }) => {
  return <Box sx={{ transform: "scale(1.3)" }}>{icon}</Box>
}

export default NavItemIcon
