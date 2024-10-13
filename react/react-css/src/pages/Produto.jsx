import { useParams } from "react-router-dom";

const Produto = () => {

    const {nome, id} = useParams();

    return ( 
        <>
            <h1>Produto: {nome} <br />
             id:        #{id}
            </h1>
        </>
     );
}
 
export default Produto;