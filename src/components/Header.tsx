import { Link } from "react-router-dom";
import useLogin from "./hooks/useAuth";
import { ModeToggle } from "./mode-toggle";
const Header = () => {
  const { logout, isLoggedIn } = useLogin();
  return (
    <header
      id="header"
      className="p-4 dark:text-white shadow-sm dark:shadow-none sm:px-10 dark:border-b bottom-1 border-gray-900"
    >
      <nav className="flex flex-row justify-between items-center">
        <h3 className="font-bold text-xs sm:text-base">
          <Link
            to={"/"}
            className="text-xs sm:text-base dark:text-white text-black"
          >
            WeAre<span className="text-yellow-500">Typing_</span>
          </Link>
        </h3>
        <ul className="flex gap-3 text-xs flex-row items-center">
          {isLoggedIn ? (
            <>
              <li>
                <Link className="underline" to={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="underline" to={"/profile"}>
                  Me
                </Link>
              </li>
              <li>
                <Link className="underline" to={"/leaderboard"}>
                  Leaderboard
                </Link>
              </li>
              <li className="hidden sm:list-item">
                <button
                  onClick={logout}
                  className="flex items-center justify-center gap-2 px-1 text-xs py-1"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              {" "}
              <a href="/auth/login">Login</a>{" "}
            </li>
          )}
          <li>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
