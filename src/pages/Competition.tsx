import { CompetitionTable } from "@/components/CompetitionTable";
import {
  getCompetitionDetails,
  getCompetitionInformation,
} from "@/services/game.service";
import { useQuery } from "@tanstack/react-query";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";

const Competition = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: competition } = useQuery({
    queryKey: ["competition"],
    queryFn: async () => {
      return await getCompetitionDetails(id);
    },
  });

  const { data: info } = useQuery({
    queryKey: ["competition_details"],
    queryFn: async () => {
      return await getCompetitionInformation(id);
    },
  });

  const headers = ["", "Competitor", "WPM", "Accuracy", "Words", "Played in"];

  if (!competition || !info) return <h1>Loading...</h1>;

  return (
    <div className="my-4 container h-screen">
      <div className="flex flex-row my-5 gap-3 justify-center">
        <div className="w-2/3 scroll-m-0">
          <button
            className="text-xs bg-yellow-500 w-9 text-center px-3 py-1"
            onClick={() => navigate(-1)}
          >
            <IoArrowBack />
          </button>
          <br />
          <div className="my-2">
            <h3>Competition: {info?.name}</h3>
            <small className="text-center">
              By {info?.user.email.split("@")[0]}
            </small>
          </div>
          <CompetitionTable headers={headers} data={competition} />
        </div>
      </div>
    </div>
  );
};

export default Competition;
