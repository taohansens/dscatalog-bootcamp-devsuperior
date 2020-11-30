import React, { useState, useEffect } from 'react';

const App = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        // Ciclo de vida
        console.log('Componente Iniciado')
    }, [])

    return (
        <div className="container mt-5">
            <button 
                className="btn btn-primary mr-5"
                onClick={() => setCounter(counter + 1)}
            >
                +
            </button>
            <span>
                {counter}
            </span>
            <button
                className="btn btn-danger ml-5"
                onClick={() => setCounter(counter - 1)}
            >
                -
            </button>
            {counter > 5 && <h1>O valor é maior que 5.</h1>}
            {counter <= 5 && <h1>O valor é menor ou igual a 5.</h1>}
        </div>
    );
}

export default App;