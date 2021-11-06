import { AnchorHTMLAttributes, ReactNode } from "react";
import { ButtonLinkContainer } from "./styles";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

function ButtonLink({ href, children, ...props }: ButtonLinkProps) {
  return (
    <ButtonLinkContainer href={href} {...props}>
      {children}
    </ButtonLinkContainer>
  );
}

export { ButtonLink };
