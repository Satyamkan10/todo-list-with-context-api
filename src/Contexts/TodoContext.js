import {useContext,createContext} from "react"

export const TodoContext = createContext({
    todos:[{
        id:1,
        todo:"hello",
        Done:false
    }],
    addTodo : (todo) =>{},
    updateTodo :(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleDone:(id)=>{}

})

export const useTodo= () => {
   return useContext(TodoContext)
}

export const TodoProvide = TodoContext.Provider;