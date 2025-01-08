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

    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do campeão</h2>
                <CampoTexto label="Nome" placeholder="Digite o nome do campeão" />
                <CampoTexto label="Classe" placeholder="Digite a classe do campeão" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa label="Time" itens={times}/>
            </form>
        </section>
    );
};

export default Formulario;
