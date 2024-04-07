const Leaderboard = () => {
  return (
    <div className="my-4 text-white">
      <div className=" border-gray-900 rounded-lg flex flex-col p-10">
        <h4 className="flex flex-col justify-center mr-10">Leaderboard</h4>
        <small>The current leaders... (up to date)</small>
      </div>
      <div className=" px-10">
        <table className="my-2 w-full  border-separate border-spacing-y-3 border-spacing-x-0">
          <thead className="hidden md:table-header-group  w-full text-left px-5 h-14 text-gray-800 dark:text-gray-100 ">
            <tr className="border font-normal">
              <th>#</th>
              <th>Name</th>
              <th>WPM</th>
              <th>Accuracy</th>
              <th>Last played</th>
            </tr>
          </thead>
          <tbody className="w-full text-sm">
            <tr className="border-b border-cyan-100 border">
              <td>1.</td>
              <td>Tadima</td>
              <td>100</td>
              <td>90%</td>
              <td>21 Jun 2019</td>
            </tr>
            <tr>
              <td>1.</td>
              <td>Tadima</td>
              <td>100</td>
              <td>90%</td>
              <td>21 Jun 2019</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
