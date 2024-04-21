import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import { PrivateRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <PrivateRoute redirectPath="/auth/login">
      <div className="bg-[#09090b] py-5">
        <Header />
        <div className="sm:container mx-auto text-white">
          <Outlet />
        </div>
        <ToastContainer />
      </div>
    </PrivateRoute>
  );
}

export default App;
