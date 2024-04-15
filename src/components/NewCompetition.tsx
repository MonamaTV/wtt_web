import { createNewCompetition } from "@/services/game.service";
import { Competition } from "@/services/types";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { IoPersonAdd } from "react-icons/io5";
import { toast } from "react-toastify";
const NewCompetition = () => {
  const [invites, setInvites] = useState([""]);

  const [email, setEmail] = useState("");

  const [competition, setCompetition] = useState({
    name: "",
    competitors: Array(),
  });

  const handleInvitesInput = () => {
    setCompetition((prevCompetion) => {
      return {
        ...competition,
        competitors: [...prevCompetion.competitors, email],
      };
    });
    setEmail("");
    setInvites([...invites, ""]);
  };

  const handlePeerEmailInput = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const handleCompetitionNameInput = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    const value = event.currentTarget.value;
    setCompetition((prevCompetion) => {
      return { ...prevCompetion, name: value };
    });
  };

  const mutation = useMutation({
    mutationFn: async (competition: Competition) => {
      return await createNewCompetition(competition);
    },
    onSuccess: () => {
      toast.success("Successfully created a competition.");
      setCompetition((_) => {
        return { name: "", competitors: Array() };
      });
      setInvites([""]);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const addCompetition = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    mutation.mutate(competition);
  };

  return (
    <>
      <div className="text-gray-900 bg-white">
        <form className="my-5">
          <div className="flex flex-col gap-y-1 my-2">
            <label htmlFor="name" className="text-xs">
              Name*
            </label>
            <input
              className="border outline-none text-xs px-3 py-2"
              placeholder="Enter competition name"
              type="text"
              value={competition.name}
              onChange={handleCompetitionNameInput}
            />
          </div>
          <div className="flex flex-col gap-y- my-2">
            <label htmlFor="name" className="text-xs">
              Invites*
            </label>
            {invites.map((_, index: number) => (
              <input
                key={index}
                className="border outline-none text-xs px-3 py-2 mb-2"
                placeholder="Enter peer's email"
                type="email"
                onChange={handlePeerEmailInput}
              />
            ))}
          </div>
          <div className="flex flex-col gap-y- my-2">
            <span
              onClick={handleInvitesInput}
              className="border w-7 h-7 flex justify-center items-center p-1"
            >
              <IoPersonAdd />
            </span>
          </div>
          <div className="flex flex-col gap-y-2 my-2">
            <button
              onClick={addCompetition}
              className="border bg-black text-yellow-500   outline-none text-xs px-3 py-2"
            >
              {mutation.isPending ? "Creating" : "Create"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewCompetition;
