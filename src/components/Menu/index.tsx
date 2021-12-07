import { AuthContext, signOut } from "contexts/AuthContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { ButtonLink } from "./ButtonLink";
import { parseCookies } from "nookies";
import axios, { AxiosError } from "axios";

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
import { toast } from "react-toastify";
import { SpinnerLoader } from "components/SpinnerLoader";
import { destroyCookie } from "nookies";


function Menu() {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  const [activeDropdown, setActiveDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function deleteAccount() {
    setIsLoading(true);
    const { "fasttube.id": userId } = parseCookies();

    await axios
      .delete(`/api/delete/user?userId=${userId}`)
      .then((res) => {
        toast.success(res.data.message);

        setIsLoading(false);
        signOut();
      })
      .catch((err: AxiosError) => {
        if (err.response?.data.message) {
          toast.error(err.response?.data.message);
        } else {
          toast.error("Não foi possivél excluir a conta");
        }
        setIsLoading(false);
      });
  }

  return (
    <>
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
            <Button type="button" onClick={deleteAccount}>
              Excluir Conta
            </Button>
            <Button type="button" onClick={() => signOut()}>
              Sair
            </Button>
          </DropdownWrapper>
        </UserDropdown>
      </Container>
      {isLoading && <SpinnerLoader />}
    </>
  );
}

export { Menu };
