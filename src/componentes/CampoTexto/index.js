import "./CampoTexto.css";

const CampoTexto = (props) => {
    /* Propriedades que o componente recebe */

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    };

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input
                value={props.valor}
                onChange={aoDigitado}
                required={props.obrigatorio}
                placeholder={props.placeholder}
            ></input>
        </div>
    );
};

export default CampoTexto;
