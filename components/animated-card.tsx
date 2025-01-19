'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export function AnimatedCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const handleTouch = () => {
      // Change the key to re-trigger the animation
      setAnimationKey(prevKey => prevKey + 1);
    };

    // Add touch event listener
    window.addEventListener("touchstart", handleTouch);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("touchstart", handleTouch);
    };
  }, []);

  return (
    <motion.div
      key={animationKey} // Changing the key forces a remount, replaying the animation
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className={className}>
        {children}
      </Card>
    </motion.div>
  );
}
