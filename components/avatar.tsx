"use client"

import Image from "next/image";
import { MotionTransition } from "./transition-component";

export function Avatar() {
    return (
        <MotionTransition position="bottom" className="fixed bottom-5 right-5 hidden md:inline-block">
            <Image 
                src="/nestJS.png" 
                width={300} 
                height={300} 
                className="w-400 h-400" 
                alt="Particles" 
            />
        </MotionTransition>
    );
}
