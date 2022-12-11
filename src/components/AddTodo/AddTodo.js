import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { addTodo } from "../../store/todoSlice"

const AddTodo = () => {
    const {register, handleSubmit} = useForm()
    const dispatch = useDispatch()
    const saveTodo = (todo) => {
        dispatch(addTodo(todo))
    }
    return(
        <form onSubmit={handleSubmit(saveTodo)}>
            <input 
                type="text" 
                name="title" 
                id="title" 
                placeholder="Title"
                {...register("title")}
            />
            <input 
                type="text" 
                name="description" 
                id="description" 
                placeholder="Description"
                {...register("description")}
            />
            <button type="submit">Add Todo</button>
        </form>
    )
}
export default AddTodo