import useLogin from "@/components/hooks/useAuth";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const VerifyUser = () => {
  const { token } = useParams();
  const { isLoading, verify } = useLogin();
  useEffect(() => {
    const getVerifiedUser = async () => {
      try {
        if (token === undefined) {
          return;
        }
        await verify(token);
      } catch (error) {
        console.log(error);
      }
    };
    getVerifiedUser();
  }, []);

  if (token === undefined) {
    toast.error("The token is invalid.");
  }

  return (
    <div className="h-[80vh] dark:text-white text-black sm:container flex flex-col justify-center items-center text-center">
      <h3 className="font-bold dark:text-white my-5">
        <Link to={"/"}>
          WeAre<span className="text-yellow-500">Typing_</span>
        </Link>
      </h3>
      <h1 className="text-2xl">Loading...</h1>
      <h5 className="text-xs">
        You will be redirected to dashboard page once your email is verified...
      </h5>
    </div>
  );
};

export default VerifyUser;
