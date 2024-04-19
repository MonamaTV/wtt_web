import { Link } from "react-router-dom";
import useLogin from "./hooks/useAuth";
import { IoLogOutSharp } from "react-icons/io5";
const Header = () => {
  const { logout } = useLogin();
  return (
    <header className=" py-4 text-white px-10 border-b bottom-1 border-gray-900">
      <nav className="flex flex-row justify-between items-center">
        <h3 className="font-bold">
          <Link to={"/"} className="text-xs sm:text-base">
            WeAre<span className="text-yellow-500">Typing_</span>
          </Link>
        </h3>
        <ul className="flex gap-3 text-xs flex-row items-center">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/profile"}>Profile</Link>
          </li>
          <li>
            <Link to={"/leaderboard"}>Leaderboard</Link>
          </li>
          <li className="hidden sm:list-item">
            <button
              onClick={logout}
              className="flex items-center justify-center gap-2 border px-1 text-xs py-1"
            >
              Sign out
              <IoLogOutSharp />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
