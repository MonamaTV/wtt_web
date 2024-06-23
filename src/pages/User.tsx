import Header from "@/components/Header";
import { LineChartHero } from "@/components/Line";
import { TableUI } from "@/components/Table";
import Tap from "@/components/Tap";
import { getUserByUsername, getUserStats } from "@/services/user.service";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userID } = useParams();

  const [tap, setTap] = useState(1);

  const handleChangeTap = (value: number) => {
    setTap(value);
  };

  const { data: stats } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      return await getUserStats(userID);
    },
  });
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      return await getUserByUsername(userID);
    },
  });
  const scoreHeaders = [
    "#",
    "Player",
    "WPM",
    "Accuracy",
    "Played at",
    "Mode",
    "Completed",
  ];

  return (
    <div className="dark:bg-[#09090b] min-h-[100vh]">
      <Header />
      <div className="sm:container mx-auto dark:text-white">
        <div className="w-3/3 my-3 scroll-m-0 flex flex-col items-center justify-center">
          <div className="text-center w-2/3 sm:w-1/2">
            <h4 className="my-3">
              {user?.first_name ? user?.first_name : user?.email.split("@")[0]}
            </h4>
            <small className="text-center">{user?.bio}</small>
          </div>
          <br />
          <h3>Analytics</h3>
          <Tap handleChangeTap={handleChangeTap} />
          <div className="sm:w-2/3 w-3/4 shadow-md">
            {tap == 1 ? (
              <LineChartHero data={stats} />
            ) : (
              <TableUI headers={scoreHeaders} data={stats} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
