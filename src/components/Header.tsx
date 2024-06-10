import { Link } from "react-router-dom";
import useLogin from "./hooks/useAuth";
import { IoLogOutSharp } from "react-icons/io5";
import { ModeToggle } from "./mode-toggle";
const Header = () => {
  const { logout } = useLogin();
  return (
    <header className="p-4 dark:text-white shadow-sm dark:shadow-none sm:px-10 dark:border-b bottom-1 border-gray-900">
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
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/profile"}>Me</Link>
          </li>
          <li>
            <Link to={"/leaderboard"}>Leaderboard</Link>
          </li>
          <li className="hidden sm:list-item">
            <button
              onClick={logout}
              className="flex items-center justify-center gap-2 px-1 text-xs py-1"
            >
              {/* Sign out */}
              <IoLogOutSharp />
            </button>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
