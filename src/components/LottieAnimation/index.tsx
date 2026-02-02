import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

interface LottieAnimationProps {
  animationData: object;
  height?: number | string;
  width?: number | string;
  loop?: boolean;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationData,
  height = 400,
  width = 400,
  loop = true,
}) => {
  const animationContainer = useRef<HTMLDivElement>(null);
  const animationInstance = useRef<any>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (animationContainer.current) {
        animationInstance.current = lottie.loadAnimation({
          container: animationContainer.current,
          renderer: "svg",
          loop,
          autoplay: true,
          animationData,
        });
      }
    }, 2500);

    return () => {
      clearTimeout(timer);
      if (animationInstance.current) {
        animationInstance.current.destroy();
      }
    };
  }, [animationData, loop, height, width]);

  return <div ref={animationContainer} style={{ height, width }} />;
};

export default LottieAnimation;
