import {useState} from "react"
import { MyContext } from "./MyContext";
import { TodoItemType } from "../interfaces";

export default function Container({children}) {

    const [todoList, setTodoList] = useState<TodoItemType[]>([])

  return( <MyContext.Provider value={{todoList, setTodoList}}>
                {children}
            </MyContext.Provider>);
}
