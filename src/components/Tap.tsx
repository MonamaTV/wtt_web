import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Tap = ({
  handleChangeTap,
}: {
  handleChangeTap: (value: number) => void;
}) => {
  return (
    <div className="flex flex-row justify-center items-center my-3">
      <Tabs defaultValue="15" className="dark:bg-[#09090b]">
        <TabsList className="rounded-none dark:bg-[#121214]">
          <TabsTrigger
            onClick={() => handleChangeTap(1)}
            className="rounded-none text-xs"
            value="1"
          >
            Tabular
          </TabsTrigger>
          <TabsTrigger
            onClick={() => handleChangeTap(2)}
            className="rounded-none text-xs"
            value="2"
          >
            Graphical
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default Tap;
