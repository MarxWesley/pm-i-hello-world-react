import { useState } from "react"

const HelloWorld = () => {

    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    const handleHelloWorld = () => {
        setMessage(`Hello World, ${name}!`)
    }

    function handleClear () {
        setMessage('');
        setName('');
    };

    const handleOnKeyUp = (e) => {
        if (e.key === 'Escape') {
            setName("")
        } else if (e.key === 'Enter'){
            handleHelloWorld()
        }
    }

    return (
        <>
            <h1>Hello World!</h1>
            <input type="text" onKeyUp={handleOnKeyUp} value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={handleHelloWorld}>Hello World!</button>
            <button onClick={handleClear}>Limpar</button>
            {name && <p>{message}</p>}
        </>
    )
}

export default HelloWorld