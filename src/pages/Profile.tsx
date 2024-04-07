import { useState } from "react";
import Modal from "../components/Modal";
import { SheetTrigger } from "@/components/ui/sheet";
import NewCompetition from "@/components/NewCompetition";
export const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="my-4 text-white">
      <div className="border border-gray-900 flex flex-row p-10 my-5">
        <div className="flex flex-col gap-y-3">
          <h3 className="text-sm">Profile</h3>
          <small>Logged in as tmonama023</small>
          <form className="w-full">
            <div className="flex flex-row">
              <input
                placeholder="Enter your nane"
                className="text-white bg-inherit w-full border outline-none border-gray-700 px-3 py-2 text-xs mr-3"
                type="text"
                name="email"
                id="email"
              />
              <input
                placeholder="Enter your last name"
                className="text-white bg-inherit w-full border outline-none border-gray-700 px-3 py-2 text-xs mr-3"
                type="text"
                name="email"
                id="email"
              />
              <button className="text-white bg-yellow-500 w-full border-none outline-none border-gray-700 px-3 py-2 text-xs mr-3">
                Update changes
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="border border-gray-900 flex flex-row p-10 my-5">
        <div className="flex flex-col gap-y-3 w-full">
          <h3 className="text-sm">Scores</h3>
          <div className="flex flex-row gap-x-2 justify-between">
            <div className="gap-x-2 flex">
              <select
                className="border-none bg-gray-900 text-white text-center text-xs px-3 outline-none py-1"
                name="sort"
                id="sort"
              >
                <option value="0">Sort by</option>
                <option value="0">Date</option>
                <option value="0">Accuracy</option>
                <option value="0">WPM</option>
              </select>
              <select
                className="border-none bg-gray-900 text-whitetext-center text-xs px-3 py-1 outline-none"
                name="sort"
                id="sort"
              >
                <option value="0">Last games</option>
                <option value="0">10 games</option>
                <option value="0">20 games</option>
                <option value="0">30 games</option>
              </select>
            </div>
            <Modal
              description=" You can create a competition amongst your peers. You need to invite
            them using WTC emails."
              heading="Create competition"
            >
              <NewCompetition />
            </Modal>
          </div>
          <div className="w-full">
            <table className="my-2 w-full  border-separate border-spacing-y-3 border-spacing-x-0">
              <thead className="hidden md:table-header-group  w-full text-left px-5 h-14 text-gray-800 dark:text-gray-100 ">
                <tr className="border font-normal">
                  <th>#</th>
                  <th>Creator</th>
                  <th>WPM</th>
                  <th>Accuracy</th>
                  <th>Played at</th>
                  <th>Completed</th>
                </tr>
              </thead>
              <tbody className="w-full text-sm">
                <tr className="border-b border-cyan-100 border">
                  <td>1.</td>
                  <td>Tadima</td>
                  <td>100</td>
                  <td>90%</td>
                  <td>21 Jun 2019</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>1.</td>
                  <td>Tadima</td>
                  <td>100</td>
                  <td>90%</td>
                  <td>21 Jun 2019</td>
                  <td>Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="border border-gray-900 flex flex-row p-10 my-5">
        <div className="flex flex-col gap-y-3 w-full">
          <h3 className="text-sm">Competitions</h3>
          <div className="flex flex-row gap-x-2 justify-between">
            <div className="gap-x-2 flex">
              <select
                className="border-none text-black text-center text-sm px-3 outline-none py-1"
                name="sort"
                id="sort"
              >
                <option value="0">Sort by</option>
                <option value="0">Date</option>
                <option value="0">Accuracy</option>
                <option value="0">WPM</option>
              </select>
              <select
                className="border-none text-black text-center text-sm px-3 py-1 outline-none"
                name="sort"
                id="sort"
              >
                <option value="0">Last games</option>
                <option value="0">10 games</option>
                <option value="0">20 games</option>
                <option value="0">30 games</option>
              </select>
            </div>
            <button className="bg-yellow-500 text-xs px-4">Create new</button>
          </div>
          <div className="w-full">
            <table className="my-2 w-full  border-separate border-spacing-y-3 border-spacing-x-0">
              <thead className="hidden md:table-header-group  w-full text-left px-5 h-14 text-gray-800 dark:text-gray-100 ">
                <tr className="border font-normal">
                  <th>#</th>
                  <th>Creator</th>
                  <th>WPM</th>
                  <th>Accuracy</th>
                  <th>Played at</th>
                  <th>Completed</th>
                </tr>
              </thead>
              <tbody className="w-full text-sm">
                <tr className="border-b border-cyan-100 border">
                  <td>1.</td>
                  <td>Tadima</td>
                  <td>100</td>
                  <td>90%</td>
                  <td>21 Jun 2019</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>1.</td>
                  <td>Tadima</td>
                  <td>100</td>
                  <td>90%</td>
                  <td>21 Jun 2019</td>
                  <td>Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
