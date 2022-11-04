import React, {useState} from 'react';

const ItemCount = () => {
    
    const [count, setCounter] = useState(0)
    
    return (
    <div>
        <h4>Unidades:</h4>
            
        <div className='counter-box'>

            <button className='counter-btn' onClick={()=> {setCounter(count -1 )}}> - </button>

            <p className='counter-num'>{count}</p>

            <button className='counter-btn' onClick={()=> {setCounter(count + 1)}} > + </button>
        </div>
    </div>

    )
}

export default ItemCount;