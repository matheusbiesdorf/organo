import CampoTexto from "../CampoTexto"; /* CTRL ESPAÇO PARA IMPORTAR AUTOMATICAMENTE */
import "./Formulario.css";

const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do agente</h2>
                <CampoTexto label="Nome" placeholder="Digite o seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite o seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
            </form>
        </section>
    );
};

export default Formulario;
