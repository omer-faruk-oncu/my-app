import React from "react";
import TodoListItem from "./TodoListItem";
import { Grid, Typography } from "@mui/material";
import "./style.css"

// interface ITodoList {
//   todos: ITodoType[];
//   deleteTodo: DeleteFn;
//   toggleTodo: ToggleFn;
// }
interface ITodoList extends ItodoListFn{
  todos: ITodoType[];
  
}
const TodoList: React.FC<ITodoList> = ({ todos, deleteTodo, toggleTodo }) => {
  const progressTodos = todos.filter((todo) => !todo.isDone);
  const completedTodos = todos.filter((todo) => todo.isDone);
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: ".5rem",
        mt: 3,
      }}
    >
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        position={"relative"}
        className="myscrool scrool-progress"
        sx={{
          minHeight: "350px",
          maxHeight: "350px",
          overflowY: "auto",
          border: "1px solid purple",
          borderRadius: ".5rem",
        }}
      >
        <Typography className="title" color="secondary" align="center" variant="h4">InProgress Todos</Typography>
        {progressTodos.length ? (
          progressTodos.map((todo) => (
            <TodoListItem
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
              todo={todo}
              key={todo.id}
            />
          ))
        ) : (
          <Typography color="error" mt={3}>No progress Todos</Typography>
        )}
      </Grid>

      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        position={"relative"}
        className="myscrool scrool-completed"
        sx={{
          minHeight: "350px",
          maxHeight: "350px",
          overflowY: "auto",
          border: "1px solid green",
          borderRadius: ".5rem",
        }}
      >
        <Typography className="title" color="secondary" align="center" variant="h4">Completed Todos</Typography>
        {completedTodos.length ? (
          completedTodos.map((todo) => (
            <TodoListItem
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
              todo={todo}
              key={todo.id}
            />
          ))
        ) : (
          <Typography color="error" mt={3}>No completed Todos</Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default TodoList;
