import Link from "next/link";
import { ButtonLink } from "./ButtonLink";
import { Logo, Container } from "./styles";

function Menu() {
  return (
    <Container>
      <Link href="/" passHref>
        <Logo src={"/assets/logo.png"} alt="FastTube logo" />
      </Link>
      <div>
        <ButtonLink href={"/cadastro/video"}>Novo vídeo</ButtonLink>
        <ButtonLink href="/cadastro/categoria">Nova categoria</ButtonLink>
      </div>
    </Container>
  );
}

export { Menu };
