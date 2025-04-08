import { useState } from 'react'
import styles from './Calculadora.module.css'

function Calculadora(params) {

    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [operacao, setOperacao] = useState('soma')
    const [resultado, setResultado] = useState(0)

    const calcular = () => {
        let res = 0
        let value1 = parseFloat(num1)
        let value2 = parseFloat(num2)

        switch (operacao) {
            case 'Somar':
                res = value1 + value2
                break;
            case 'Subtrair':
                res = value1 - value2
                break;
            case 'Multiplicar':
                res = value1 * value2
                break;
            case 'Dividir':
                if(value2 === 0) {
                    return setResultado('Divisão por zero não EXISTE');
                } 
                res = value1 / value2
                break;
            default:
                res = 0
                break;
        }

        setResultado(res)
        console.log(resultado)
    }

    function clear() {
        setNum1(0)
        setNum2(0)
        setOperacao('Somar')
        setResultado(0)
    }

    return (
        <>
            <h1>Calculadora</h1>
            <input type="number" placeholder='Valor 1' value={num1} onChange={e => setNum1(e.target.value)}/>
            <input type="number" placeholder='Valor 2' value={num2} onChange={e => setNum2(e.target.value)}/>

            <select value={operacao} onChange={e => setOperacao(e.target.value)}>
                <option value='Somar'>Somar</option>
                <option value='Subtrair'>Subtrair</option>
                <option value='Multiplicar'>Multiplicar</option>
                <option value='Dividir'>Dividir</option>
            </select>

            <div className='buttons'>
                <button onClick={calcular}>Calcular</button>
                <button onClick={clear}>Limpar</button>
            </div>
            
            {resultado > 0 && 
                <p>O resultado  é = {resultado}</p>
            }
        </>
    )
}

export default Calculadora