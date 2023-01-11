import React, { useState } from 'react'

const OneForm = (prop) => {

    const [text, setText] = useState("")

    const handleToDo = (e) => {
        e.preventDefault()
        const oneTask = {
            text: text,
            completed: false
        }
        prop.todo.push(oneTask)
        prop.setTodo([...prop.todo]);
    }

    const handleText = (e) => {
        setText(e.target.value);
    }


    return (
        <div>
            <form action="" onSubmit={handleToDo}>
                <input type="text" onChange={handleText} />
                <button>Add</button>
            </form>
        </div>
    )
}

export default OneForm;