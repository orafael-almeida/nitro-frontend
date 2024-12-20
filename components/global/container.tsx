"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  reverse?: boolean;
}

const Container = ({ children, className, delay = 0.2, reverse }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: reverse ? -20 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay, duration: 0.4, ease: "easeInOut" }}
      className={cn("h-full w-full", className)}
    >
      {children}
    </motion.div>
  );
};

export default Container;
