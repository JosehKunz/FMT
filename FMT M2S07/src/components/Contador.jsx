import { useState } from "react"
import PropTypes from 'prop-types'


export function Contador() {
    const [contador, setContador] = useState(0)
    

    function handleAdd() {
        setContador(estadoAnterior => estadoAnterior + 1)
    }

    function handleMinus() {
        setContador(estadoAnterior => {
            if(estadoAnterior - 1 < 0) return 0
            return estadoAnterior - 1
        })
    }

    return (
        <div className="container-fluid mt-1">

            <button className="btn-default" onClick={handleAdd}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" height={16} width={16}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>

            <p>
                Valor: {' '}
                <strong>{contador}</strong>
            </p>
            
            <button className="button" onClick={handleMinus}>
                <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" height={16} width={16}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14"  />
                </svg>
             </button>

        </div>
    )
}

Contador.propTypes = {
    contadorPadrao: PropTypes.number
}