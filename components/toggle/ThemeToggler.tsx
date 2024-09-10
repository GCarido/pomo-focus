"use client"

import { Button } from "../ui/button"
import { SunIcon, MoonIcon } from "@radix-ui/react-icons"
import { useTheme } from 'next-themes'

const ThemeToggler = () => {
    const { theme, setTheme } = useTheme();
    const isDarkMode = theme === "dark";

    const toggleTheme = () => {
        setTheme(isDarkMode ? "light" : "dark");
    };

    return (
        <div>
            {/* slider */}
            <div className="shadow-lg outline-double outline-2 outline-primary w-[80px] rounded-md dark:outline-primary">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={toggleTheme}
                    className="dark:translate-x-11 transition-all"
                >
                    <SunIcon className="h-5 w-5 rotate-0 dark:scale-0 dark:rotate-90 scale-100 transition-all" />
                    <MoonIcon className="h-5 w-5 absolute scale-0 rotate-90 dark:scale-100 dark:rotate-0 transition-all" />
                </Button>
            </div>
        </div>
    )
}

export default ThemeToggler