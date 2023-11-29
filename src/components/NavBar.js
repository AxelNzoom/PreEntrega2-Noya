import CartWidget from "./CartWidget/CartWidget";
import "./NavBar.css"
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar">
            <h3 className="h3">Emanga</h3>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="category/manga">Manga</NavLink>
                <NavLink to="category/manhua">Manhua</NavLink>
                <NavLink to="category/manhwa">Manhwa</NavLink>
                <NavLink to="/cart"><CartWidget /></NavLink>
            </div>
        </nav>
    )
    
}


export default NavBar;