import { useParams } from "react-router-dom";

const Competition = () => {
  const { id } = useParams();

  return (
    <div className="my-4 container h-screen">
      <h3>Competition details</h3>
      <div className="flex flex-row my-5 gap-3">
        <div className="w-1/3 scroll-m-0">
          <div className="border mb-2 border-gray-900 bg-inherit px-3 py-4">
            <h3>Tadima Monama</h3>
            <h5 className="text-xs">tmonama023</h5>
            <small className="px-3 bg-slate-100 text-black mr-3 text-xs">
              WPM: 70
            </small>
            <small className="px-3 bg-slate-100 text-black mr-3 text-xs">
              Acc: 70%
            </small>
          </div>
          <div className="border mb-2 border-gray-900 bg-inherit px-3 py-4">
            <h3>Tadima Monama</h3>
            <h5 className="text-xs">tmonama023</h5>
            <small className="px-3 bg-slate-100 text-black mr-3 text-xs">
              WPM: 70
            </small>
            <small className="px-3 bg-slate-100 text-black mr-3 text-xs">
              Acc: 70%
            </small>
          </div>
          <div className="border mb-2 border-gray-900 bg-inherit px-3 py-4">
            <h3>Tadima Monama</h3>
            <h5 className="text-xs">tmonama023</h5>
            <small className="px-3 bg-slate-100 text-black mr-3 text-xs">
              WPM: 70
            </small>
            <small className="px-3 bg-slate-100 text-black mr-3 text-xs">
              Acc: 70%
            </small>
          </div>
          <div className="border mb-2 border-gray-900 bg-inherit px-3 py-4">
            <h3>Tadima Monama</h3>
            <h5 className="text-xs">tmonama023</h5>
            <small className="px-3 bg-slate-100 text-black mr-3 text-xs">
              WPM: 70
            </small>
            <small className="px-3 bg-slate-100 text-black mr-3 text-xs">
              Acc: 70%
            </small>
          </div>
        </div>
        <div className="w-2/3">
          <p>Lorm</p>
        </div>
      </div>
    </div>
  );
};

export default Competition;
