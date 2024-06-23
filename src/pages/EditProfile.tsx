import { getUser, updateUser } from "@/services/user.service";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const EditProfile = () => {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    bio: "",
  });

  const mutation = useMutation({
    mutationFn: async ({
      name,
      surname,
      bio,
    }: {
      name: string;
      surname: string;
      bio: string;
    }) => {
      return await updateUser(name, surname, bio);
    },
    onSuccess: () => {
      toast.success("User details updated.");
    },
    onError: (error) => {
      toast.success(error.message);
    },
  });

  const handleUserInput = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;

    console.log(value, name);

    setUser({
      ...user,
      [name]: value,
    });
  };

  const updateUserDetails = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    mutation.mutate(user);
  };

  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      return await getUser();
    },
  });

  if (data === undefined) return <h1>Loading...</h1>;

  return (
    <div className=" border-gray-900 flex flex-row px-5">
      <div className="flex flex-col gap-y-3 w-full sm:w-2/3">
        <h3 className="text-sm">Profile</h3>
        <small>
          Logged in as{" "}
          <Link
            className="underline text-blue-500"
            to={`/users/${data.email.split("@")[0]}`}
          >
            {data.email.split("@")[0]}
          </Link>{" "}
        </small>
        <form className="w-full">
          <div className="flex flex-col sm:flex-col">
            <input
              placeholder={data.first_name || "Enter your name"}
              className="my-1 text-slate-800 dark:text-white bg-inherit w-full border outline-none dark:border-gray-700 px-3 py-2 text-xs sm:mr-3"
              type="text"
              name="name"
              value={user.name || data.first_name}
              id="name"
              onChange={handleUserInput}
            />
            <input
              placeholder={data.last_name || "Enter your last name"}
              className="my-1 text-slate-800 dark:text-white bg-inherit w-full border outline-none dark:border-gray-700 px-3 py-2 text-xs sm:mr-3"
              type="text"
              name="surname"
              id="surname"
              value={user.surname || data.last_name}
              onChange={handleUserInput}
            />
            <textarea
              id="bio"
              name="bio"
              placeholder="Enter your bio"
              value={user.bio || data.bio}
              onChange={handleUserInput}
              className="my-1 text-slate-800 dark:text-white bg-inherit w-full border outline-none dark:border-gray-700 px-3 py-2 text-xs sm:mr-3 resize-none"
              rows={10}
            ></textarea>
            <button
              onClick={updateUserDetails}
              disabled={mutation.isPending}
              className="text-slate-800 dark:text-white my-1 bg-yellow-500 w-1/3 sm:w-1/3 border-none outline-none border-gray-700 px-3 py-2 text-xs mr-3 disabled:bg-gray-200 disabled:cursor-not-allowed"
            >
              {mutation.isPending ? " Updating changes..." : " Update changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
