"use client"

import React from 'react'
import FormTasks from './FormTasks'

const Tasks = () => {
  return (
    <section className="pt-8 w-[300px] md:w-[500px]">
      <div className="container mx-auto">
        {/* task header */}
        <div className="border-b-4 border-accent-foreground flex justify-center">
          <h3 className="h3">Tasks</h3>
        </div>
        {/* form task component */}
        <div>
          <FormTasks />
        </div>
      </div>
    </section>
  )
}

export default Tasks