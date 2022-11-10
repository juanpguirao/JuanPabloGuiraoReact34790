import React from 'react'


function CartWidget() {
  
  fetch ('GET https://search.icons8.com/api/iconsets/v5/search?term=cart&token=YOUR_API_KEY')
  .then(response => response.json())
  .then(data => console.log(data))

  return (
    <div><span className="material-icons">settings_accessibility</span></div>
  )
}

export default CartWidget