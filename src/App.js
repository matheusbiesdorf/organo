import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";

function App() {
    const times = [
        {
            nome: "Top",
            corPrimaria: "#E06B69",
            corSecundaria: "#FDE7E8",
        },
        {
            nome: "Jungler",
            corPrimaria: "#57C278",
            corSecundaria: "#D9F7E9",
        },
        {
            nome: "Mid",
            corPrimaria: "#82CFFA",
            corSecundaria: "#E8F8FF",
        },
        {
            nome: "ADC",
            corPrimaria: "#FFBA05",
            corSecundaria: "#FFF5D9",
        },
        {
            nome: "Support",
            corPrimaria: "#DB6EBF",
            corSecundaria: "#FAE9F5",
        },
    ];

    const [campeoes, setCampeoes] = useState([]);

    const aoNovoCampeaoAdicionado = (campeao) => {
        setCampeoes([...campeoes, campeao]);
    };

    return (
        <div className="App">
            <Banner />
            <Formulario
                times={times.map(time => time.nome)}
                aoCampeaoCadastrado={campeao =>
                    aoNovoCampeaoAdicionado(campeao)
                }
            />
            {times.map(time => 
                <Time
                    key={time.nome}
                    nome={time.nome}
                    corPrimaria={time.corPrimaria}
                    corSecundaria={time.corSecundaria}
                    campeoes={campeoes.filter(
                        campeao => campeao.time === time.nome)}
                />
            )}
        </div>
    );
}

export default App;
