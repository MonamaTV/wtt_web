import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../../services/auth.service";
import { jwtDecode } from "jwt-decode";

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
        toast.success("Login successful!");
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

  const decodedToken = (): {
    user_id: string
  } => {
    return jwtDecode(getToken()); 
  }

  return {
    isLoggedIn,
    isLoading,
    login,
    logout,
    setIsLoggedIn,
    getToken,
    isTokenExist,
    decodedToken
  };
};

export default useLogin;
