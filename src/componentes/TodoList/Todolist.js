import { useState } from 'react'
import '../TodoList/Todolist.css'
import TodoItem from '../Todoitem/Todoitem';
import TodoForm from '../TodoForm/todoForm';

const TodoList = () => {
    const [tarefas, setTarefas] = useState([]);

    const addTodo = (tarefaTextChildren) => {
        setTarefas([...tarefas, tarefaTextChildren])
    }
    
    return (
        <section className="todolist">
            <h2 className="todo-title">Minha lista de Tarefas</h2>
            <TodoForm onAdd={addTodo}/>
            <ol className="todos">
                {tarefas.map((tarefa, index) => (
                    <TodoItem tarefa={tarefa} key={index}/>
                ))}
            </ol>
        </section>
    )
}

export default TodoList;