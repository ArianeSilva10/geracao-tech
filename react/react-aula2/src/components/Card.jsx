import React from "react";

const Card = ({title, category, content, image, paragraph, type}) => {
    return ( 
        <div style={{border: '1px solid red', padding: '10px', margin: '10px'}}>
            
            <img src={image} alt={title} />
            <h2>{title}</h2>
            {
                type == "A" && (
                    <>
                        <h6>{category}</h6>
                        <p>{paragraph}</p>
                    </>
                )
            }
        </div>
     );
}
 
export default Card;