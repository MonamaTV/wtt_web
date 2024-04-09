import React, { useEffect, useRef, useState } from "react";
import "../index.css";
import { IoRefreshSharp } from "react-icons/io5";
import { faker } from "@faker-js/faker";
import Modal from "@/components/Modal";
import Results from "@/components/Results";
import Counter from "@/components/Counter";

const Home = () => {
  const [current, setCurrent] = useState<string>("");
  const [startTyping, setStartTyping] = useState<boolean>();
  const textRef = useRef<HTMLTextAreaElement>();
  const [defaultTimer, setDefaultTimer] = useState(15);
  const [timer, setTimer] = useState<number>(15);

  const [text, setText] = useState(
    faker.word.words({
      count: 30,
    })
  );
  
  const resetGame = () => {
    setCurrent("");
    setStartTyping(false);
    setText(
      faker.word.words({
        count: 38,
      })
    );
    if (textRef.current) {
      textRef.current.focus();
    }
    // setTimer(defaultTimer);
  };

  // Counter
  useEffect(() => {
    
    if (timer == 0 || !startTyping) {
      return;
    }
    const setTimerInterval = setInterval(
      () => setTimer((prevTimer) => prevTimer - 1),
      1000
    );
    return () => clearInterval(setTimerInterval);
  }, [timer, startTyping]);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.focus();
    }
  }, []);

  // Errors commited during the game...
  let err = 0;

  const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setStartTyping(true);
    if (timer === 0) {
      e.preventDefault();
    }
    setCurrent(e.currentTarget.value);
  };

  const handleChangeTimer = (value: number) => {
    setDefaultTimer(value);
    setTimer(value);
    resetGame();
  };

  // Resets the texts, gets new words
  const handleRefreshWords = () => {
    resetGame();
    setTimer(defaultTimer);
    if (textRef.current) {
      textRef.current.focus({
        preventScroll: false
      });
    }
  };

  console.log(timer)

  return (
    <div className="text-white h-screen flex flex-col pt-10 bg-black">
      <Counter timer={timer} handleChangeTimer={handleChangeTimer} />
      <div id="test" className="container mx-auto h-[35%] w-5/6 my-5 relative">
        <textarea
          rows={5}
          value={current}
          onChange={handleInput}
          autoFocus
          spellCheck="false"
          className={` resize-none text-[1.5rem] absolute w-full  border-none outline-none ${
            startTyping
              ? "bg-transparent"
              : "bg-gradient-to-tr opacity-10 from-gray-950/100 to-gray-950 via-gray-950"
          } z-10 text-transparent`}
        ></textarea>
        <p className="text-[1.5rem] absolute text-gray-800">
          {[...current].map((character, index) => {
            err = character != text[index] ? err + 1 : err;
            return (
              <span
                key={index}
                className={`${
                  character != text[index] ? "text-red-500" : "text-white"
                }`}
              >
                {text[index]}
              </span>
            );
          })}
          <span className="blinking-cursor">|</span>
          <span>{text.slice(current.length)}</span>
        </p>
      </div>
      <div className="relative container mx-auto flex items-center justify-center">
        <button
          onClick={handleRefreshWords}
          className="text-yellow-500 bg-gray-300/10 text-sm px-4 py-1"
        >
          <IoRefreshSharp />
        </button>
      </div>
      <div onClick={resetGame}>
        {timer === 0 && (
          <Modal
            description="Keep typing and climb the Leaderboard!"
            heading="Results"
            defaultOpen={true}
          >
            <Results
              score={{
                completed: true,
                duration: defaultTimer,
                test: text,
                typed: current,
                errors: err,
              }}
            />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Home;
