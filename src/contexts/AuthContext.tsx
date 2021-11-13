import { createContext, ReactNode, useEffect, useState } from "react";
import Router from "next/router";
import { setCookie, parseCookies, destroyCookie } from "nookies";

interface User {
  email: string;
  name: string;
  photo: string;
}

interface SignInCredentials {
  token: string;
  email: string;
  name: string;
  photo: string;
}

interface AuthContextData {
  signIn(credentials: SignInCredentials): Promise<void>;
  user: User | undefined;
}

export const AuthContext = createContext({} as AuthContextData);

export function signOut() {
  destroyCookie(undefined, "fasttube.email");
  destroyCookie(undefined, "fasttube.name");
  destroyCookie(undefined, "fasttube.photo");
  destroyCookie(undefined, "fasttube.token");

  Router.push("/login");
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();

  async function signIn({ email, name, photo, token }: SignInCredentials) {
    try {
      setCookie(undefined, "fasttube.token", token, {
        maxAge: 60 * 60 * 24 * 30, //30 days
        path: "/",
      });

      setCookie(undefined, "fasttube.email", email, {
        maxAge: 60 * 60 * 24 * 30, //30 days
        path: "/",
      });

      setCookie(undefined, "fasttube.name", name, {
        maxAge: 60 * 60 * 24 * 30, //30 days
        path: "/",
      });

      setCookie(undefined, "fasttube.photo", photo, {
        maxAge: 60 * 60 * 24 * 30, //30 days
        path: "/",
      });

      setUser({
        email,
        name,
        photo,
      });
      //cookies

      Router.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const { "fasttube.token": token } = parseCookies();
    const { "fasttube.email": email } = parseCookies();
    const { "fasttube.name": name } = parseCookies();
    const { "fasttube.photo": photo } = parseCookies();

    if (!token) {
      signOut();
    } else {
      setUser({
        email,
        name,
        photo,
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, user }}>
      {children}
    </AuthContext.Provider>
  );
}
