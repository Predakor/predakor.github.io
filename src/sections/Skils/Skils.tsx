import { motion, useScroll } from "framer-motion";
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
];

function Skils() {
  const { scrollY } = useScroll();
  return (
    <section id="skils" className={styles.container}>
      <h2 className={styles.sectionHeader}>Skills</h2>

      {/* <h3 className={styles.subHeader}>Technologies</h3> */}
      <motion.ul className={styles.skilsList}>
        {technologies.map(({ icon, name }, i) => (
          <motion.li
            whileInView={{
              x: [500 * (i >= 5 ? 1 : -1), 0],
            }}
            transition={{ duration: 1 }}
            className={styles.iconContainer}
            key={name}
          >
            <img src={icon} alt={name} />
            <span>{name}</span>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

export default Skils;
