import Botao from "../Botao";
import CampoTexto from "../CampoTexto"; /* CTRL ESPAÇO PARA IMPORTAR AUTOMATICAMENTE */
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";
import { useState } from "react";

const Formulario = (props) => {
    const times = ["Top", "Jungler", "Mid", "ADC", "Support"];

    /* Hooks são os Setters */
    const [nome, setNome] = useState("");
    const [classe, setClasse] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState("");

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoCampeaoCadastrado({
            nome,
            classe,
            imagem,
            time
        })
    };

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do campeão</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o nome do campeão"
                    valor={nome}
                    aoAlterado={(valor) => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Classe"
                    placeholder="Digite a classe do campeão"
                    valor={classe}
                    aoAlterado={(valor) => setClasse(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={(valor) => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={times}
                    valor={time}
                    aoAlterado={(valor) => setTime(valor)}
                />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    );
};

export default Formulario;
