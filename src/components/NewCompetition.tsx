import { createNewCompetition } from "@/services/game.service";
import { Competition } from "@/services/types";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { IoPersonAdd } from "react-icons/io5";
import { toast } from "react-toastify";

const NewCompetition = () => {
  const [email, setEmail] = useState("");
  const [competition, setCompetition] = useState({
    name: "",
    rounds: 0,
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
  };

  const handleRemovePeer = (invite: string) => {
    setCompetition((prevCompetion) => {
      const newCompetition = prevCompetion.competitors.filter(
        (val) => val !== invite
      );
      return {
        ...competition,
        competitors: [...newCompetition],
      };
    });
    setEmail("");
  };

  const handlePeerEmailInput = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const handleRoundsInput = (event: React.FormEvent<HTMLInputElement>) => {
    //
    try {
      const number = parseInt(event.currentTarget.value);
      setCompetition((prevCompetion) => {
        return { ...prevCompetion, rounds: number };
      });
    } catch (error) {
      // toast.error("Rounds must be a number.")
    }
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
        return { name: "", competitors: Array(), rounds: 0 };
      });
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
              Name<span className="text-red-400">*</span>
            </label>
            <input
              className="border outline-none text-xs px-3 py-2"
              placeholder="Enter competition name"
              type="text"
              value={competition.name}
              onChange={handleCompetitionNameInput}
            />
          </div>
          <div className="flex flex-col gap-y-1 my-2">
            <label htmlFor="name" className="text-xs">
              Rounds<span className="text-red-400">*</span>
            </label>
            <input
              className="border outline-none text-xs px-3 py-2"
              placeholder="No. of times each student plays"
              type="number"
              value={competition.rounds}
              onChange={handleRoundsInput}
            />
          </div>
          <div className="flex flex-col gap-y- my-2">
            <label htmlFor="name" className="text-xs">
              Invites<span className="text-red-400">*</span>
            </label>
            <input
              className="border outline-none text-xs px-3 py-2 mb-2"
              placeholder="Enter peer's email"
              type="email"
              value={email}
              onChange={handlePeerEmailInput}
            />
          </div>
          <div className="flex flex-col my-2">
            <span
              onClick={handleInvitesInput}
              className="border cursor-pointer w-20 flex flex-row justify-center items-center p-1"
            >
              <IoPersonAdd /> <p className="text-xs">Add</p>
            </span>
          </div>
          <div className="flex flex-col my-2">
            <span className="text-xs my-1 text-gray-500">
              *Touch names to remove
            </span>
            {competition.competitors.map((invite, index) => (
              <p
                key={index}
                className="flex flex-row justify-items-start text-sm"
                onClick={() => handleRemovePeer(invite)}
              >
                - {invite.split("@")[0]}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-y-2 my-2">
            <button
              onClick={addCompetition}
              className="border bg-black text-yellow-500   outline-none text-xs px-3 py-2"
            >
              {mutation.isPending ? "Creating" : "Submit Competition"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewCompetition;
