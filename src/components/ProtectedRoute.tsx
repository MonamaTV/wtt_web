import { Navigate } from "react-router-dom";
import useLogin from "./hooks/useAuth";
import { ReactNode } from "react";

export interface PrivateRouterProps {
  redirectPath: string;
  children: ReactNode;
}

export const PrivateRoute = ({
  redirectPath,
  children,
  ...props
}: PrivateRouterProps) => {
  const { isLoggedIn } = useLogin();

  if (!isLoggedIn) {
    return <Navigate to={redirectPath} replace {...props} />;
  }

  return children;
};
