import './App.css';
import Reverse from './componentes/reverse';
import Welcome from './componentes/welcome';

function App() {
  return (
    <div className="App">
      <h1>Olá</h1>
      <Welcome nome='Pedro' sobrenome='Sena'/>
      <Welcome nome='Ana'/>
      {/* <Reverse texto= "Olá"/>
      <Reverse texto= "pedro"/> */}
      <Reverse>
        Meu texto
      </Reverse>
    </div>
    
  );
}

export default App;
