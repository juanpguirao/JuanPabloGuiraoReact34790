import React, { useState } from 'react'

const Contador = () => {

    const estado = useState(0)
    let contador = estado[0]
    const unaFuncion = estado[1]

    let handleClick = (e) => {
        unaFuncion(contador + 1)
    }

  return (
    <div>
        <button></button>
    </div>
  )
}

export default Contador