"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import { itemsNavbar } from "@/data";
import { MotionTransition } from "./transition-component";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const router = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <MotionTransition
      position="right"
      className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10"
    >
      <nav className={`${windowWidth < 500 ? "w-full fixed bottom-0" : ""}`}>
        <div
          className={`flex items-center justify-center gap-2 px-4 py-1 rounded-full ${
            windowWidth < 500
              ? "bg-secondary rounded-none w-full"
              : "bg-white/15 backdrop-blur-sm"
          }`}
        >
          {itemsNavbar.map((item) => (
            <div
              key={item.id}
              className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary ${
                router === item.link && "bg-secondary"
              }`}
              data-tooltip-target="tooltip-default"
            >
              <Link href={item.link}>{item.icon}</Link>
            </div>
          ))}
        </div>
      </nav>
    </MotionTransition>
  );
};

export default Navbar;
