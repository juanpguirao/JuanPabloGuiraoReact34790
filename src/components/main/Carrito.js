import React from 'react'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import { useCustomProvider } from './CustomProvider';
import { Form } from '../pages/Form';

export const Carrito = () => {
  const value = useCustomProvider()
  const carrito = value.productos
  const { borrarProducto, calculoPrecio, vaciarCarrito, total, removerProducto, agregaProdUnidad } = useCustomProvider()
  console.log(value.productos)

  const removeProducto = id => {
    borrarProducto(id)
    calculoPrecio()
  }


  const remProdByUnit = id => {
    removerProducto(id)
  }

  const addProdByUnit = id => {
    agregaProdUnidad(id)
  }


  return (
    <>
    <div className='carrito__center'>

      {carrito.length === 0 ? <h2 className="titulo__error">Carrito Vacio</h2> : carrito.map((producto) => (
        <div className='carrito__card' key={producto.id}>
            <div className='carrito__item'>
              <img className='card__img' src={producto.image} alt={producto.nombre}></img>
              <h3>{producto.title}</h3>
              <p className='precio__producto'>$ {producto.price}</p>
              <div >
                <ArrowDropUpIcon fontSize="large" className='flechas__cantidad' onClick={() => addProdByUnit(producto.id)} />
                <p className='cantidad__producto'>{producto.cantidad}</p>
                <ArrowDropDownIcon fontSize="large" className='flechas__cantidad' onClick={() => remProdByUnit(producto.id)} />
              </div>
              <div className='remove__item'>
                <DeleteIcon className='delete__item' onClick={() => removeProducto(producto.id)} />
              </div>
            </div></div>
          ))
        }
      <div className='carrito__footer'>
        {carrito.length === 0 ? null : <>
          <h3>Total: ${total}</h3>
          <NavLink
            to="./compra" > <Button color="success" className='btn'>Comprar</Button></NavLink>
          <NavLink to="./productos"><Button color="success" className='btn' onClick={vaciarCarrito}>Vaciar Carrito</Button></NavLink>
        </>
        }

      </div>
    </div>
  </>
)
  
};