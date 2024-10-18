import { Link } from "react-router-dom";

const Layout = ({children}) => {
    return ( 
        <div>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contato">Contato</Link></li>
                    </ul>
                </nav>
            </header>
            <main>{children}</main>
            <footer>
                <p>&copy; 2024 My website</p>
            </footer>
        </div>
     );
}
 
export default Layout;