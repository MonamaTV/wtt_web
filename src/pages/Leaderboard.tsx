import { LeaderboardUI } from "@/components/LeaderboardTable";
import { getLeaderboard } from "@/services/game.service";
import { useQuery } from "@tanstack/react-query";

const Leaderboard = () => {
  const { data: leaderboard } = useQuery({
    queryKey: ["leaderboard"],
    queryFn: async () => {
      return await getLeaderboard();
    },
  });

  const leaderboardHeaders = ["#", "Name", "WPM", "Accuracy", "Last played"];

  if (leaderboard === undefined) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="dark:text-white min-h-screen">
      <div className="border-gray-900 rounded-lg flex flex-col p-10">
        <h4 className="flex flex-col justify-center mr-10">Leaderboard</h4>
        <small>The current leaders... (up to date)</small>
      </div>
      <div className="px-10">
        <LeaderboardUI data={leaderboard} headers={leaderboardHeaders} />
      </div>
    </div>
  );
};

export default Leaderboard;
