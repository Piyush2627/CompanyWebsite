import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
interface leftAnimationProps {
  children: React.ReactNode | React.ReactNode[] | JSX.Element;
  duration?: number;
  delay?: number;
  className?: string;
}
function leftAnimation({
  children,
  duration,
  delay,
  className,
}: leftAnimationProps) {
  const divRef = useRef(null);
  const isInView = useInView(divRef);
  const leftAnimation = useAnimation();

  useEffect(() => {
    if (isInView) {
      leftAnimation.start("visible");
    } else {
      leftAnimation.start("hidden");
    }
  }, [isInView]);
  return (
    <div ref={divRef} className={className}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -80 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={leftAnimation}
        transition={{ duration: duration, delay: delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default leftAnimation;
