import { FC, ReactNode } from "react";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

const Index: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
export default Index;
