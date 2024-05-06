import { NavLink, Outlet } from "react-router-dom";
export const Profile = () => {
  return (
    <div className="dark:text-white sm:container my-5 flex flex-row min-h-screen">
      <div className="w-0 sm:w-1/5">
        <nav className="hidden sm:grid gap-4 text-sm text-muted-foreground">
          <NavLink
            to="/profile"
            end
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-primary text-white"
                : "text-gray-600"
            }
          >
            Profile
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-primary text-white"
                : "text-gray-600"
            }
            to="/profile/competitions"
          >
            Competitions
          </NavLink>
          <NavLink
            to="/profile/scores"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-primary text-white"
                : "text-gray-600"
            }
          >
            Scores
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-primary text-white"
                : "text-gray-600"
            }
          >
            Integration
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-primary text-white"
                : "text-gray-600"
            }
          >
            Settings
          </NavLink>
        </nav>
      </div>
      <div className="w-full sm:w-4/5 sm:border-l sm:border-gray-900">
        <Outlet />
      </div>
    </div>
  );
};
