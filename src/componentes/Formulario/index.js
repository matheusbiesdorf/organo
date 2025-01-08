import Botao from "../Botao";
import CampoTexto from "../CampoTexto"; /* CTRL ESPAÇO PARA IMPORTAR AUTOMATICAMENTE */
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {

    const times = [
        'Top', 
        'Jungler',
        'Mid',
        'ADC',
        'Support'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}> 
                <h2>Preencha os dados para criar o card do campeão</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o nome do campeão" />
                <CampoTexto obrigatorio={true} label="Classe" placeholder="Digite a classe do campeão" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa obrigatorio={true} label="Time" itens={times}/>
                <Botao>
                    Criar Card 
                </Botao>
            </form>
        </section>
    );
};

export default Formulario;
