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

function LoginContainer() {
  const { signIn, user } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);

  const handleOnClick = async (provider: AuthProvider) => {
    setIsLoading(true);
    try {
      const response = await socialMediaAuth(provider);
      const token = await response.getIdToken();

      signIn({
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
            <BsGoogle size="3rem" />
            <TextButton>Conectar com o Google</TextButton>
          </GoogleButton>
          <FacebookButton onClick={() => handleOnClick(facebookProvider)}>
            <BsFacebook size="3rem" />
            <TextButton>Conectar com o Facebook</TextButton>
          </FacebookButton>
          <GithubButton onClick={() => handleOnClick(githubProvider)}>
            <BsGithub size="3rem" />
            <TextButton>Conectar com o Github</TextButton>
          </GithubButton>
        </LoginForm>
      </LoginWrapper>
      {isLoading && <SpinnerLoader />}
    </>
  );
}

export { LoginContainer };
