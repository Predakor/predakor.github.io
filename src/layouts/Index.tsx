import { FC, ReactNode } from "react";
import Nav from "./Nav/Nav";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

const Index: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <>
      <Nav />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
export default Index;
