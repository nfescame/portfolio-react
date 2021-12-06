import React from "react";
export const AuthContext = React.createContext({});

export const Auth = (props) => {
  const cards = [
    {
      title: "Lig4 ",
      subTitle: "Project #1 Game",
      image: "https://portfolionfescame.netlify.app/imagens/lig4Logo.png",
      path: "https://nfescame.github.io/Lig4-Game/",
      description:
        "Neste game eu apliquei o conhecimento adquirido nas primeiras semanas de desenvolvimento web bootcamp do ironhack.",
    },
    {
      title: "NG Heroes",
      subTitle: "Project #2 Crud-Pair programming-Guilherme Rosa",
      image: "https://portfolionfescame.netlify.app/imagens/heroes.jpg",
      path: "https://ngheroes.netlify.app/",
      description:
        "Este projeto é um sistema CRUD de recriação. Existe uma API com mais de 700 nomes e dados de heróis e com estes dados o usuário pode escolher seus 5 personagens favoritos.",
    },
    {
      title: "So fit ",
      subTitle:
        "Project #3 API-Pair programming-Manoel Pereira e Raul Guimarães",
      image: " https://portfolionfescame.netlify.app/imagens/fitness.jpeg",
      path: "https://so-fit-app.netlify.app/",
      description:
        "Este aplicativo da web tem como objetivo ajudar as pessoas a transformar sua vida de fitness em uma atividade mais agradável / emocionante.",
    },
    {
      title: "Movie List",
      subTitle: "Project #4 API:OMDb api",
      image: "https://portfolionfescame.netlify.app/imagens/images-9.jpeg",
      path: "https://escame-movies.netlify.app/",
      description:
        "Aplicação utiliza uma api de filmes, series e games, faz busca por nome e busca por id mostrando detalhes",
    },
    {
      title: "Escame Imóveis",
      subTitle: "Project #5 Site demonstração",
      image:
        "https://escame-imoveis.netlify.app/static/media/img2.a18708fb.jpg",
      path: "https://escame-imoveis.netlify.app/",
      description:
        "Site imobiliario para demonstração,desenvolvido em React js e Bootstrap. Inclui um formulario de envio de Email funcional utilizando FormSubmit.co ",
    },
    {
      title: "Lig4 ",
      subTitle: "Project #1 Game",
      image: "https://source.unsplash.com/random",
      path: "https://nfescame.github.io/Lig4-Game/",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      title: "Lig4 ",
      subTitle: "Project #1 Game",
      image: "https://source.unsplash.com/random",
      path: "https://nfescame.github.io/Lig4-Game/",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      title: "Lig4 ",
      subTitle: "Project #1 Game",
      image: "https://source.unsplash.com/random",
      path: "https://nfescame.github.io/Lig4-Game/",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      title: "Lig4 ",
      subTitle: "Project #1 Game",
      image: "https://source.unsplash.com/random",
      path: "https://nfescame.github.io/Lig4-Game/",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];

  return (
    <AuthContext.Provider value={{ cards }}>
      {props.children}
    </AuthContext.Provider>
  );
};