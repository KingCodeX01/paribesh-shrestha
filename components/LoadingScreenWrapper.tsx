"use client";
import { useEffect } from "react";
import { LoadingScreen } from "./LoadingScreen";
import { useLoading } from "@/contexts/LoadingContext";

export function LoadingScreenWrapper({ children }: { children: React.ReactNode }) {
  const { isLoading, setLoadingComplete } = useLoading();

  useEffect(() => {

    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      sessionStorage.setItem("hasVisited", "true");
    } else {
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
