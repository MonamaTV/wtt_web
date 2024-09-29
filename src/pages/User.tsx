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

  if (stats === undefined || user === undefined) {
    return <h1>Loading...</h1>;
  }

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
      <div className="w-3/4 sm:w-2/3 flex justify-center  mx-auto dark:text-white">
        <div className="w-full my-3 scroll-m-0 flex flex-col -center justify-center">
          <div className="w-3/3 sm:w-1/2">
            <h3 className=" text-lg">
              {user?.first_name ? user?.first_name : user?.email.split("@")[0]}
            </h3>
          </div>
          <h5 className="text-sm">
            Analytics <small className="text-xs">(last 10 games)</small>{" "}
          </h5>
          <br />
          <Tap handleChangeTap={handleChangeTap} />
          <div className="sm:w-3/3 w-4/4">
            {tap == 2 ? (
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
