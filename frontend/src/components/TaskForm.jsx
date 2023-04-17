import { useState } from 'react'
import { useTasksContext } from '../hooks/useTasksContext'

const TaskForm = () => {
    const { dispatch } = useTasksContext()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (event) => {
        event.preventDefault()

        const task = {title, description}
        const response = await fetch('/api/tasks', {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok){
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok){
            setTitle("")
            setDescription("")
            setError(null)
            setEmptyFields([])
            dispatch({
                type: 'CREATE_TASK',
                payload: json
            })
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new task</h3>
            <label>Title:</label>
            <input 
                type="text"
                onChange={
                    (event) => {
                        setTitle(event.target.value)
                    }
                }
                value={title}
                className={emptyFields.includes('title') ? 'error' : ''}
            />
            <label>Description:</label>
            <input 
                type="text"
                onChange={
                    (event) => {
                        setDescription(event.target.value)
                    }
                }
                value={description}
                className={emptyFields.includes('description') ? 'error' : ''}
            />
            <button>Add Task</button>
            {error && <div className="error">{error}</div> }
        </form>
    )
}

export default TaskForm