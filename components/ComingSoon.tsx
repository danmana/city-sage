"use client";

import Image from "next/image";
import Tilt from "react-parallax-tilt";

export function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Coming Soon</h1>
      <Tilt
        className="background-stripes parallax-effect-glare-scale mt-12"
        perspective={1000}
        glareEnable={true}
        glareMaxOpacity={0.65}
        glareBorderRadius="12px"
        gyroscope={true}
        scale={1.02}
      >
        <Image
          src="/city-sage.png"
          width={1836}
          height={1256}
          alt="self guided walking tours made for you by ai"
          className="w-full max-w-5xl rounded-xl border border-white overflow-hidden max-h-[calc(90vh-160px)] max-w-[90vw]"
        />
      </Tilt>
    </div>
  );
}
