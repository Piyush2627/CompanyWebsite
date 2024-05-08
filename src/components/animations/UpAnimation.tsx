import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
interface UpAnimationProps {
  children: JSX.Element;
  className: string;
}
function UpAnimation({ children, className }: UpAnimationProps) {
  const divref = useRef(null);
  const isInView = useInView(divref);
  const mainControl = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
    } else {
      mainControl.start("hidden");
    }
  }, [isInView]);
  return (
    <div ref={divref} className={className}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControl}
        transition={{ duration: 0.9 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default UpAnimation;
