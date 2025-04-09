import { useState } from "react";

function Imc() {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [resultado, setResultado] = useState(null);
    const [classificacao, setClassificacao] = useState('');

    const calcular = () => {
        const alturaNum = parseFloat(altura);
        const pesoNum = parseFloat(peso);

        if (!alturaNum || !pesoNum) {
            setResultado(null);
            setClassificacao("Por favor, insira valores válidos!");
            return;
        }

        const res = pesoNum / (alturaNum ** 2);
        setResultado(res.toFixed(2));

        definirClassificacao(res);
    };

    const definirClassificacao = (resultado) => {
        if (resultado < 16) {
            setClassificacao('Magreza grave');
        } else if (resultado < 17) {
            setClassificacao('Magreza moderada');
        } else if (resultado < 18.5) {
            setClassificacao('Magreza leve');
        } else if (resultado < 25) {
            setClassificacao('Saudável');
        } else if (resultado < 30) {
            setClassificacao('Sobrepeso');
        } else if (resultado < 35) {
            setClassificacao('Obeso grau I');
        } else if (resultado < 40) {
            setClassificacao('Obeso grau II (severa)');
        } else {
            setClassificacao('Obeso grau III (mórbida)');
        }
    };

    const limpar = () => {
        setAltura('');
        setPeso('');
        setResultado(null);
        setClassificacao('');
    };

    return (
        <>
            <h1>IMC</h1>
            <input type="number" placeholder="Sua altura..." value={altura} onChange={e => setAltura(e.target.value)} />
            <input type="number" placeholder="Seu peso..." value={peso} onChange={e => setPeso(e.target.value)} />

            <div className="buttons">
                <button onClick={calcular}>Calcular</button>
                <button onClick={limpar}>Limpar</button>
            </div>

            {resultado && (
                <div>
                    <h2>Seu IMC: {resultado}</h2>
                    <h3>Classificação: {classificacao}</h3>
                </div>
            )}
        </>
    );
}

export default Imc;