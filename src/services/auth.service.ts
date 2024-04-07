import axios from "../axios/axios";
export const loginUser = async (email: string, password: string) => {
  const response = await axios.post(
    "/auth/login",
    JSON.stringify({
      email,
      password,
    })
  );
  return response;
};

export const registerUser = async (
  email: string,
  password: string,
  confirmPassword: string
) => {
  const response = await axios.post(
    "/auth/register",
    JSON.stringify({
      email,
      password,
      confirm_password: confirmPassword,
    })
  );
  return response;
};
