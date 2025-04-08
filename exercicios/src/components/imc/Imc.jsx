import { useState } from "react"

function Imc () {
    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)
    const [resultado, setResultado] = useState(0)
    const [classificacao, setClassificacao] = useState('')
    
    const calcular = () => {
        let altura = parseInt(setAltura)
        let peso =  parseInt(setPeso)

        let res = peso / (altura **2)

        setResultado(res)
        table()
        console.log(resultado)
    }

    const table = () => {
        switch (resultado) {
            case resultado < 16:
                setClassificacao('Magreza grave')
                break;
            case resultado < 17:
                setClassificacao('Magreza moderada')
                break;
            case resultado < 18.5:
                setClassificacao('Magreza leve')
                break;
            case resultado < 25:
                'Saudável'
                break;
            case resultado < 30:
                setClassificacao('Sobrepeso')
                break;
            case resultado < 35:
                setClassificacao('Obeso grau I')
                break;
            case resultado < 40:
                setClassificacao('Obeso grau II (severa)')
                break;
            case resultado > 40:
                setClassificacao('POKE')
                break;
        
            default:
                setClassificacao('Sei lá oq tu é, ESQUISITO!')
                break;
        }
    }

    function clear() {
        setAltura(0)
        setPeso(0)
    }

    return (
        <>
            <h1>IMC</h1>
            <input type="number" placeholder='Sua altura...' value={altura} onChange={e => setAltura(e.target.value)}/>
            <input type="number" placeholder='Seu peso...' value={peso} onChange={e => setPeso(e.target.value)}/>

            <div className='buttons'>
                <button onClick={calcular}>Calcular</button>
                <button onClick={clear}>Limpar</button>
            </div>

            {}
        </>
    )
}

export default Imc