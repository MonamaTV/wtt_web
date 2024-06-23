import Tap from "./Tap";

interface CounterProps {
  handleChangeTap: (value: number) => void;
}
const AnalyticsTap = ({ handleChangeTap }: CounterProps) => {
  return (
    <div
      id="timer"
      className="container flex justify-center items-center my-5 flex-col"
    >
      <Tap handleChangeTap={handleChangeTap} />
    </div>
  );
};

export default AnalyticsTap;
