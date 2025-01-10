import Campeao from "../Campeao";
import "./Time.css";

const Time = (props) => {
    const css = {
        backgroundColor: props.corSecundaria,
    };

    return (
        (props.campeoes.length > 0) ?
        <section className="time" style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>

            <div className="campeoes">
                {props.campeoes.map((campeao) => (
                    <Campeao
                        key={campeao.nome}
                        nome={campeao.nome}
                        classe={campeao.classe}
                        imagem={campeao.imagem}
                    />
                ))}
            </div>
        </section> : ''
    );
};

export default Time;
