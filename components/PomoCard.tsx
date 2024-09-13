"use client";

import { useEffect, useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle
} from "@/components/ui/card";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";

import { useTheme } from "next-themes";
import ThemeToggler from "./toggle/ThemeToggler";

import Timer from "./Timer";

const PomoCard = () => {

  //Check if current theme is "light"
  const { theme } = useTheme();
  const isLightMode = theme === "light";
  const [bgColor, setBgColor] = useState("190 100% 95%"); // Default color

  const handleTabChange = (value: string) => {
    let newBgColor;

    switch (value) {
      case 'short-break':
        newBgColor = "357, 100%, 92%"; // Red
        break;
      case 'long-break':
        newBgColor = "187 100% 78%"; // Blue
        break;
      default:
        newBgColor = "190 100% 95%"; //Default
    }

    if (isLightMode) {
      document.documentElement.style.setProperty('--background', newBgColor);
    }

    setBgColor(newBgColor);
  };

  useEffect(() => {
    if(!isLightMode) {
      document.documentElement.style.removeProperty("--background");
    } else {
      document.documentElement.style.setProperty("--background", bgColor);
    }

    return () => {
      document.documentElement.style.removeProperty("--background");
    }
  }, [isLightMode, bgColor]);

  return (
    <Card className="w-[500px]">
      {/* toggle theme */}
      <div className="flex justify-end p-1">
        <ThemeToggler />
      </div>
      <CardHeader className="items-center">
        <p className="h2 md:text-5xl">Get Productive!</p>
      </CardHeader>
      <CardContent className="flex justify-center">
        <Tabs defaultValue="pomodoro" onValueChange={handleTabChange}>
          <TabsList>
            <TabsTrigger value="pomodoro">Pomodoro</TabsTrigger>
            <TabsTrigger value="short-break">Short Break</TabsTrigger>
            <TabsTrigger value="long-break">Long Break</TabsTrigger>
          </TabsList>
          <TabsContent value="pomodoro">
            <Timer 
            tabName={`pomodoro`}
            />
          </TabsContent>
          <TabsContent value="short-break">
          <Timer 
            tabName={`short break`}
            />
          </TabsContent>
          <TabsContent value="long-break">
          <Timer 
            tabName={`long break`}
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

export default PomoCard;