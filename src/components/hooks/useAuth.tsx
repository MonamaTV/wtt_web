import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../../services/auth.service";
import { jwtDecode } from "jwt-decode";
import { verifyUser } from "@/services/user.service";

const useLogin = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(token != null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const login = async (email: string, password: string) => {
    setIsLoading(true);

    try {
      const response = await loginUser(email, password);
      const status = response.status;
      const data = JSON.parse(response.data);

      if (status === 200) {
        setIsLoggedIn(true);
        sessionStorage.setItem("token", data.access_token);
        navigate("/");
      } else {
        toast.error(data.detail);
        sessionStorage.removeItem("token");
      }
    } catch (err) {
      toast.error("An error occurred. Please try again.");
      sessionStorage.removeItem("token");
    } finally {
      setIsLoading(false);
    }
  };

  const verify = async (token: string) => {
    setIsLoading(true);

    try {
      const response = await verifyUser(token);
      const status = response.status;
      const data = JSON.parse(response.data);

      if (status === 200) {
        setIsLoggedIn(true);
        sessionStorage.setItem("token", data.access_token);
        setTimeout(() => {
          navigate("/");
        }, 4000);
      } else {
        toast.error(data.detail);
        sessionStorage.removeItem("token");
      }
    } catch (err) {
      console.log(err);
      toast.error("An error occurred. Please try again.");
      sessionStorage.removeItem("token");
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem("token");
    window.location.href = "/auth/login";
  };

  const getToken = () => {
    return token || "";
  };

  const isTokenExist = () => {
    return token != null;
  };

  const decodedToken = (): { user_id: string | null; email: string | null } => {
    if (!getToken()) {
      return { user_id: null, email: null };
    }
    return jwtDecode(getToken());
  };

  return {
    isLoggedIn,
    isLoading,
    login,
    logout,
    setIsLoggedIn,
    getToken,
    isTokenExist,
    decodedToken,
    verify,
  };
};

export default useLogin;
