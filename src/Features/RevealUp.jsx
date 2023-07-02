import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const RevealUp = ({ children, width="fit-content" }) => {
  const revealRef = useRef(null);
  const isInView = useInView(revealRef, { once: true});

  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
        mainControls.start("hidden");
    }
  }, [isInView]);
  return (
    <React.Fragment>
      <div ref={revealRef} style={{ position: "relative", width, overflow: "visible" }}>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.9, delay: 0.25 }}
        >
          {children}
        </motion.div>
      </div>
    </React.Fragment>
  );
};
export default RevealUp;
