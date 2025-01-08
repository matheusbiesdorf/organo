import './ListaSuspensa.css'

const  ListaSuspensa = (props) => {
    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select>
                {props.itens.map(item =>{
                    return <option key={item}>{item}</option> //Percorre a lista de nomes e retorna cada um em uma <option>
                    /* Usamos o próprio item (nome do time) como uma key */
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa