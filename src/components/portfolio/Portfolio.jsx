import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";

const items = [
  {
    id: 1,
    img: "/p1.jpg",
    title: "News Monkey-React.js",
    desc: "Detail:-Get daily News  Crafted a single‐page application with React.js to facilitate the sharing of development  Implemented static site generation for a load times and increased efficiency",
    link: "/",
  },
  {
    id: 2,
    img: "/p2.avif",
    title: "Movie For You-React.js",
    desc: "Detail:-Get all movie details Developed a movie similar to many movie site facilitating resources haring and Engaging in lively conversations with friends employing React.js technologie",
    link: "/",
  },
  {
    id: 3,
    img: "/p3.jpg",
    title: "iworkonlinejob-React.js",
    desc: "Detail:-iworkonlinejob.info Freecash.com is an online platform that rewards users for completing simple tasks, such as surveys and oflers. As part of this project, I was responsible for [describe your specific contributions].Participated in an online rewards platform to complete various tasks, surveys, and offers, gaining a deep understanding of online marketing, user engagement, and data analysis Managed personal performance metrics, optimizing completion strategies to maximize earnings while adhering to platform guidelines and quality standards Developed proficiency in using various tools, trackers, and analytics platforms to monitor progress, identify opportunities, and improve task completion efficiency Enhanced digital literacy by exploring diverse online business models, earning strategies, and customer engagement techniques.",
    link: "/",
  },
  {
    id: 4,
    img: "/p4.jpeg",
    title: "Luck Charm Sweep-React.js",
    desc: "Detail:-Developed an interactive card game using React, allowing users to play the traditional Seep game online with a modern user interface. Developed and maintained core features for an online betting platform, enabling users to bet on sports, casino games, and live events.. •Integrated secure payment gateways (e.g., Bitcoin, PayPal) to facilitate deposits and withdrawals.•Enhanced platform security by integrating measures for fraud detection and user data encryption. •Worked on [specific features or technologies you contributed to, like live streaming, odds calculation algorithms, etc.]. •Worked on [specific features or technologies you contributed to, like live streaming, odds calculation algorithms, etc.].  •[Other details about your role, like collaboration with",
    link: "/",
  },
  {
    id: 5,
    img: "/p5.jpg",
    title: "StormGain-React.js",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "/",
  },
];

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a variants={textVariants} href={item.link}>
        </motion.a>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  // useEffect(() => {
  //   if (ref.current) {
  //     const rect = ref.current.getBoundingClientRect();
  //     setContainerDistance(rect.left);
  //   }
  // }, []);

  // FIX: Re-calculate when screen size changes
  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );

  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="pList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
            // backgroundColor: "pink",
          }}
        />
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />
      <div className="pProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;
