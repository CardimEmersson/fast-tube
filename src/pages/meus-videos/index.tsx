import { useState, useEffect } from "react";
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
import { BsTrash } from "react-icons/bs";

import { SpinnerLoader } from "components/SpinnerLoader";
import { CategoryDTO } from "data/@types/categoryDto";
import { parseCookies } from "nookies";
import { getThumbnail } from "utils/youtubeVideo";
import { useRouter } from "next/router";

function MyVideos() {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState<CategoryDTO[]>([]);

  const router = useRouter();

  async function deleteVideo(urlVideo: string) {
    setIsLoading(true);
    const { "fasttube.id": userId } = parseCookies();

    await axios
      .post(`/api/delete/video?userId=${userId}`, {
        url: urlVideo,
      })
      .then((res) => {
        toast.success(res.data.message);
        fillVideos();
      })
      .catch((err: AxiosError) => {
        if (err.response?.data.message) {
          toast.error(err.response?.data.message);
        } else {
          toast.error("Não foi possivél excluir o video");
        }
      });

    setIsLoading(false);
  }

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

  const refreshData = () => {
    router.replace(router.asPath);
  };

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

                  <ButtonIcon onClick={() => deleteVideo(video.url)}>
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
