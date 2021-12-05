import { BannerMain } from "components/BannerMain";
import { Carousel } from "components/Carousel";
import { Menu } from "components/Menu";
import type { NextPage } from "next";
import baseData from "../data/db.json";
import dadosIniciais from "../data/dados_iniciais.json";
import { Footer } from "components/Footer";
import { withSSRAuth } from "utils/withSSRAuth";
import axios from "axios";
import { CategoryDTO } from "data/@types/categoryDto";
import { UserDTO } from "data/@types/userDto";

interface HomeProps {
  data: {
    categories: CategoryDTO[];
  };
}

const Home: NextPage<HomeProps> = ({ data }) => {
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

      {data.categories &&
        data.categories.map((category) => {
          return (
            category.videos.length > 0 && (
              <Carousel key={category._id} category={category} />
            )
          );
        })}

      <Footer />
    </div>
  );
};

export default Home;

export const getServerSideProps = withSSRAuth(async (ctx) => {
  try {
    const data = await axios
      .get<CategoryDTO[]>("http://localhost:3000/api/list/categories")
      .then((res) => res.data);

    return {
      props: {
        data: data,
      },
    };
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      data: [],
    },
  };
});
