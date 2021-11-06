import { Footer } from "../Footer";
import { Menu } from "../Menu";
import { ReactNode } from "react";
import { Main } from "./styles";

interface PageDefaultProps {
  children: ReactNode;
}

function PageDefault({ children }: PageDefaultProps) {
  return (
    <>
      <Menu />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

export { PageDefault };
