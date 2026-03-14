"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time - you can adjust this duration
    const timer = setTimeout(() => {
      setIsLoading(false);
      onComplete();
    }, 3000); // 3 seconds loading time

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="relative">
        <Image
          src="/gif/download.gif"
          alt="Loading..."
          width={200}
          height={200}
          className="object-contain"
          unoptimized // Important for GIFs in Next.js
        />
        <div className="mt-4 text-center">
          <p className="text-white text-lg animate-pulse">Loading amazing content...</p>
        </div>
      </div>
    </div>
  );
}
