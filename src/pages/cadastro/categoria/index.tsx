import { useState, FormEvent } from "react";
import { PageDefault } from "components/PageDefault";
import { FormField, ButtonSubmit } from "components/FormField";
import axios, { AxiosError } from "axios";
import { Title } from "components/Title";
import { withSSRAuth } from "utils/withSSRAuth";
import { toast } from "react-toastify";
import { Form } from "components/FormField/styles";
import { SpinnerLoader } from "components/SpinnerLoader";

function CadastroCategoria() {
  const [isLoading, setIsLoading] = useState(false);
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

  return (
    <>
      <PageDefault>
        <Title>Cadastro de Categoria</Title>

        <Form onSubmit={handleSubmit}>
          <FormField
            label="Nome da Categoria"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
            required
          />

          <FormField
            label="Cor"
            type="color"
            name="color"
            value={color}
            onChange={(e) => setColor(e.currentTarget.value)}
            required
          />

          <ButtonSubmit type="submit">Cadastrar</ButtonSubmit>
        </Form>
      </PageDefault>
      {isLoading && <SpinnerLoader />}
    </>
  );
}

export default CadastroCategoria;

export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
