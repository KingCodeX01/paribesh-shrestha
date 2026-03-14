"use client";
import { useEffect } from "react";
import { LoadingScreen } from "./LoadingScreen";
import { useLoading } from "@/contexts/LoadingContext";

export function LoadingScreenWrapper({ children }: { children: React.ReactNode }) {
  const { isLoading, setLoadingComplete } = useLoading();

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = sessionStorage.getItem("hasVisited");
    
    if (!hasVisited) {
      // First visit - show loading screen
      sessionStorage.setItem("hasVisited", "true");
      // The LoadingScreen component will handle the timer and call setLoadingComplete
    } else {
      // Returning visitor - skip loading screen
      setLoadingComplete();
    }
  }, [setLoadingComplete]);

  return (
    <>
      <LoadingScreen onComplete={setLoadingComplete} />
      <div style={{ display: isLoading ? "none" : "block" }}>
        {children}
      </div>
    </>
  );
}
