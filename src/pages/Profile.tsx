import Modal from "../components/Modal";
import NewCompetition from "@/components/NewCompetition";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getUser, updateUser } from "@/services/user.service";
import { deleteCompetition, getCompetitions, getUserScores, leaveCompetition } from "@/services/game.service";
import { useState } from "react";
import { toast } from "react-toastify";
import SelectScroll from "@/components/Select";
import { games, options } from "@/services/types";
import Action from "@/components/Action";
import useLogin from "@/components/hooks/useAuth";
import { TableUI } from "@/components/Table";
export const Profile = () => {


  const { decodedToken } = useLogin();

  const [limit, setLimit] = useState(10);
  const [orderBy, setOrderBy] = useState(1);

  const [user, setUser] = useState({
    name: "",
    surname: "",
  });

  const mutation = useMutation({
    mutationFn: async ({
      name,
      surname,
    }: {
      name: string;
      surname: string;
    }) => {
      return await updateUser(name, surname);
    },
    onSuccess: () => {
      toast.success("User details updated.");
    },
    onError: (error) => {
      toast.success(error.message);
    },
  });

  const handleUserInput = (event: React.FormEvent<HTMLInputElement>) => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;

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

  const { data: scores } = useQuery({
    queryKey: ["scores", limit, orderBy],
    queryFn: async () => {
      return await getUserScores(limit, orderBy);
    },
  });

  const { data: competitions } = useQuery({
    queryKey: ["competitions"],
    queryFn: async () => {
      return await getCompetitions();
    },
  });

  const competitionMutation = useMutation({
    mutationFn: async (competitionID: string) => {
        return await deleteCompetition(competitionID)
    },
    onSuccess: () => {
      toast.success("Successfully deleted competition.")
    }
  });

  const leaveMutation = useMutation({
    mutationFn: async (competitionID: string) => {
        return await leaveCompetition(competitionID)
    },
    onSuccess: () => {
      toast.success("Successfully left competition.")
    }
  })

  const handleDeleteCompetition = (competitionID: string) => {
    competitionMutation.mutate(competitionID);
  }

  const handleRemoveUserFromCompetition = (competitionID: string) => {
    leaveMutation.mutate(competitionID)
  }

  if (data === undefined || scores === undefined || competitions == undefined) {
    return <h1>Loading...</h1>;
  }

  const userID = decodedToken()?.user_id;

  const scoreHeaders = [
    "#",
    "Creator",
    "WPM",
    "Accuracy",
    "Played at",
    "Mode",
    "Completed"
  ]

  const competitionHeaders = [
    "#",
    "Creator",
    "WPM",
    "Accuracy",
    "Played at",
    "Mode",
    "Completed"
  ]


  return (
    <div className="my-4  text-white">
      <div className="border-b border-gray-900 flex flex-row p-10 my-5">
        <div className="flex flex-col gap-y-3 w-2/3">
          <h3 className="text-sm">Profile</h3>
          <small>Logged in as {data.email.split("@")[0]}</small>
          <form className="w-full">
            <div className="flex flex-row">
              <input
                placeholder={data.first_name || "Enter your name"}
                className="text-white bg-inherit w-full border outline-none border-gray-700 px-3 py-2 text-xs mr-3"
                type="text"
                name="name"
                value={user.name || data.first_name}
                id="name"
                onChange={handleUserInput}
              />
              <input
                placeholder={data.last_name || "Enter your last name"}
                className="text-white bg-inherit w-full border outline-none border-gray-700 px-3 py-2 text-xs mr-3"
                type="text"
                name="surname"
                id="surname"
                value={user.surname || data.last_name}
                onChange={handleUserInput}
              />
              <button
                onClick={updateUserDetails}
                disabled={mutation.isPending}
                className="text-white bg-yellow-500 w-2/3 border-none outline-none border-gray-700 px-3 py-2 text-xs mr-3 disabled:bg-gray-200 disabled:cursor-not-allowed"
              >
                {mutation.isPending
                  ? " Updating changes..."
                  : " Update changes"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="border-b border-gray-900 flex flex-row p-10 my-5">
        <div className="flex flex-col gap-y-3 w-full">
          <h3 className="text-sm">Scores</h3>
          <div className="flex flex-row gap-x-2 justify-between">
            <div className="gap-x-2 flex">
              <SelectScroll
                options={options}
                header={"Sort"}
                handleOnChange={(value) => setOrderBy(parseInt(value))}
              />
              <SelectScroll
                options={games}
                header={"Games"}
                handleOnChange={(value) => setLimit(parseInt(value))}
              />
            </div>
          </div>
          <div className="w-full">
            <TableUI headers={scoreHeaders} data={scores} />
            {/* <table className="my-2 w-full  border-separate border-spacing-y-3 border-spacing-x-0">
              <thead className="hidden md:table-header-group  w-full text-left px-5 h-14 text-gray-800 dark:text-gray-100 ">
                <tr className="border font-normal">
                  <th>#</th>
                  <th>Creator</th>
                  <th>WPM</th>
                  <th>Accuracy</th>
                  <th>Played at</th>
                  <th>Mode</th>
                  <th>Completed</th>
                </tr>
              </thead>
              <tbody className="w-full text-sm">
                {scores.map((score: any, index: number) => {
                  return (
                    <tr
                      key={score.id}
                      className="border-b border-cyan-100 border"
                    >
                      <td>{++index}.</td>
                      <td>
                        {score.user.id === data.id ? "Me" : score.user.email}
                      </td>
                      <td>{score.wpm}</td>
                      <td>{score.accuracy}%</td>
                      <td>{score.played_at}</td>
                      <td>{score.duration}"</td>
                      <td>{score.completed ? "Yes" : "No"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table> */}
          </div>
        </div>
      </div>
      <div className="border-b border-gray-900 flex flex-row p-10 my-5">
        <div className="flex flex-col gap-y-3 w-full">
          <h3 className="text-sm">Competitions</h3>
          <small className="text-xs">
            Competitions that you have created or been invited to.
          </small>
          <div className="flex flex-row gap-x-2 justify-between">
            <div className="gap-x-2 flex"></div>
            <Modal
              description="You can create a competition amongst your peers. You need to invite them using WTC emails."
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
                  <th>Created at</th>
                  <th>Expires in</th>
                  <th>Winner</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="w-full text-sm">
                {
                  competitions.map((competition: any, index: number) => {
                    return (
                        <tr key={competition.id} className="border-b border-cyan-100 border">
                          <td>{++index}.</td>
                          <td>{competition.user?.first_name || competition.user?.email.split("@")[0]}</td>
                          <td>{competition.created_at}</td>
                          <td>{competition.expires_in}</td>
                          <td>Terrence</td>
                          <td>
                            <Action
                              mine={userID === competition.creator_id}
                              competitionID={competition.id}
                              handleDeleteComp={handleDeleteCompetition}
                              handleRemove={handleRemoveUserFromCompetition}
                            />
                          </td>
                        </tr>
                      );
                  })
                }
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
