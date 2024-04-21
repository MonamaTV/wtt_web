import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TimeTapProps {
  handleChangeTimer: (value: number) => void;
}

const TimeTap = ({ handleChangeTimer }: TimeTapProps) => {
  return (
    <div className="flex flex-row justify-center items-center my-3">
      <Tabs defaultValue="15" className="dark:bg-[#09090b]">
        <TabsList className="rounded-none dark:bg-[#121214]">
          <TabsTrigger
            onClick={() => handleChangeTimer(15)}
            className="rounded-none text-xs"
            value="15"
          >
            15
          </TabsTrigger>
          <TabsTrigger
            onClick={() => handleChangeTimer(30)}
            className="rounded-none text-xs"
            value="30"
          >
            30
          </TabsTrigger>
          <TabsTrigger
            onClick={() => handleChangeTimer(45)}
            className="rounded-none text-xs"
            value="45"
          >
            45
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default TimeTap;
