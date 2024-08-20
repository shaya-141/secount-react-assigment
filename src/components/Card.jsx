import React from 'react'

function Card({img,text,price}) {
  return (
    <>
    <div className="card">
        <div className="img">
            <img src={img} alt="" />
        </div>
        <h2>{text}</h2>
        <p>price {price}</p>
        <button>Order</button>
    </div>
    
    </>
  )
}

export default Card