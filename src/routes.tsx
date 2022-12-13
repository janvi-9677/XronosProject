import React, { lazy } from "react";
const HomePage = lazy(() => import("./pages/index"));
export const webRoutes = [
  {
    path: "/",
    element: <HomePage />,
  },
];
