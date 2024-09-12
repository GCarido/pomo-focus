"use client";

import Logo from './Logo'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className="px-[10%] xl:px-[20%] py-[20px]">
        <div className="container mx-auto border-b-2 pb-[10px] border-secondary-foreground">
            <div className="flex justify-between items-center">
                <Logo />
                <Navbar 
                containerStyle="flex gap-x-2"
                linkStyle="relative text-secondary-foreground hover:text-primary"
                underlineStyle="absolute left-0 top-full h-[2px] w-full bg-primary"
                />
            </div>
        </div>
    </header>
  )
}

export default Header