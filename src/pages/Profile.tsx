import { Link, Outlet } from "react-router-dom";
export const Profile = () => {
  return (
    <div className="dark:text-white container my-5 flex flex-row min-h-screen">
      <div className="w-1/5">
        <nav className="grid gap-4 text-sm text-muted-foreground">
          <Link to="/profile" className="font-semibold text-primary">
            Profile
          </Link>
          <Link to="/profile/competitions">Competitions</Link>
          <Link to="/profile/scores">Scores</Link>
          <Link to="#">Integration</Link>
          <Link to="#">Settings</Link>
        </nav>
      </div>
      <div className="w-4/5 border-l border-gray-900">
        <Outlet />
      </div>
    </div>
  );
};
