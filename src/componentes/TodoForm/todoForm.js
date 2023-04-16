import { useState } from "react";

const TodoForm = ({onAdd}) => {
    const [tarefaText, setTarefaText] = useState('');

    const handleChange = (event) => {
        setTarefaText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    //    setTarefas([...tarefas, tarefaText]);
    onAdd(tarefaText);
       setTarefaText('')
    }

    return (
        <form className="todo-register" onSubmit={handleSubmit}>
                <label htmlFor="tarefa">Tarefa:</label>
                <input type="text" 
                id="tarefa" 
                placeholder="Digite a sua tarefa"
                value={tarefaText}
                onChange={handleChange}
                />
                <button type="submit">Enviar</button>
            </form>
    )
}

export default TodoForm