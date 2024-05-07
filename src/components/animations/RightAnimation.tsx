import { inView, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
interface RightAnimationProps {
  children: React.ReactNode | React.ReactNode[] | JSX.Element;
  duration?: number;
  delay?: number;
}
function RightAnimation({ children, duration, delay }: RightAnimationProps) {
  const divRef = useRef(null);
  const isInView = useInView(divRef, { once: true });
  const rightAnimation = useAnimation();
  useEffect(() => {
    if (isInView) {
      rightAnimation.start("visible");
    }
  }, [inView]);
  return (
    <div ref={divRef}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 75 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: duration, delay: delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default RightAnimation;
