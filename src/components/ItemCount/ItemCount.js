import './ItemCount.css';
import React from "react";

const ItemCount = () => {

    const {useState} = React;

    const[count, setCount] = useState(1);

    const stock = 10

    const restar = () => {
        count !== 1  &&  setCount(count - 1);        
    }

    const agregar = () => {
        stock > count ? setCount(count+1) : console.log("No hay más unidades");
    }
    

    return (
      <>
        <div className="itemCount">
            <button className="botonCantidad" onClick={restar}>-</button>
            <h4>{count}</h4>
            <button className="botonCantidad" onClick={agregar}>+</button>
        </div>
      </>
    )
  
}

export default ItemCount;
