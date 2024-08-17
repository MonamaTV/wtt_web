import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/auth.service";
import { toast } from "react-toastify";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isPending, setIsPending] = useState(false);

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handlerRegister = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsPending(true);
    try {
      const response = await registerUser(
        user.email,
        user.password,
        user.confirmPassword
      );
      const data = JSON.parse(response.data);
      if (response.status == 200) {
        toast.success("Check your emails to verify your account!");
      } else {
        toast.error(data.detail);
      }
    } catch (error: unknown) {
      toast.error("Failed to register. Please try again!");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="h-[80vh] sm:container flex flex-col justify-center items-center">
      <h3 className="font-bold dark:text-white my-5">
        <Link to={"/"}>
          WeAre<span className="text-yellow-500">Typing_</span>
        </Link>
      </h3>
      <form className="w-full sm:w-1/3">
        <div className="w-full my-5">
          <label className="dark:text-white text-sm my-1 block" htmlFor="email">
            Email:
          </label>
          <input
            placeholder="E.g tad023@student.wethinkcode.co.za"
            className="dark:text-white bg-inherit w-full border outline-none px-3 border-gray-700 py-2 text-sm"
            type="text"
            name="email"
            onChange={handleUserInput}
            id="email"
          />
        </div>
        <div className="w-full my-5">
          <label
            className="dark:text-white border-gray-700 text-sm my-1 block"
            htmlFor="email"
          >
            Password:
          </label>
          <input
            placeholder="Enter your password"
            className="dark:text-white border-gray-700 bg-inherit w-full border outline-none px-3 py-2 text-sm"
            type="password"
            onChange={handleUserInput}
            name="password"
            id="password"
          />
        </div>
        <div className="w-full my-5">
          <label
            className="dark:text-white border-gray-700 text-sm my-1 block"
            htmlFor="email"
          >
            Confirm password:
          </label>
          <input
            placeholder="Confirm your password"
            className="dark:text-white border-gray-700 bg-inherit w-full border outline-none px-3 py-2 text-sm"
            type="password"
            name="confirmPassword"
            id="password"
            onChange={handleUserInput}
          />
        </div>

        <div onClick={handlerRegister} className="w-full my-5">
          <button
            disabled={isPending}
            className="dark:text-white bg-yellow-500 w-full border-none outline-none px-3 py-2 text-sm disabled:bg-gray-200 disabled:cursor-not-allowed"
          >
            {isPending ? "Submitting" : " Sign up"}
          </button>
        </div>
        <div className="w-full my-2 dark:text-gray-50 text-xs">
          <Link className="underline" to={"/auth/login"}>
            Already have account? Sign in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
