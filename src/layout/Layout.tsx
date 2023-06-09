import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import Nav from "./Nav/Nav";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      <Nav />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
export default Layout;
