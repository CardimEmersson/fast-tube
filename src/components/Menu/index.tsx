import { AuthContext, signOut } from "contexts/AuthContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { ButtonLink } from "./ButtonLink";

import {
  Logo,
  Container,
  UserWrapper,
  UserPhoto,
  UserName,
  RightWrapper,
  Logout,
  UserDropdown,
  Button,
  DropdownWrapper,
  ButtonMyVideo,
} from "./styles";

function Menu() {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  const [activeDropdown, setActiveDropdown] = useState(false);

  return (
    <Container>
      <Link href="/" passHref>
        <Logo src={"/assets/logo.png"} alt="FastTube logo" />
      </Link>

      <RightWrapper>
        <ButtonLink href={"/cadastro/video"}>Novo vídeo</ButtonLink>
        <ButtonLink href="/cadastro/categoria">Nova categoria</ButtonLink>

        {user && (
          <>
            <UserWrapper>
              <UserName>{user?.name}</UserName>
            </UserWrapper>

            <UserPhoto
              src={user?.photo}
              onClick={() => setActiveDropdown(!activeDropdown)}
            />
          </>
        )}
      </RightWrapper>

      <UserDropdown active={activeDropdown}>
        <ButtonMyVideo onClick={() => router.push("/meus-videos")}>
          Meus Videos
        </ButtonMyVideo>
        <ButtonLink href={"/cadastro/video"}>Novo vídeo</ButtonLink>
        <ButtonLink href="/cadastro/categoria">Nova categoria</ButtonLink>
        <DropdownWrapper>
          <Button type="button">Excluir Conta</Button>
          <Button type="button" onClick={signOut}>
            Sair
          </Button>
        </DropdownWrapper>
      </UserDropdown>
    </Container>
  );
}

export { Menu };
