import { useSelector } from "react-redux"
import AddTodo from "../AddTodo/AddTodo"

const Todos = () => {
    const todos = useSelector((state) => state.todos.todos)
    return(
        <>
            <AddTodo />
            <div>
                {todos.map((todo) => {
                    return(
                        <div>
                            <h4>{todo.title}</h4>
                            <p>{todo.description}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default Todos