"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export function SimpleLoadingScreen({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <div className="relative">
          <Image
            src="/gif/download.gif"
            alt="Loading..."
            width={200}
            height={200}
            className="object-contain"
            unoptimized
          />
          <div className="mt-4 text-center">
            <p className="text-white text-lg animate-pulse">Loading content...</p>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
