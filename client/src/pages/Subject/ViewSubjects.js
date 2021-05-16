import { Container } from "@material-ui/core";
import ViewSubjectsComponent from "../../components/ViewSubjects/ViewSubjectsComponent";

const ViewSubjects = (props) => {
  const subjects = [
    {
      responsavel: "Beatriz Coutinho",
      ataRef: "02/21",
      data: "12/04/2021",
      prazo: "12/05/2021",
      assunto:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, fugit, ullam facere saepe iste magnam dolore eveniet labore ea a molestias numquam, aut nostrum quidem! Distinctio, neque. Doloribus, at? Possimus.",
    },
    {
      responsavel: "Denis Lima",
      ataRef: "02/21",
      data: "13/04/2021",
      prazo: "12/05/2021",
      assunto:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, fugit, ullam facere saepe iste magnam dolore eveniet labore ea a molestias numquam, aut nostrum quidem! Distinctio, neque. Doloribus, at? Possimus.",
    },
    {
      responsavel: "Charles Ferreira",
      ataRef: "02/21",
      data: "13/04/2021",
      prazo: "12/05/2021",
      assunto:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, fugit, ullam facere saepe iste magnam dolore eveniet labore ea a molestias numquam, aut nostrum quidem! Distinctio, neque. Doloribus, at? Possimus.",
    },
    {
      responsavel: "Denis Lima",
      ataRef: "02/21",
      data: "13/04/2021",
      prazo: "12/05/2021",
      assunto:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, fugit, ullam facere saepe iste magnam dolore eveniet labore ea a molestias numquam, aut nostrum quidem! Distinctio, neque. Doloribus, at? Possimus.",
    },
    {
      responsavel: "Charles Ferreira",
      ataRef: "02/21",
      data: "13/04/2021",
      prazo: "12/05/2021",
      assunto:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, fugit, ullam facere saepe iste magnam dolore eveniet labore ea a molestias numquam, aut nostrum quidem! Distinctio, neque. Doloribus, at? Possimus.",
    },
  ];

  return <Container>{subjects && subjects.map((subject) => <ViewSubjectsComponent assunto={subject} />)}</Container>;
};

export default ViewSubjects;
