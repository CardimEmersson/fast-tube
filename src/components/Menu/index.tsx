import { AuthContext, signOut } from "contexts/AuthContext";
import Link from "next/link";
import { useContext } from "react";
import { ButtonLink } from "./ButtonLink";

import {
  Logo,
  Container,
  UserWrapper,
  UserPhoto,
  UserName,
  RightWrapper,
  Logout,
} from "./styles";

function Menu() {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <Link href="/" passHref>
        <Logo src={"/assets/logo.png"} alt="FastTube logo" />
      </Link>

      <RightWrapper>
        <ButtonLink href={"/cadastro/video"}>Novo vídeo</ButtonLink>
        <ButtonLink href="/cadastro/categoria">Nova categoria</ButtonLink>

        <UserWrapper>
          <UserName>{user?.name}</UserName>
          <Logout onClick={signOut}>Sair</Logout>
        </UserWrapper>

        <UserPhoto src={user?.photo} />
      </RightWrapper>
    </Container>
  );
}

export { Menu };
