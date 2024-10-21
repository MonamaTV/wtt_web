import { NavLink, Outlet } from "react-router-dom";
import { MdManageAccounts } from "react-icons/md";
import { MdGames } from "react-icons/md";
import { MdGrade } from "react-icons/md";
import { MdBuild } from "react-icons/md";
import { MdApi } from "react-icons/md";
import useLogin from "@/components/hooks/useAuth";

export const Profile = () => {
  const { decodedToken } = useLogin();

  const email = decodedToken()?.email;
  if (email === null) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="dark:text-white sm:container my-5 flex flex-row min-h-screen">
      <div className="w-0 sm:w-1/5">
        <nav className="hidden sm:grid gap-4 text-sm text-muted-foreground">
          <NavLink
            to="/profile"
            end
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-primary dark:text-white"
                : "text-gray-600"
            }
          >
            Profile
          </NavLink>
          <NavLink
            to={`/users/${email.split("@")[0]}`}
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-primary dark:text-white"
                : "text-gray-600"
            }
          >
            Analytics
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-primary dark:text-white"
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
                ? "font-semibold text-primary dark:text-white"
                : "text-gray-600"
            }
          >
            Scores
          </NavLink>
          <NavLink
            to="/profile/integrations"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-primary dark:text-white"
                : "text-gray-600"
            }
          >
            Integration
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-primary dark:text-white"
                : "text-gray-600"
            }
          >
            Settings
          </NavLink>
        </nav>
        <nav className="sm:hidden flex flex-row justify-around bg-[#202020e1] fixed bottom-0 w-screen p-3 text-center">
          <NavLink
            to="/profile"
            end
            className={({ isActive }) =>
              `font-semibold text-primary flex flex-col items-center ${
                isActive ? "text-white" : "text-gray-600"
              }`
            }
          >
            <MdManageAccounts />
            <span className="text-xs">User</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-semibold text-primary flex flex-col items-center ${
                isActive ? "text-white" : "text-gray-600"
              }`
            }
            to="/profile/competitions"
          >
            <MdGames />
            <span className="text-xs">Competitions</span>
          </NavLink>
          <NavLink
            to="/profile/scores"
            className={({ isActive }) =>
              `font-semibold text-primary flex flex-col items-center ${
                isActive ? "text-white" : "text-gray-600"
              }`
            }
          >
            <MdGrade />
            <span className="text-xs">Scores</span>
          </NavLink>
          {/* <NavLink
            to="/"
            className={({ isActive }) =>
              `font-semibold text-primary flex flex-col items-center ${
                isActive ? "text-white" : "text-gray-600"
              }`
            }
          >
            <MdApi />
            <span className="text-xs">Integrate</span>
          </NavLink>
          <NavLink
            to="/profile/integrations"
            className={({ isActive }) =>
              `font-semibold text-primary flex flex-col items-center ${
                isActive ? "text-white" : "text-gray-600"
              }`
            }
          >
            <MdBuild />
            <span className="text-xs">Settings</span>
          </NavLink> */}
        </nav>
      </div>
      <div className="w-full sm:w-4/5 sm:border-l sm:border-gray-900">
        <Outlet />
      </div>
    </div>
  );
};
