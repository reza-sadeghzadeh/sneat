import React from "react";

import { Outlet } from "react-router-dom";

const main = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default main;
