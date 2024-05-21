import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface LineAnimationProps {
  className?: string;
  delay: number;
  height: number;
  tailwindBackgroundColor: string;
}

function LineAnimation({
  className,
  delay,
  height,
  tailwindBackgroundColor,
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
        className={` w-[1px] bg-gradient-to-b from-violet-500 via-blue-400 to-blue-400`}
        style={{ height: `${height}px` }}
      >
        .
      </div>
      <div ref={divref} className={`${className} rotate-180`}>
        <motion.div
          className={`absolute top-0 w-[1px] ${tailwindBackgroundColor}`}
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
        >
          .
        </motion.div>
      </div>
    </div>
  );
}

export default LineAnimation;
