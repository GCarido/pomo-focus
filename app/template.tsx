"use client"
import React from 'react'
import { motion } from 'framer-motion'

const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
};

interface TemplateProps {
    children: React.ReactNode;
}

const Template = ({ children }: TemplateProps) => {
    return (
        <div className="h-[900px]">
            <motion.main
                variants={variants}
                initial="hidden"
                animate="enter"
                transition={{ type: "linear", delay: 0.2, duration: 0.5 }}>
                {children}
            </motion.main>
        </div>
    )
}

export default Template