import Link from "next/link";
import { FooterBase } from "./styles";

function Footer() {
  return (
    <FooterBase>
      {/* eslint-disable-next-line @next/next/link-passhref */}
      <Link href="/">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/logo.png" alt="Logo" />
      </Link>
    </FooterBase>
  );
}

export { Footer };
