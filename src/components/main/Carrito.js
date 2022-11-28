import React from 'react'
import { useCustomProvider } from './CustomProvider'
import { NavLink } from 'react-router-dom';

 export const Carrito = () => {
  const value = useCustomProvider()
  const [menu, setMenu] = React.useState(false)
  const carrito = value.productos
  const { borrarProducto, calculoPrecio, vaciarCarrito, total, removerProducto, agregaProdUnidad } = useCustomProvider()


  const menuFalse = () => {
    setMenu(false)
  }
  const show = menu ? "carrito__padre show" : "carrito__padre"
  const show__dos = menu ? "carrito show" : "carrito"
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
    <div className={show}>
      <div className={show__dos}>
        <div onClick={menuFalse}>
          <button className='carrito__close'></button>
        </div>
        <h2>Este es su carrito </h2>


        <div className='carrito__center'>

          {
            carrito.length === 0 ? <h2 className="titulo__error">Carrito Vacio</h2> :
              carrito.map((producto) => (<div key={producto.id}>
                <div className='carrito__item'>
                  <img src={producto.imagen} alt={producto.nombre}></img>
                  <h3>{producto.nombre}</h3>
                  <p className='precio__producto'>$ {producto.precio}</p>
                  <div >
                    <button fontSize="large" className='flechas__cantidad' onClick={() => addProdByUnit(producto.id)} />
                    <p className='cantidad__producto'>{producto.cantidad}</p>
                    <button fontSize="large" className='flechas__cantidad' onClick={() => remProdByUnit(producto.id)} />
                  </div>
                  <div className='remove__item'>
                    <button className='delete__item' onClick={() => removeProducto(producto.id)} />
                  </div>
                </div></div>
              ))
          }
          <div className='carrito__footer'>
            {carrito.length === 0 ? null : <>
              <h3>Total: $ {total}</h3>
              <NavLink
                to="./compra" onClick={menuFalse}> <button color="success" className='btn'>Comprar</button></NavLink>
              <NavLink to="./productos"><button color="success" className='btn' onClick={vaciarCarrito}>Vaciar Carrito</button></NavLink>
            </>
            }

          </div>
        </div>
      </div>
    </div>

  )
};
