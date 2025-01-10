import "./Campeao.css";
/* Desustruturamos o props nesse caso */
const Campeao = ({ nome, imagem, classe}) => {
    return (
        <div className="campeao">
            <div className="cabecalho">
                <img src={imagem} alt={nome}></img>
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{classe}</h5>
            </div>
        </div>
    );
};

export default Campeao;
