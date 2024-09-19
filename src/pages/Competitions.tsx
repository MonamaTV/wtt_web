import { CompetitionsTableUI } from "@/components/Competitions";
import Modal from "@/components/Modal";
import NewCompetition from "@/components/NewCompetition";
import {
  deleteCompetition,
  getCompetitions,
  leaveCompetition,
} from "@/services/game.service";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

const Competitions = () => {
  const competitionHeaders = [
    "#",
    "Creator",
    "Competition name",
    "Created at",
    "Expires in",
    "",
  ];

  const competitionMutation = useMutation({
    mutationFn: async (competitionID: string) => {
      return await deleteCompetition(competitionID);
    },
    onSuccess: () => {
      toast.success("Successfully deleted competition.");
    },
  });

  const leaveMutation = useMutation({
    mutationFn: async (competitionID: string) => {
      return await leaveCompetition(competitionID);
    },
    onSuccess: () => {
      toast.success("Successfully left competition.");
    },
  });

  const handleDeleteCompetition = (competitionID: string) => {
    competitionMutation.mutate(competitionID);
  };

  const handleRemoveUserFromCompetition = (competitionID: string) => {
    leaveMutation.mutate(competitionID);
  };

  const { data: competitions } = useQuery({
    queryKey: ["competitions"],
    queryFn: async () => {
      return await getCompetitions();
    },
  });

  if (competitions === undefined) return <h1>Loading...</h1>;

  return (
    <div className="border-b border-gray-900 flex flex-row px-5 min-h-screen">
      <div className="flex flex-col gap-y-3 w-full">
        {/* <h3 className="text-sm">Competitions</h3> */}
        <small className="text-xs">
          Competitions that you have created or been invited to.
        </small>
        <div className="flex flex-row gap-x-2 justify-between">
          <div className="gap-x-2 flex w-1/2">
            <input
              placeholder="Search..."
              type="text"
              className="my-1 text-slate-800 dark:text-white bg-inherit w-full border outline-none dark:border-gray-700 px-3 py-2 text-xs sm:mr-3"
            />
          </div>
          <Modal
            description="You can create a competition amongst your peers. You need to invite them using WTC emails."
            heading="Create competition"
          >
            <NewCompetition />
          </Modal>
        </div>
        <div className="w-full">
          <CompetitionsTableUI
            handleDeleteCompetition={handleDeleteCompetition}
            handleRemoveUserFromCompetition={handleRemoveUserFromCompetition}
            data={competitions}
            headers={competitionHeaders}
          />
        </div>
      </div>
    </div>
  );
};

export default Competitions;
