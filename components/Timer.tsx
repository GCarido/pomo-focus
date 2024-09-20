import React, { useState, useEffect } from "react";
import useSound from "use-sound";

import { Button } from "./ui/button";

interface TimerProps {
  tabName?: string;
}

const Timer = ({ tabName = "" }: TimerProps) => {
  const [isActive, setIsActive] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [playSuccess] = useSound("../sounds/success.mp3");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [seconds, setSeconds] = useState(0);

  const defaultSeconds = 
    {
      "short break": 300,
      "long break": 900,
    }[tabName] || 1500;

  useEffect(() => {
    setSeconds(defaultSeconds);
  }, [tabName]);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (isActive && startTime !== null) {
      interval = setInterval(() => {
        const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        const remainingTime = defaultSeconds - elapsedTime;
        
        if (remainingTime <= 0) {
          setIsActive(false);
          setIsComplete(true);
          setSeconds(defaultSeconds);
          playSuccess();
        } else {
          setSeconds(remainingTime);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, startTime]);

  const startTimer = () => {
    setStartTime(Date.now() - (defaultSeconds - seconds) * 1000);
    setIsActive(true);
    setIsComplete(false);
  };

  const reset = () => {
    setSeconds(defaultSeconds);
    setIsActive(false);
    setStartTime(null);
  };

  return (
    <div className="p-6 flex flex-col items-center h-[200px]">
      <p className="h1">
        {("0" + Math.floor(seconds / 60)).slice(-2)}:
        {("0" + (seconds % 60)).slice(-2)}
      </p>
      <div className="pt-2 flex flex-col items-center gap-y-4">
        <p className="text-foreground capitalize dark:text-green-300 font-bold">
          {isComplete ? `${tabName} completed!` : ""}
        </p>
        <div className="flex gap-x-4">
          <Button
            className="w-[100px]"
            variant="outline"
            onClick={() => (isActive ? setIsActive(false) : startTimer())}
          >
            {isActive ? "Pause" : "Start"}
          </Button>
          <Button className="w-[100px]" variant="outline" onClick={reset}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
