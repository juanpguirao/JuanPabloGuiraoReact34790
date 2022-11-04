import React from 'react';

const Contador = ({habilitado,handleClick,contador}) => {

    return (
        <div id='contador'>
            <button 
                disabled={habilitado} 
                onClick={handleClick}
            >click</button>
            <p>Contador : <span>{contador}</span></p>
        </div>
    )
}

export default Contador