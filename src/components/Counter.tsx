import TimeTap from "./TimeTap";

interface CounterProps {
  timer: number;
  handleChangeTimer: (value: number) => void;
}

const Counter = ({ handleChangeTimer, timer }: CounterProps) => {
  return (
    <div
      id="timer"
      className="container flex justify-center items-center my-5 flex-col"
    >
      <p>TIMER</p>
      <h5 className="text-3xl font-bold text-gray-600">{timer}</h5>
      <TimeTap handleChangeTimer={handleChangeTimer} />
    </div>
  );
};

export default Counter;
