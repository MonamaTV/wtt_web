import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { PrivateRoute } from "./components/ProtectedRoute";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="bg-black py-5">
      <Header />
      <div className="container mx-auto tetx-white">
        <PrivateRoute redirectPath="/auth/login">
          <Outlet />
        </PrivateRoute>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
