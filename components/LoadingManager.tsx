"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import LoadingAnimation from "@/components/LoadingAnimation";

const LoadingManager = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => setIsLoading(false), 5000); // 4 secondes
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {isLoading && <LoadingAnimation />}
      {!isLoading && children}
    </>
  );
};

export default LoadingManager;
