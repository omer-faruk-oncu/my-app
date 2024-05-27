import { Container } from "@mui/material";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";

interface ITodoType {
  task: string;
  isDone: boolean;
  id: string | number;
  todo?: string;
}

const url = "https://66143ed52fc47b4cf27bf960.mockapi.io/api/v1/todo";
const Main = () => {
  //const [todos,setTodos] = useState([] as ITodoType[])
  //const [todos,setTodos] = useState<Array<ITodoType>>([])
  const [todos, setTodos] = useState<ITodoType[]>([]);
  console.log(todos)

  const getTodos = async () => {
    try {
      const { data } = await axios<ITodoType[]>(url);
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Container>
      <Header />
    </Container>
  );
};

export default Main;
