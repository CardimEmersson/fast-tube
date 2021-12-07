import { PageDefault } from "components/PageDefault";
import { Container, PreviewContainer, TextPreview } from "styles/videoStyles";
import { Title } from "components/Title";
import { FormField, ButtonSubmit, Option } from "components/FormField";
import { FormEvent, useContext, useEffect, useState } from "react";
import { withSSRAuth } from "utils/withSSRAuth";
import axios from "axios";
import { Form } from "components/FormField/styles";
import { toast } from "react-toastify";
import { CategoryDTO } from "data/@types/categoryDto";
import { SpinnerLoader } from "components/SpinnerLoader";
import { AuthContext } from "contexts/AuthContext";
import { VideoIframeResponsive } from "components/BannerMain/VideoIframeResponsive";
import { getYouTubeId } from "components/BannerMain";

function CadastroVideo() {
  const { user } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState<CategoryDTO[]>([]);
  const [categorieSelected, setCategorieSelected] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsLoading(true);
    await axios
      .post("/api/create/video", {
        titleCategory: categorieSelected,
        titleVideo: title,
        url,
        userId: user?.id,
      })
      .then((res) => {
        toast.success(res.data.message);
        setTitle("");
        setUrl("");
        setCategorieSelected("");
      })
      .catch((err) => toast.error("Não foi possivél cadastrar o video"));

    setIsLoading(false);
  }

  function isYoutubeVideo(url: string) {
    var v =
      /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    return url.match(v) ? RegExp.$1 : false;
  }

  useEffect(() => {
    async function fillCategories() {
      setIsLoading(true);
      try {
        const dbCategories = await axios
          .get<{ categories: CategoryDTO[] }>("/api/list/categories")
          .then((res) => res.data.categories);

        setCategories(dbCategories);
      } catch (err) {
        toast.error("Não foi possivél buscar as categorias");
      }

      setIsLoading(false);
    }

    fillCategories();
  }, []);

  return (
    <>
      <PageDefault>
        <Container>
          <Title>Cadastro de video</Title>

          <PreviewContainer hasValue={url !== ""}>
            <VideoIframeResponsive videoID={getYouTubeId(url)} />
            {url === "" && <TextPreview>Preview</TextPreview>}
          </PreviewContainer>

          <Form onSubmit={handleSubmit}>
            <FormField
              label="Titulo do Video"
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.currentTarget.value)}
              required
            />

            <FormField
              label="Url do Video"
              type="url"
              name="url"
              value={url}
              onChange={(e) => setUrl(e.currentTarget.value)}
              required
            />

            <FormField
              label="Categoria"
              fieldType="select"
              name="category"
              defaultValue=""
              value={categorieSelected}
              onChangeSelect={(e) => {
                setCategorieSelected(e.currentTarget.value);
              }}
              required
            >
              {categories.map((categorie, index) => {
                return (
                  <Option value={categorie.title} key={index}>
                    {categorie.title}
                  </Option>
                );
              })}
            </FormField>

            <ButtonSubmit type="submit" disabled={!isYoutubeVideo(url)}>
              Cadastrar
            </ButtonSubmit>
          </Form>
        </Container>
      </PageDefault>
      {isLoading && <SpinnerLoader />}
    </>
  );
}

export default CadastroVideo;

export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
