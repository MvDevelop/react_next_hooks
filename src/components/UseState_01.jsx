
import { useState  } from 'react';

export default () => {

    const [valor, setValor] = useState(0);

    function diminuir() {
        setValor(v => v - 1);
    } 

    function aumentar() {
        setValor(v => v + 1);
    }

    return (
        <>
            <h3>useState</h3>
            <p>Valor: {valor}</p>
            <button onClick={diminuir}>Diminuir</button>
            <button onClick={aumentar}>Aumentar</button>
        </>
    )
}
