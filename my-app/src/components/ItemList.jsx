import React, { useContext } from "react";
import { DataContext } from "../context/Dataprovider";

const ItemList = ({
    id,
    title,
    price,
    image,
    category,
}) => {

    const value = useContext(DataContext);
    const addCarrito = value.addCarrito;

    return(
        <div className="producto">
            <a href="#">
                <div className="producto__img">
                    <img src={image} alt={title}/>
                </div>
            </a>
            <div className="producto__footer">
                <h1> {title} </h1>
                <p> {category} </p>
                <p className="price"> ${price} </p> 
            </div>
            <div className="buttom">
                <button className="btn" onClick={() => addCarrito(id)}>
                    Añadir al carrito
                </button>
                <div>
                    <a href="#" className="btn">Vista</a>
                </div>
            </div>
        </div>
    )
}

export default ItemList