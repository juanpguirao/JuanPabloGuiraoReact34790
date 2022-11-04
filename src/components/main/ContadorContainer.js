import React, { useState } from 'react';
import Contador from './Contador'

const ContadorContainer = () => {

    const [contador, setContador] = useState(0)
    const [habilitado, setHabilitado] = useState(false)

    let handleClick = () => {
        setContador(contador + 1)
        //setHabilitado(true)
    }

    return (
        <Contador
            handleClick={handleClick}
            habilitado={habilitado}
            contador={contador}
        />
    )
}

export default ContadorContainer