import type { NextPage } from "next";

import { LoginContainer } from "components/Login";
import { withSSRGuest } from "utils/withSSRGuest";

const Login: NextPage = () => {
  return <LoginContainer />;
};

export default Login;

export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});
