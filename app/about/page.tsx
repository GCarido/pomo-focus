import React from 'react'

const About = () => {
  return (
    <main className="px-[10%] xl:px-[20%]">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-3">
          <h2 className="h2">
              What is Pomodoro?
          </h2>
          <p className="subtitle text-justify">Pomodoro is a super simple technique that helps you stay focused and get more done in less time. It’s all about working in short bursts, typically 25 minutes, followed by a short break. The idea is to make your work time more productive and less tiring.</p>
          <p className="subtitle text-justify">On this website, we’ve included a basic Pomodoro timer to help you try out this method for yourself. Whether you’re studying, working, or just trying to stay on top of your to-do list, using the Pomodoro technique can give you that extra push to stay focused and boost your productivity. Give it a try!</p>
        </div>
      </div>
    </main>
  )
}

export default About