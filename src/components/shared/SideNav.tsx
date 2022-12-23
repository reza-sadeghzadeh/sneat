import { ActionIcon, Avatar, Navbar, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import { BiCollapse, BiExit } from "react-icons/bi";
interface SearchHeaderProps {
  menuToggle: {
    opened: boolean;
    setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

const SideNav: React.FC<SearchHeaderProps> = ({ menuToggle }) => {
  const theme = useMantineTheme();
  const matches = useMediaQuery(`(min-width:${theme.breakpoints.lg}px)`);
  return (
    <Navbar
      sx={{ left: matches ? "0" : menuToggle.opened ? "0" : "-100%" }}
      width={{ base: 260 }}
      hiddenBreakpoint="lg"
      className="shadow border-none transition-all"
      pl={"lg"}
    >
      <div className="flex items-center justify-start p-4 scale-110">
        <Avatar
          alt="logo"
          src={"/logo.svg"}
          className="w-fit h-fit scale-50 "
        />
        <h1 className="font-black text-brand-mainTextColor text-2xl">sneat</h1>
      </div>
      <ActionIcon onClick={() => menuToggle.setOpened(false)}>
        <BiCollapse />
      </ActionIcon>
    </Navbar>
  );
};

export default SideNav;
