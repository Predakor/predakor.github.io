import { NavigationElement } from "../Nav";
import styles from "./DesktopNav.module.scss";
import { motion } from "framer-motion";

interface Props {
  items: NavigationElement[];
}

function DesktopMenu({ items }: Props) {
  return (
    <header className={styles.container}>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className={styles.links}
      >
        {items.map(({ name, path }) => (
          <a
            className={`${styles.link} ${false ? styles.active : ""}`}
            href={path}
            key={name}
          >
            {name}
          </a>
        ))}
      </motion.nav>
    </header>
  );
}

export default DesktopMenu;
