import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import PageLayout from "../layouts/PageLayout";


const Paths = () => {
    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageLayout />}>
                        <Route index  element={<Home />}/>
                        <Route path="/Products" element={<Products />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
     );
}
 
export default Paths;