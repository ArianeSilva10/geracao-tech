import { Outlet } from "react-router-dom";
import Footer from "../componets/Footer";
import Header from "../componets/Header";

const PageLayout = () => {
    return ( 
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
     );
}
 
export default PageLayout;