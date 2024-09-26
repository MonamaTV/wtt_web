import CompetitorList from "@/components/CompetitorList";
import { getCompetitorList } from "@/services/game.service";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const Competitors = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: competitorList } = useQuery({
    queryKey: ["competitor_list"],
    queryFn: async () => {
      return await getCompetitorList(id);
    },
  });

  const headers = ["#", "First name", "Last name", "Username", "Bio"];

  if (!competitorList) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="dark:text-white min-h-screen">
      <div className="border-gray-900 rounded-lg flex flex-col p-10">
        <button
          className="text-xs bg-yellow-500 w-9 text-center px-3 py-1"
          onClick={() => navigate(-1)}
        >
          <IoArrowBack />
        </button>
        <br />
        <h4 className="flex flex-col justify-center mr-10">Competitors</h4>
        <small>All the competitors</small>
      </div>
      <div className="px-10">
        <CompetitorList headers={headers} data={competitorList} />
      </div>
    </div>
  );
};

export default Competitors;
