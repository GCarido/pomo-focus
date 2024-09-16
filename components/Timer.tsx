import React, { useState, useEffect } from 'react'
import useSound from "use-sound"

import { Button } from './ui/button';


interface TimerProps {
    tabName?: string;
};

const Timer = ({ tabName = "" }: TimerProps) => {
    const [isActive, setIsActive] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    const [playSuccess] = useSound("../sounds/success.mp3"); 

    const defaultSeconds = {
        'short break': 300,
        'long break': 900
    }[tabName] || 1500;

    const [seconds, setSeconds] = useState(defaultSeconds);

    useEffect(() => {
        let interval: NodeJS.Timeout | undefined;

        if (isActive) {
            setIsComplete(false);
            interval = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds - 1);
            }, 1000);
        }
        if (seconds === 0) {
            setIsActive(false);
            setSeconds(defaultSeconds);
            setIsComplete(true);
            playSuccess();
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    const reset = () => {
        setSeconds(defaultSeconds);
        setIsActive(false);
    };

    return (
        <div className="p-6 flex flex-col items-center h-[200px]">
            {/* time display */}
            <p className="h1">{('0' + Math.floor(seconds / 60)).slice(-2)}:{('0' + (seconds % 60)).slice(-2)}</p>
            {/* button and task info display */}
            <div className="pt-2 flex flex-col items-center gap-y-4">
                {/* info */}
                <p className="text-foreground capitalize dark:text-green-300 font-bold">{`${isComplete ? `${tabName} completed!` : ""}`}</p>
                {/* button container */}
                <div className="flex gap-x-4">
                    <Button
                        className="w-[100px]"
                        variant="outline"
                        onClick={() => setIsActive(!isActive)}>
                        {isActive ? "Pause" : "Start"}
                    </Button>
                    <Button
                        className="w-[100px]"
                        variant="outline"
                        onClick={reset}>
                        Reset
                    </Button>
                </div>
            </div>


        </div>
    )
}

export default Timer