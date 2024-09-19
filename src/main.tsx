import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Auth from "./Auth";
import Login from "./pages/Login";
import Register from "./pages/Register";
import App from "./App";
import { Profile } from "./pages/Profile";
import Leaderboard from "./pages/Leaderboard";
import Home from "./pages/Home";
import Competition from "./pages/Competition";
import { ThemeProvider } from "./components/theme-provider";
import Scores from "./pages/Scores";
import Competitions from "./pages/Competitions";
import EditProfile from "./pages/EditProfile";
import Integrations from "./pages/Integrations";
import User from "./pages/User";
import VerifyUser from "./pages/VerifyUser";
import Competitors from "./pages/Competitors";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
      {
        path: "/auth/verify/:token",
        element: <VerifyUser />,
      },
    ],
  },
  {
    path: "/users/:userID",
    element: <User />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
        children: [
          {
            path: "/profile",
            element: <EditProfile />,
          },
          {
            path: "/profile/scores",
            element: <Scores />,
          },
          {
            path: "/profile/competitions",
            element: <Competitions />,
          },
          {
            path: "/profile/integrations",
            element: <Integrations />,
          },
        ],
      },
      {
        path: "/leaderboard",
        element: <Leaderboard />,
      },
      {
        path: "/competition/:id",
        element: <Competition />,
      },
      {
        path: "/competition/:id/competitors",
        element: <Competitors />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
