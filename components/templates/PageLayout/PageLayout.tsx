"use client";
import { useEffect, useRef, useState } from "react";
import { Navbar } from "@/components/organisms";

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX - 4}px`;
        cursorRef.current.style.top = `${e.clientY - 4}px`;
      }
    };

    let raf: number;
    const animateRing = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x - 18) * 0.12;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y - 18) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }
      raf = requestAnimationFrame(animateRing);
    };
    raf = requestAnimationFrame(animateRing);

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Custom cursor (desktop only) */}
      {mounted && (
        <>
          <div
            ref={cursorRef}
            className="fixed w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
            style={{ transition: "transform 0.1s" }}
          />
          <div
            ref={ringRef}
            className="fixed w-9 h-9 border border-accent/40 rounded-full pointer-events-none z-[9998] hidden md:block"
            style={{ transition: "width 0.15s, height 0.15s, border-color 0.15s" }}
          />
        </>
      )}

      {/* Noise texture overlay */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <Navbar />
      <main className="relative z-10">{children}</main>
    </>
  );
}
