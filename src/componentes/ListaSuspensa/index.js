import './ListaSuspensa.css'
/* Verificar o props.obrigatorio depois e ver se precisa mudar para .required */
const  ListaSuspensa = (props) => {
    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select required={props.obrigatorio}> 
                {props.itens.map(item =>{
                    return <option key={item}>{item}</option> //Percorre a lista de nomes e retorna cada um em uma <option>
                    /* Usamos o próprio item (nome do time) como uma key */
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa