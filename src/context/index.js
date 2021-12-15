import React, { useState } from "react";
export const AuthContext = React.createContext({});

export const Auth = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const projects = {
    titleMain: "Projects",
    cards: [
      {
        rows: 2,
        cols: 5,
        title: "NG Heroes",
        subTitle: "Project # Crud-Pair programming-Guilherme Rosa",
        image: "https://portfolionfescame.netlify.app/imagens/heroes.jpg",
        path: "https://ngheroes.netlify.app/",
        pathRepo: "https://github.com/nfescame/NgHeroes",
        description:
          "Este projeto é um sistema CRUD de recriação. Existe uma API com mais de 500 nomes e dados de heróis e com estes dados o usuário pode escolher seus 5 personagens favoritos e comparar seus status.",
      },
      {
        rows: 2,
        cols: 2,
        title: "Lig4 Game",
        subTitle: "Project # Game",
        image: "http://www.tabuleirocriativo.com.br/Images1/lig4-topimage.jpg",
        path: "https://nfescame.github.io/Lig4-Game/",
        pathRepo: "https://github.com/nfescame/Lig4-Game",
        description:
          "Neste game eu apliquei o conhecimento adquirido nas primeiras semanas de desenvolvimento web bootcamp do ironhack.",
      },

      {
        rows: 2,
        cols: 2,
        title: "So fit ",
        subTitle:
          "Project # API-Pair programming-Manoel Pereira e Raul Guimarães",
        image: " https://portfolionfescame.netlify.app/imagens/fitness.jpeg",
        path: "https://so-fit-app.netlify.app/",
        pathRepo: "https://github.com/rguima17/so-fit-client",
        description:
          "Este aplicativo da web tem como objetivo ajudar as pessoas a transformar sua vida de fitness em uma atividade mais agradável / emocionante.",
      },
      {
        rows: 2,
        cols: 5,
        title: "Movies Search",
        subTitle: "Project # OMDb api",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3pRoAGLfGTMMV45kwM3XUultIilY28nCaG2Bbeve6db6HdTb09zWmdVp5g0IglcInl0g&usqp=CAU",
        path: "https://escame-movies.netlify.app/",
        pathRepo: "https://github.com/nfescame/Movies-search",
        description:
          "Aplicação consumindo uma api (OMDB) de filmes, series e games,faz busca por nome, exibe detalhes do item selecionado, sistema de paginação... Usando Bootstrap com React JS,React Router Dom, Axios, Hooks:UseState, UsesEffect.",
      },
      {
        rows: 2,
        cols: 2,
        title: "Escame Imóveis",
        subTitle: "Project # Site demonstração",
        image:
          "https://escame-imoveis.netlify.app/static/media/img2.a18708fb.jpg",
        path: "https://escame-imoveis.netlify.app/",
        pathRepo: "https://github.com/nfescame/escame-imoveis",
        description:
          "Site imobiliario para demonstração, desenvolvido em React js e Bootstrap. Inclui um formulario de envio de Email funcional utilizando FormSubmit.co ",
      },
      {
        rows: 2,
        cols: 2,
        title: "Simple Crud",
        subTitle: "Project # CRUD ",
        image:
          "https://www.dorusomcutean.com/wp-content/uploads/2020/03/crud.jpg",
        path: "https://crud-escame.netlify.app/",
        pathRepo: "https://github.com/nfescame/crud-users",
        description:
          "Esta aplicação exibe uma lista com nomes e emails em uma tabela dinamica, pode-se editar deletar e adicionar registros. Usando: React JS com Bootstrap, React Router Dom. ",
      },
      {
        rows: 2,
        cols: 5,
        title: "Covid Statistics",
        subTitle: "Project #6 RapiApi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs_RGTxysWoC5Ty7RrW8kRLqFjkNvDkJxa_79_yjQA6sabPyqlknOOVzfNP526DaM4oVw&usqp=CAU",
        path: "https://covid-statistics-all.netlify.app/",
        pathRepo: "https://github.com/nfescame/Covid-api",
        description:
          "Aplicação consumindo uma api (RapidApi) com atualizações diarias dos numeros do Covid 19 no mundo, incluindo: casos, casos por milhão, mortes, mortes por milhão e população. Usando: @mui/material, @mui/styles, @mui/x-data-grid, Axios, React Router Dom.  ",
      },

      {
        rows: 2,
        cols: 5,
        title: "Currency Exchange",
        subTitle: "Project #7 RapidApi Exchangerate-api",
        image:
          "https://www.financemagnates.com/wp-content/uploads/2020/01/FX.jpg",
        path: "https://currency-exchange-escame.netlify.app/",
        pathRepo: "https://github.com/nfescame/Conversor-de-moeda",
        description:
          "Aplicação consumindo uma api (RapidApi,Exchangerate-api) exibindo códigos de conversão de moeda onde se seleciona duas moedas para convesão. Usando: React Js com Bootstrap, React Router Dom, Axios e react-currency-input-field. ",
      },
    ],
  };
  const competencias = {
    titleMain: "Skills",
    cards: [
      {
        rows: 2,
        cols: 2,
        title: "HTML ",
        image: "https://devporai.com.br/wp-content/uploads/2020/09/html5.jpg",
      },
      {
        rows: 2,
        cols: 2,
        title: "CSS3",
        image:
          "https://edrodrigues.com.br/wp-content/uploads/2019/10/melhore-o-seu-css-com-estes-5-principios.png",
      },
      {
        rows: 2,
        cols: 5,
        title: "Javascript",
        image:
          "https://static.imasters.com.br/wp-content/uploads/2018/03/jss.jpg",
      },
      {
        rows: 2,
        cols: 2,
        title: "Bootstrap",
        image:
          "https://www.upinside.com.br/uploads/courses/2018/09/bootstrap-builder-1536168891.jpg",
      },
      {
        rows: 1,
        cols: 2,
        title: "Github",
        image:
          "https://static.imasters.com.br/wp-content/uploads/2018/01/GIT.jpg",
      },
      {
        rows: 1,
        cols: 2,
        title: "React js",
        image: "https://miro.medium.com/max/1400/0*1V_xALlt1BCKvFBW.jpeg",
      },
      {
        rows: 2,
        cols: 2,
        title: "Material UI",
        image: "https://miro.medium.com/max/2000/1*FDNeKIUeUnf0XdqHmi7nsw.png",
      },
      {
        rows: 1,
        cols: 2,
        title: "Tailwind CSS",
        image:
          "https://laravelnews.imgix.net/images/tailwindcss.png?ixlib=php-3.3.1",
      },
      {
        rows: 2,
        cols: 2,
        title: "Node js",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6g-4ZAKHgqrqr8XWJ61lf9y_ObTodfGIHmH-O7Yg75kpBbn9YY3ZyyFzfXJ_KWiNR1Tc&usqp=CAU",
      },
      {
        rows: 1,
        cols: 2,
        title: "Express js",
        image:
          "https://media.vlpt.us/images/devgosunman/post/7d97a0e5-1784-41c3-a3c7-84ca98c166df/express.png",
      },
      {
        rows: 1,
        cols: 2,
        title: "MongoDB",
        image:
          "https://arquivo.devmedia.com.br/marketing/img/artigo-nosql-hospedando-bancos-de-dados-mongodb-31056.png",
      },
      {
        rows: 1,
        cols: 2,
        title: "Netlify",
        image:
          "http://softwareengineeringdaily.com/wp-content/uploads/2020/11/Netlify.png",
      },
    ],
  };

  return (
    <AuthContext.Provider value={{ projects, competencias, setIsOpen, isOpen }}>
      {props.children}
    </AuthContext.Provider>
  );
};
