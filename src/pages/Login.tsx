import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../components/hooks/useAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useLogin();

  const handleLogin = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="h-[80vh] sm:container flex flex-col justify-center items-center">
      <h3 className="font-bold text-white my-5">
        <Link to={"/"}>
          WeAre<span className="text-yellow-500">Typing_</span>
        </Link>
      </h3>
      <form className="w-full sm:w-1/3">
        <div className="w-full my-5">
          <label className="text-white text-sm my-1 block" htmlFor="email">
            Email:
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E.g tadima@student.wethinkcode.co.za"
            className="text-white bg-inherit w-full border outline-none px-3 py-2 border-gray-700 text-sm"
            type="text"
            name="email"
            id="email"
          />
        </div>
        <div className="w-full my-5">
          <label className="text-white text-sm my-1 block" htmlFor="email">
            Password:
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="text-white bg-inherit w-full border outline-none px-3 border-gray-700 py-2 text-sm"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <div className="w-full my-2 text-gray-50 text-xs">
          <Link className="underline" to={"/auth/register"}>
            Change your password
          </Link>
        </div>
        <div className="w-full my-5">
          <button
            onClick={handleLogin}
            className="text-white text-sm bg-yellow-500 w-full border-none outline-none px-3 py-2"
          >
            Sign in
          </button>
        </div>
        <div className="w-full my-2 text-gray-50 text-xs">
          <Link className="underline" to={"/auth/register"}>
            Don't have an account? Create one
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
