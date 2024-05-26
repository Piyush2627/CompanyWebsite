import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface LineAnimationProps {
  delay: number;
  height: number;
  tailwindBackgroundColor: string;
  beamcolor: string;
}

function LineAnimation({
  delay,
  height,
  tailwindBackgroundColor,
  beamcolor,
}: LineAnimationProps) {
  const divref = useRef(null);
  const isInView = useInView(divref);
  const mainControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
    } else {
      mainControl.start("hidden");
    }
  }, [isInView, mainControl]);

  return (
    <div className="relative">
      <div
        className={` w-1  ${beamcolor} `}
        style={{ height: `${height}px` }}
      ></div>
      <div ref={divref} className={` rotate-180`}>
        <motion.div
          className={`absolute top-0 w-1  ${tailwindBackgroundColor}`}
          style={{ height: `${height}px` }}
          variants={{
            hidden: { opacity: 1, height: height },
            visible: {
              opacity: 1,
              height: 0,
            },
          }}
          initial="hidden"
          animate={mainControl}
          transition={{ duration: 1, delay: delay }}
        ></motion.div>
      </div>
    </div>
  );
}

export default LineAnimation;
