import { useState, FormEvent, useEffect } from "react";
import { PageDefault } from "components/PageDefault";
import {
  Container,
  CardMyVideo,
  ImageVideo,
  WrapperContent,
  Category,
  Url,
  TitleVideo,
  ButtonIcon,
} from "./styles";
import axios, { AxiosError } from "axios";
import { Title } from "components/Title";
import { withSSRAuth } from "utils/withSSRAuth";
import { toast } from "react-toastify";
import { FaRegTrashAlt } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";

import { SpinnerLoader } from "components/SpinnerLoader";
import { CategoryDTO } from "data/@types/categoryDto";
import { parseCookies } from "nookies";
import { getThumbnail } from "utils/youtubeVideo";

function MyVideos() {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState<CategoryDTO[]>([]);
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    await axios
      .post("/api/create/category", {
        title,
        color,
      })
      .then((res) => {
        toast.success(res.data.message);
        setTitle("");
        setColor("");
      })
      .catch((err: AxiosError) => {
        if (err.response?.data.message) {
          toast.error(err.response?.data.message);
        } else {
          toast.error("Não foi possivél cadastrar a categoria");
        }
      });

    setIsLoading(false);
  }

  // const image = `https://img.youtube.com/vi/${getYouTubeId(
  //   videoURL
  // )}/hqdefault.jpg`;

  async function fillVideos() {
    setIsLoading(true);
    try {
      const { "fasttube.id": userId } = parseCookies();

      const dbVideos = await axios
        .get<{ userVideos: CategoryDTO[] }>(`/api/list/videos?userId=${userId}`)
        .then((res) => res.data.userVideos);

      setCategories(dbVideos);
    } catch (err) {
      toast.error("Não foi possivél buscar os videos do usuário");
    }

    setIsLoading(false);
  }

  useEffect(() => {
    fillVideos();
  }, []);

  return (
    <>
      <PageDefault>
        <Container>
          <Title>Meus Videos</Title>

          {categories.map((category) => {
            return category.videos.map((video) => {
              return (
                <CardMyVideo key={video._id}>
                  <ImageVideo src={getThumbnail(video.url)} alt={video.title} />

                  <WrapperContent>
                    <Category style={{ backgroundColor: category.color }}>
                      {category.title}
                    </Category>
                    <TitleVideo>{video.title}</TitleVideo>
                    <Url href={video.url} target="_blank">
                      {video.url}
                    </Url>
                  </WrapperContent>

                  <ButtonIcon>
                    <BsTrash size="2.5rem" />
                  </ButtonIcon>
                </CardMyVideo>
              );
            });
          })}
        </Container>
      </PageDefault>
      {isLoading && <SpinnerLoader />}
    </>
  );
}

export default MyVideos;

export const getServerSideProps = withSSRAuth(async (ctx) => {
  // try {
  //   const data = await axios
  //     .get<CategoryDTO[]>("http://localhost:3000/api/list/categories")
  //     .then((res) => res.data);

  //   return {
  //     props: {
  //       data: data,
  //     },
  //   };
  // } catch (err) {
  //   console.log(err);
  // }

  return {
    props: {
      data: [],
    },
  };
});
