import "./Botao.css"
// Usamos o children para passar tudo que está dentro desse botão como props
const Botao = (props) => {
    return <button className="botao"> 
        {props.children} 
    </button>;
};

export default Botao
