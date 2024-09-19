import CompetitorList from "@/components/CompetitorList";
import { getCompetitorList } from "@/services/game.service";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const Competitors = () => {

  const { id } = useParams();

  const { data: competitorList } = useQuery({
    queryKey: ["competitor_list"],
    queryFn: async () => {
      return await getCompetitorList(id);
    },
  });

  const headers = ["#", "First name", "Last name", "Username", "Bio"];

  return (
    <div className="dark:text-white min-h-screen">
      <div className="border-gray-900 rounded-lg flex flex-col p-10">
        <h4 className="flex flex-col justify-center mr-10">Competitors</h4>
        <small>All the competitors</small>
      </div>
      <div className="px-10">
        <CompetitorList headers={headers} data={competitorList}  />
      </div>
    </div>
  );
}

export default Competitors;