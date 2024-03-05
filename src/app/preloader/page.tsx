"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import SplitType from "split-type";

export default function Preloader() {
  useGSAP(() => {
    const preloader = document.getElementById("intro-container");
    new SplitType("#title");
    const tl = gsap.timeline();

    tl.to("#john, #nepal", {
      y: -20,
      duration: 1,
      opacity: 1,
      delay: 0.5,
      ease: "power2.inOut"
    });

    tl.to(".char", {
      y: 0,
      duration: .2,
      stagger: 0.05,
      ease: "power2.inOut"
    });

    tl.to("#nepal", {
      scale: 100,
      duration: 1,
      delay: 1.5,
      ease: "power4.in"
    }, "nepal");

    tl.to("#john", {
      opacity: 0,
      delay: .5
    }, "nepal");

    tl.to("#nepal", {
      opacity: 0,
    });

    tl.to("#intro-container", {
      opacity: 0,
      duration: 1,
      onComplete: () => {
        if (preloader === null) { return }
        preloader.style.display = "none"
      }
    });
  })

  return (
    <section className="fixed top-0 left-0 w-full h-screen font-mono bg-white pointer-events-none z-50" id="intro-container">
      <div className="m-10 opacity-0 text-black text-3xl" id="john">
        <p>John Hang Rai</p>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0" id="nepal">
        <Image src="/nepal.svg" alt="img" width={1000} height={1000} priority />
        <p className="text-center md:text-7xl text-5xl uppercase clip-title text-black" id="title">Hello World</p>
      </div>
    </section>
  )
}