import './App.css';
import Reverse from './componentes/Reverse/reverse';
import TodoList from './componentes/TodoList/Todolist';
import Welcome from './componentes/Welcome/welcome';

function App() {
  return (
    <div className="App">
      <Welcome nome='Pedro' sobrenome='Sena'/>
      <div className="reverse">
        <p className="app-text"> Os textos abaixo são criados pelo componentes Reverse:</p>
        <Reverse>
          Meu texto
        </Reverse>
      </div>
      <TodoList/>
    </div>
    
  );
}

export default App;
