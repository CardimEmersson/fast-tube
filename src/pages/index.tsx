import { BannerMain } from "components/BannerMain";
import { Carousel } from "components/Carousel";
import { Menu } from "components/Menu";
import type { NextPage } from "next";
import baseData from "../data/db.json";
import dadosIniciais from "../data/dados_iniciais.json";
import { Footer } from "components/Footer";
import { withSSRAuth } from "utils/withSSRAuth";

const Home: NextPage = () => {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={baseData.videos[1].titulo}
        url={baseData.videos[1].url}
        videoDescription={
          "Sintonize a One World Radio, a estação de rádio digital do Tomorrowland. Transmitindo o som do Tomorrowland, 24 horas por dia, 7 dias por semana e sempre na mixagem."
        }
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.usuario.categorias[0]}
      />

      <Carousel category={dadosIniciais.usuario.categorias[1]} />

      <Carousel category={dadosIniciais.usuario.categorias[2]} />

      <Carousel category={dadosIniciais.usuario.categorias[3]} />

      <Carousel category={dadosIniciais.usuario.categorias[4]} />

      <Carousel category={dadosIniciais.usuario.categorias[5]} />

      <Footer />
    </div>
  );
};

export default Home;

export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
