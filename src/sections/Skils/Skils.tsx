import { motion } from "framer-motion";
import styles from "./Skils.module.scss";

const technologies = [
  { name: "React", icon: "/logo/react-icon.svg" },
  { name: "Redux Toolkit", icon: "/logo/redux-icon.svg" },
  { name: "Next.js", icon: "/logo/nextjs-icon.svg" },
  { name: "Javascript", icon: "/logo/javascript-icon.svg" },
  { name: "Typescript", icon: "/logo/typescript-icon.svg" },
  { name: "Vite", icon: "/logo/vitejs-icon.svg" },
  { name: "Css", icon: "/logo/css-icon.svg" },
  { name: "Tailwind", icon: "/logo/tailwind-icon.svg" },
  { name: "DaisyUI", icon: "/logo/daisyui-icon.svg" },
  { name: "Html", icon: "/logo/html-icon.svg" },
  { name: "SCSS", icon: "/logo/scss-icon.svg" },
  { name: "Cypress", icon: "/logo/cypress-icon.svg" },
];

const tools = [
  { name: "Git/Github", icon: "/logo/github-icon.svg" },
  { name: "Pop_OS", icon: "/logo/popos-icon.svg" },
  { name: "vsCode", icon: "/logo/vscode-icon.svg" },
];

const list = {
  hide: {},
  pop: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const items = {
  hide: { opacity: 0, scale: 0 },
  pop: {
    opacity: 1,
    scale: [0, 1.5, 1],
  },
};

function Skils() {
  return (
    <section id="skils" className={styles.skilsSection}>
      <h2 className={styles.sectionHeader}>Working with</h2>

      <motion.div
        initial="hidden"
        whileInView={"pop"}
        variants={list}
        className={styles.technologies}
      >
        <h3 className={styles.subHeader}>Technologies</h3>
        <ul className={styles.list}>
          {technologies.map((technology, i) => (
            <motion.li
              variants={items}
              className={styles.iconContainer}
              key={technology.name}
            >
              <img
                src={technology.icon}
                alt={technology.name}
                role={"presentation"}
              />
              <span>{technology.name}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView={"pop"}
        variants={list}
        className={styles.tools}
      >
        <h3 className={styles.subHeader}>Tools</h3>
        <ul className={styles.list}>
          {tools.map((skil) => (
            <motion.li
              variants={items}
              className={styles.iconContainer}
              key={skil.name}
            >
              <img src={skil.icon} alt={skil.name} role={"presentation"} />
              <span>{skil.name}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

export default Skils;
