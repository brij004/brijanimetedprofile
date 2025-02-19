import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const Speech = () => {
  return (
    <motion.div
      className="bubbleContainer"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            "Hi There I`M BRIJ RATANPARA",
            1000,
            "Reactjs Devloper And MERN Stack  Devloper",
            1000,
            "I am currently employed as a Reactjs developer at Creative infoway .",
            1000,
          ]}
          wrapper="span"
          speed={20}
          deletionSpeed={30}
          // omitDeletionAnimation
          repeat={Infinity}
        />
      </div>
      <img src="/brij2.jpg" alt="" />
    </motion.div>
  );
};

export default Speech;
