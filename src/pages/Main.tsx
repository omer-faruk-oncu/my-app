import { Container } from "@mui/material";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import AddTodoComp from "../components/AddTodoComp";
import TodoList from "../components/TodoList";
import { SweetIcon, SweetPosition, notify } from "../helper/sweetAlert";

// interface ITodoType {
//   task: string;
//   isDone: boolean;
//   id: string | number;
//   todo?: string;
// }

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
//   const addTodo = async (task:string) => {
//     try {
   
//     } catch (error) {
//       console.log(error);
//     }
//   };
// type AddFn = (task:string) => Promise <void> 
const addTodo:AddFn = async (task:string) => {
    try {
        await axios.post(url, {task, isDone:false} )
        notify("Todo created!", SweetIcon.SUCCESS, SweetPosition.Center)
        getTodos()
   
    } catch (error) {
      console.log(error);
    }
  };
const toggleTodo:ToggleFn = async (todo) => {
    try {
        await axios.put(`${url}/${todo.id}`, {...todo, isDone:!todo.isDone} )
    } catch (error) {
      console.log(error);
    }finally{
        getTodos()
    }
  };
const deleteTodo:DeleteFn = async (id) => {
    try {
        await axios.delete(`${url}/${id}`)
    } catch (error) {
      console.log(error);
    }finally{
        getTodos()
    }
  };



  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Container>
      <Header />
      <AddTodoComp addTodo={addTodo}/>
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
    </Container>
  );
};

export default Main;
