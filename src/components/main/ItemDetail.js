
import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({title, detail, price, img}) => {
    return (
        <>
            <img src={img} alt={title} className='img-detail' />
            <div className='contenedor-precio-titulo-detail'>
            <h2 className='detail-title'>{title} - ${price}</h2>
            <p>{detail}</p>
            <ItemCount/>
            </div>
        </>
    );
}
export default ItemDetail;