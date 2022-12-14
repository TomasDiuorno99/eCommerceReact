import React, {useContext} from "react";
import {DataContext} from "../context/Dataprovider";
import ItemList from "./ItemList";

const ProductsList = () => {
    
    const value = useContext(DataContext)
    const [productos] = value.productos

    console.log(productos)

    return(
        <>
        <h1 className="title"> PRODUCTOS </h1>
        <div className="productos">
            {
                productos.map(producto =>(
                    <ItemList 
                    key={producto.id}
                    id={producto.id}
                    title={producto.title}
                    price={producto.price}
                    image={producto.image}
                    category={producto.category}
                    cantidad={producto.cantidad}
                    />
                ))
            }
        </div>

        </>
            
    )
}
        
        export default ProductsList