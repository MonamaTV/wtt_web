import { useState } from "react";
import { IoPersonAdd } from "react-icons/io5";
const NewCompetition = () => {
  const [invites, setInvites] = useState([""]);
  return (
    <>
      <div className="text-gray-900 bg-white">
        <form className="my-5">
          <div className="flex flex-col gap-y-1 my-2">
            <label htmlFor="name" className="text-xs">
              Name*
            </label>
            <input
              className="border   outline-none text-xs px-3 py-2"
              placeholder="Enter competition name"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-y- my-2">
            <label htmlFor="name" className="text-xs">
              Invites*
            </label>
            {invites.map((_) => (
              <input
                className="border outline-none text-xs px-3 py-2 mb-2"
                placeholder="Enter peer's email"
                type="email"
              />
            ))}
          </div>
          <div className="flex flex-col gap-y- my-2">
            <span
              onClick={() => setInvites((prevInvites) => [...prevInvites, ""])}
              className="border w-7 h-7 flex justify-center items-center p-1"
            >
              <IoPersonAdd />
            </span>
          </div>
          <div className="flex flex-col gap-y- my-2">
            <button className="border bg-black text-yellow-500   outline-none text-xs px-3 py-2">
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewCompetition;
