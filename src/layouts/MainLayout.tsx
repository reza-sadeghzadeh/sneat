import { AppShell, MediaQuery } from "@mantine/core";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import SearchHeader from "../components/shared/SearchHeader";
import SideNav from "../components/shared/SideNav";

const MainLayout = () => {
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
      navbarOffsetBreakpoint="lg"
      navbar={<SideNav menuToggle={{ opened, setOpened }} />}
      classNames={{
        main: "bg-brand-bodyColor py-3",
      }}
    >
      <div className="px-2">
        <div className="strict-width">
          <SearchHeader menuToggle={{ opened, setOpened }} />

          {/* outlet */}
          <section className="mt-12">
            <Outlet />
          </section>
        </div>
      </div>
    </AppShell>
  );
};

export default MainLayout;
