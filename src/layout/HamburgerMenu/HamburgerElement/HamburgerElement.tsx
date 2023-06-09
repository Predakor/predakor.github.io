import { ReactNode } from "react";
import { Link } from "react-router-dom";

type HamburgerElementProps = {
  destination: String;
  onClick: Function;
  children?: ReactNode;
};
function HamburgerElement({
  destination,
  onClick,
  children,
}: HamburgerElementProps) {
  return (
    <Link to={`${destination}`} onClick={() => onClick()}>
      {children}
    </Link>
  );
}
export default HamburgerElement;
