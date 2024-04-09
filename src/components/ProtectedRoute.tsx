import { Navigate } from "react-router-dom";
import useLogin from "./hooks/useAuth";

export interface PrivateRouterProps {
  redirectPath: string;
  children: JSX.Element;
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
