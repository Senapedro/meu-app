import '../Welcome/Welcome.css'
function Welcome({nome = 'usuario', sobrenome = 'teste'}) {
    //const { nome, sobrenome } = props;
    return(
        <h1>Olá { nome } { sobrenome } Seja bem-vindo !</h1>
    )
}

export default Welcome;