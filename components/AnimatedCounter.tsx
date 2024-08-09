"use client";
import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp
        decimal=","
        prefix="R$"
        // duration={2.75}
        decimals={2}
        end={amount}
      />
      {/* 46:31 */}
    </div>
  );
};

export default AnimatedCounter;
