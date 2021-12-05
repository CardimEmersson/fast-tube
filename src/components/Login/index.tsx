import {
  LoginWrapper,
  LoginForm,
  Logo,
  GoogleButton,
  FacebookButton,
  GithubButton,
  TextButton,
} from "./styles";
import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
import {
  facebookProvider,
  githubProvider,
  googleProvider,
  socialMediaAuth,
} from "service/useAuth";
import { AuthProvider } from "@firebase/auth";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { AuthContext } from "contexts/AuthContext";
import { SpinnerLoader } from "components/SpinnerLoader";
import axios, { AxiosError, AxiosResponse } from "axios";
import { UserDTO } from "data/@types/userDto";

function LoginContainer() {
  const { signIn, user } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);

  const handleOnClick = async (provider: AuthProvider) => {
    setIsLoading(true);
    try {
      const response = await socialMediaAuth(provider);
      const token = await response.getIdToken();
      const id = response.uid;

      const user = await axios
        .get<UserDTO>(`/api/list/user?id=${id}`)
        .then((res) => res.data)
        .catch((err: AxiosError) =>
          toast.error("Não foi possivél encontrar o usuário")
        );

      if (!user) {
        await axios
          .post("/api/create/user", {
            id,
            name: response.displayName,
            email: response.email,
            photo: response.photoURL,
          })
          .catch((err: AxiosError) =>
            toast.error("Houve um problema ao cadastrar o usuário")
          );
      }

      signIn({
        id,
        token,
        email: response.email || "",
        name: response.displayName || "",
        photo: response.photoURL || "",
      });
    } catch (err) {
      toast.error("Não foi possível realizar o login!");
    }
    setIsLoading(false);
  };

  return (
    <>
      <LoginWrapper>
        <LoginForm>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Logo src="/assets/logo.png" alt="" />

          <GoogleButton onClick={() => handleOnClick(googleProvider)}>
            <BsGoogle size="2rem" />
            <TextButton>Conectar com o Google</TextButton>
          </GoogleButton>
          <FacebookButton onClick={() => handleOnClick(facebookProvider)}>
            <BsFacebook size="2rem" />
            <TextButton>Conectar com o Facebook</TextButton>
          </FacebookButton>
          {/* <GithubButton onClick={() => handleOnClick(githubProvider)}>
            <BsGithub size="2rem" />
            <TextButton>Conectar com o Github</TextButton>
          </GithubButton> */}
        </LoginForm>
      </LoginWrapper>
      {isLoading && <SpinnerLoader />}
    </>
  );
}

export { LoginContainer };
