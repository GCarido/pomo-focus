import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <main className="px-[10%] xl:px-[20%]">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-3">
          <h2 className="h2 mb-4">What is Pomodoro?</h2>
          <p className="subtitle text-justify">
            Pomodoro is a super simple technique that helps you stay focused and
            get more done in less time. It’s all about working in short bursts,
            typically <span className="highlight-default">25 minutes</span>,
            followed by a short break. The idea is to make your work time more
            productive and less tiring.
          </p>
          <p className="subtitle text-justify">
            On this website, I’ve included a basic Pomodoro timer to help you
            try out this method for yourself. Whether you’re studying, working,
            or just trying to stay on top of your to-do list, using the Pomodoro
            technique can give you that extra push to stay focused and boost
            your productivity. Give it a try!
          </p>
          <h2 className="h2 mb-4">Here Is How The Pomodoro Technique Work</h2>
          <p className="subtitle text-justify">
            Here are just four simple steps to help you boost your productivity
            using the Pomodoro technique. By following these steps, you can make
            your work sessions more focused and effective while ensuring you
            take the necessary breaks to recharge.
          </p>
          <ol className="list-decimal list-outside pl-5 subtitle marker:text-foreground marker:font-bold flex flex-col gap-y-6 li-styling text-justify">
            {/* first item */}
            <li>
              Start by choosing a specific task you need to work on. It could be
              something on your to-do list, a work project, or even a personal
              task you’ve been meaning to get done. The key is to focus on one
              thing at a time, so pick a task that’s clear and manageable for
              the next <span className="highlight-default">25 minutes</span>.
            </li>
            <Image
              src="/images/1-pomo-focus.png"
              width={500}
              height={500}
              priority
              alt="first-pomo-list"
              className="self-center"
            />
            {/* second item */}
            <li>
              Set a timer for{" "}
              <span className="highlight-default">25 minutes</span>. You can use
              your phone, a digital timer, or the simple Pomodoro timer
              available here on the website. Once the timer is set, dive into
              the task and commit to working without interruptions. This focused
              work session helps you make progress without distractions.
            </li>
            <Image
              src="/images/2-pomo-focus.png"
              width={500}
              height={500}
              priority
              alt="first-pomo-list"
              className="self-center"
            />
            <li>
              When the <span className="highlight-default">25 minutes</span> are
              up and the timer goes off, take a short{" "}
              <span className="highlight-secondary">5-minute</span> break. Step
              away from your workspace and do the following: stretch, walk
              around, or grab a quick snack. These short breaks are important
              for giving your mind a rest and recharging before the next round
              of focused work.
            </li>
            <Image
              src="/images/3-pomo-focus.png"
              width={500}
              height={500}
              priority
              alt="first-pomo-list"
              className="self-center"
            />
            <li>
              After completing 3-4 Pomodoro sessions (
              <span className="highlight-default">25 minutes</span> of work
              followed by <span className="highlight-secondary">5-minute</span>{" "}
              breaks), treat yourself to a longer break, around{" "}
              <span className="highlight-tertiary">15-30 minutes</span>. Use
              this time to relax, unwind, or do something enjoyable, giving your
              brain a chance to reset before diving back into your tasks.
            </li>
            <Image
              src="/images/4-pomo-focus.png"
              width={500}
              height={500}
              priority
              alt="first-pomo-list"
              className="self-center"
            />
          </ol>
        </div>
      </div>
    </main>
  );
};

export default About;
