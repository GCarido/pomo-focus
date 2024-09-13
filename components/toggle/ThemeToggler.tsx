"use client"

import { SunIcon, MoonIcon } from "@radix-ui/react-icons"
import { useTheme } from 'next-themes'

import { Button } from "../ui/button"

import useSound from "use-sound"


const ThemeToggler = () => {
    const { theme, setTheme } = useTheme();
    const isDarkMode = theme === "dark";
    const [playLightSwitch] = useSound("../sounds/light-mode.mp3");
    const [playDarkSwitch] = useSound("../sounds/dark-mode.mp3");
    const toggleTheme = () => {
        if(isDarkMode) {
            playLightSwitch();
            setTheme("light");
        } else {
            playDarkSwitch();
            setTheme("dark");
        }
    };

    return (
        <div>
            {/* slider */}
            <div 
            onClick={toggleTheme}
            className="shadow-lg outline-double outline-2 outline-primary w-[80px] rounded-md dark:outline-primary">
                <Button
                    variant="outline"
                    size="icon"
                    className="dark:translate-x-11 transition-all">

                    <SunIcon className="h-5 w-5 rotate-0 dark:scale-0 dark:rotate-90 scale-100 transition-all" />
                    <MoonIcon className="h-5 w-5 absolute scale-0 rotate-90 dark:scale-100 dark:rotate-0 transition-all" />
                </Button>
            </div>
        </div>
    )
}

export default ThemeToggler