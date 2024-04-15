import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Auth() {
  return (
    <div className="bg-[#09090b] py-5 h-screen">
      <div className="container mx-auto tetx-white">
        <Outlet />
      </div>
      <ToastContainer />
    </div>
  );
}

export default Auth;
