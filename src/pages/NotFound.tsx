import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { LightRays } from "@/components/effects";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden">
      {/* Subtle background rays */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-20">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={0.5}
          lightSpread={0.8}
          rayLength={1.0}
        />
      </div>

      <div className="text-center relative z-10 glass-dark p-12 rounded-3xl border border-white/10">
        <h1 className="mb-4 text-7xl font-bold gold-shimmer-text">404</h1>
        <p className="mb-8 text-xl text-white/70">Oops! This page exists in a different dimension.</p>
        <a
          href="/"
          className="inline-block px-8 py-3 bg-white text-background font-bold rounded-full hover:scale-105 transition-transform"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
