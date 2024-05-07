import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
interface UpAnimationProps {
  children: React.ReactNode | React.ReactNode[] | JSX.Element;
  duration?: number;
  delay?: number;
}
function UpAnimation({ children, duration, delay }: UpAnimationProps) {
  const divRef = useRef(null);
  const isInView = useInView(divRef);
  const upainmartions = useAnimation();
  useEffect(() => {
    console.log(isInView);
    if (isInView === true) {
      upainmartions.start("visible");
    }
  }, [isInView]);
  return (
    <div ref={divRef}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: duration, delay: delay }}
      >
        <div>{children}</div>
      </motion.div>
    </div>
  );
}

export default UpAnimation;
