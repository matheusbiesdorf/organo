import './CampoTexto.css'

const CampoTexto = (props) => { /* Propriedades que o componente recebe */
    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input required={props.obrigatorio} placeholder={props.placeholder}></input>
        </div>
    )
}

export default CampoTexto