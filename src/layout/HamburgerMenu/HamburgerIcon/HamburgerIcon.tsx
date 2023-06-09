import styles from "./HamburgerIcon.module.css";

type HamburgerIconProps = {
  navExpanded: Boolean;
  navIsClosing: Boolean;
  onOpen: Function;
  onClose: Function;
};

function HamburgerIcon({
  navExpanded,
  navIsClosing,
  onOpen,
  onClose,
}: HamburgerIconProps) {
  const closed = navExpanded && !navIsClosing ? styles.closed : "";
  const onClick = navExpanded ? onClose : onOpen;
  return (
    <button
      type="button"
      className={styles.hamburgerIconContainer}
      onClick={() => onClick()}
    >
      <div className={`${styles.hamburgerIcon} ${closed}`}>
        <div className={styles.bar} />
      </div>
    </button>
  );
}

export default HamburgerIcon;
