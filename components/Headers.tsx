"use client";

import React, { useState, useEffect } from "react";

import ThemeToggler from "./ThemeToggler";
import Logo from "./Logo";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

const Headers = () => {
  const [header, setheader] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const scrollYpas:EventListener = (event: Event) => window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setheader(true) : setheader(false);
    });

    window.addEventListener("scroll", scrollYpas);

    return () => window.removeEventListener("scroll", scrollYpas);
  });

  return (
    <header
      className={`${
        header ? "py-4 bg-white shadow-lg dark:bg-accent" : "py-6 dark:bg-transparent"
      } sticky top-0 z-30 transition-all `}
    >
      <div className="container mx-auto">
        <div className="flex justify-between">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Navbar
              containerStyles={`hidden xl:flex gap-x-8 items-center`}
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute top-full left-0 h-[2px] w-full bg-primary"
            />
            <div className="xl:hidden">
              <MobileNav />
            </div>
            <ThemeToggler />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Headers;
