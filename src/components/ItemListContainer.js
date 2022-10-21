import React from 'react'

function ItemListContainer(greeting) {
  return (
    <p> Bienvenido {greeting.nombre} {greeting.apellido}</p>
  )
}

export default ItemListContainer