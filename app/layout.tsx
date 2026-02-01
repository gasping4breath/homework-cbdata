"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getPlanets } from "@/app/lib/data";
import PlanetsProvider from "./planets-context-provider";
import { useMemo, useState } from "react";
import { Planet } from "./lib/definitions";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [planetPromise, setPlanetPromise] = useState<Promise<Planet[]>>(getPlanets());
  // const planetPromise = getPlanets();
  const refreshPlanets = useMemo(() => () => setPlanetPromise(getPlanets()), []);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PlanetsProvider planetsPromise={planetPromise} refreshPlanets={refreshPlanets}>{children}</PlanetsProvider>
      </body>
    </html>
  );
}
