type AddFn = (task:string) => Promise <void> 
type ToggleFn = (todo:ITodoType) => Promise <void> 
type DeleteFn = (id:string | number) => Promise <void> 

interface ITodoType {
    task: string;
    isDone: boolean;
    id: string | number;
    todo?: string;
  }

  interface ItodoListFn {
    deleteTodo: DeleteFn;
    toggleTodo: ToggleFn;
  }