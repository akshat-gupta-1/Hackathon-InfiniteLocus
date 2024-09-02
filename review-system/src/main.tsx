import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthPage } from "./components/AuthPage";
import Root from "./components/root/Root";
import Dashboard from "./components/dashboard/Dashboard";
import Business from "./components/business/Business";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/signin",
    element: <AuthPage type="signin" />,
  },
  {
    path: "/signup",
    element: <AuthPage type="signup" />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/business/:id",
    element: <Business/>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
