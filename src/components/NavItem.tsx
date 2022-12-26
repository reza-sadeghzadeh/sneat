import { Box, Text } from "@mantine/core";
import React, { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";

interface NavItemProps {
  name: string;
  to: string;
  icon: ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ icon, name, to }) => {
  return (
    <Box>
      <NavLink to={to} className={`my-1 nav-item`}>
        <>
          <Box sx={{ transform: "scale(1.25)" }}>{icon}</Box>
          <Text size={"sm"} className="ml-3">
            {name}
          </Text>
        </>
      </NavLink>
    </Box>
  );
};

export default NavItem;
