import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { type: "spring", duration: 1.5, bounce: 0 },
      opacity: { duration: 0.01 },
    },
  },
  rounder: {},
};

function index() {
  return (
    // rome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    <motion.svg
      width="300"
      height="300"
      viewBox="0 0 300 300"
      fillOpacity={0}
      strokeWidth={"1em"}
      stroke="var(--main-color)"
    >
      <motion.polygon
        initial={draw.hidden}
        whileInView={draw.visible}
        width="140"
        height="140"
        x={300 - 70}
        y={300 - 70}
        points="300,100 100,300 300,300"
      />
      <motion.line
        initial={draw.hidden}
        whileInView={draw.visible}
        x1="0"
        y1="0"
        x2="300"
        y2="300"
      />
      <motion.line
        initial={draw.hidden}
        viewport={{ once: true }}
        x1="300"
        y1="0"
        x2="0"
        y2="300"
      />
    </motion.svg>
  );
}

export default index;
