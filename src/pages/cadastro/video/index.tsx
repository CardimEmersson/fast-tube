import { PageDefault } from "components/PageDefault";
import Container from "./styles";
import { Title } from "components/Title";
import { FormField, ButtonSubmit } from "components/FormField";
import { FormEvent, useState } from "react";
import { withSSRAuth } from "utils/withSSRAuth";

function CadastroVideo() {
  const [titulo, setTitulo] = useState("");
  const [url, setUrl] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setTitulo("");
    setUrl("");
  }

  return (
    <PageDefault>
      <Container>
        <Title>Cadastro de video</Title>

        <form
          onSubmit={handleSubmit}
          style={{
            width: "100%",
            marginTop: "32px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <FormField
            label="Titulo do Video"
            type="text"
            name="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.currentTarget.value)}
          />

          <FormField
            label="Url do Video"
            type="url"
            name="url"
            value={url}
            onChange={(e) => setUrl(e.currentTarget.value)}
          />

          <ButtonSubmit type="submit">Cadastrar</ButtonSubmit>
        </form>
      </Container>
    </PageDefault>
  );
}

export default CadastroVideo;

export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
