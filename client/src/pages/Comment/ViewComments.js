import { Container } from "@material-ui/core";
import ViewCommentsComponent from "../../components/Comment/ViewComments/ViewCommentsComponent";

const ViewComments = (props) => {
  const comments = [
    {
      responsavel: "Beatriz Coutinho",
      ataRef: "02/21",
      data: "12/04/2021",
      revRef: "04",
      comentario:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, fugit, ullam facere saepe iste magnam dolore eveniet labore ea a molestias numquam, aut nostrum quidem! Distinctio, neque. Doloribus, at? Possimus.",
    },
    {
      responsavel: "Denis Lima",
      ataRef: "02/21",
      data: "13/04/2021",
      revRef: "05",
      comentario:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, fugit, ullam facere saepe iste magnam dolore eveniet labore ea a molestias numquam, aut nostrum quidem! Distinctio, neque. Doloribus, at? Possimus.",
    },
    {
      responsavel: "Charles Ferreira",
      ataRef: "02/21",
      data: "13/04/2021",
      revRef: "06",
      comentario:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, fugit, ullam facere saepe iste magnam dolore eveniet labore ea a molestias numquam, aut nostrum quidem! Distinctio, neque. Doloribus, at? Possimus.",
    },
    {
      responsavel: "Denis Lima",
      ataRef: "02/21",
      data: "13/04/2021",
      revRef: "05",
      comentario:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, fugit, ullam facere saepe iste magnam dolore eveniet labore ea a molestias numquam, aut nostrum quidem! Distinctio, neque. Doloribus, at? Possimus.",
    },
    {
      responsavel: "Charles Ferreira",
      ataRef: "02/21",
      data: "13/04/2021",
      revRef: "06",
      comentario:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, fugit, ullam facere saepe iste magnam dolore eveniet labore ea a molestias numquam, aut nostrum quidem! Distinctio, neque. Doloribus, at? Possimus.",
    },
  ];

  return <Container>{comments && comments.map((comment) => <ViewCommentsComponent comentario={comment} />)}</Container>;
};

export default ViewComments;
