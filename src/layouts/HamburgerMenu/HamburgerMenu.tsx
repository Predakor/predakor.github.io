import { AnimationEvent, useState } from "react";
import { animation, duration } from "../../utils/animations";
import HamburgerElement from "./HamburgerElement/HamburgerElement";
import HamburgerIcon from "./HamburgerIcon/HamburgerIcon";
import styles from "./HamburgerMenu.module.css";
import navigationList from "../../assets/navigationList";

const openingAnimation = "fadeInRight";
const closingAnimation = "fadeOutRight";
function HamburgerMenu() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  let currentAnimation = "";
  let expandedClass = "";

  if (navIsOpen) {
    currentAnimation = isClosing ? closingAnimation : openingAnimation;
    expandedClass = styles.expanded;
  }

  const navAnimation = `${animation(currentAnimation)} ${duration("faster")}`;
  const navClass = `${styles.HamburgerMenuContainer} ${expandedClass}`;
  const navClasses = `${navAnimation} ${navClass}`;

  const closeMenu = () => {
    setIsClosing(true);
  };
  const openMenu = () => {
    setNavIsOpen(true);
  };

  function animationHandler(e: AnimationEvent) {
    const animationName = e.animationName;

    if (animationName === closingAnimation) {
      setNavIsOpen(false);
      setIsClosing(false);
    }
  }

  console.log(isClosing);
  return (
    <>
      <HamburgerIcon
        navExpanded={navIsOpen}
        navIsClosing={isClosing}
        onOpen={openMenu}
        onClose={closeMenu}
      />

      <nav className={navClasses} onAnimationEnd={(e) => animationHandler(e)}>
        {(navIsOpen || isClosing) &&
          navigationList.map((navElement, i) => (
            <HamburgerElement destination={navElement.path} onClick={closeMenu} key={i}>
              {navElement.name}
            </HamburgerElement>
          ))}
      </nav>
    </>
  );
}

export default HamburgerMenu;
