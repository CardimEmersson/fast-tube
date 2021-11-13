import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { PageDefault } from "components/PageDefault";
import { FormField, ButtonSubmit } from "components/FormField";
import { Title } from "components/Title";
import { withSSRAuth } from "utils/withSSRAuth";

interface CategoriasProps {
  nome: string;
  descricao: string;
  cor: string;
}

function CadastroCategoria() {
  const [categorias, setCategorias] = useState<CategoriasProps[]>([]);

  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [cor, setCor] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setCategorias([
      ...categorias,
      {
        nome,
        descricao,
        cor,
      },
    ]);
    setNome("");
    setDescricao("");
    setCor("");
  }

  // ============

  // useEffect(() => {
  //   if (window.location.href.includes("localhost")) {
  //     const URL = "http://localhost:8080/categorias";
  //     fetch(URL).then(async (respostaDoServer) => {
  //       if (respostaDoServer.ok) {
  //         const resposta = await respostaDoServer.json();
  //         setCategorias(resposta);
  //         return;
  //       }
  //       throw new Error("Não foi possível pegar os dados");
  //     });
  //   }
  // }, []);

  return (
    <PageDefault>
      <Title>Cadastro de Categoria</Title>

      <form
        onSubmit={handleSubmit}
        style={{
          marginTop: "32px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={nome}
          onChange={(e) => setNome(e.currentTarget.value)}
        />

        <FormField
          label="Descrição"
          type="text"
          name="descricao"
          value={descricao}
          onChange={(e) => setDescricao(e.currentTarget.value)}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={cor}
          onChange={(e) => setCor(e.currentTarget.value)}
        />

        <ButtonSubmit type="submit">Cadastrar</ButtonSubmit>
      </form>
    </PageDefault>
  );
}

export default CadastroCategoria;

export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
