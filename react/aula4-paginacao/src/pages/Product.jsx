import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {

    const {id, name} = useParams();

    return ( 
        <div>
            <h1>Produto {name}</h1>
            <p>ID do Produto: {id}</p>
        </div>
     );
}
 
export default Product;
