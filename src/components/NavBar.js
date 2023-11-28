import CartWidget from "./CartWidget/CartWidget";
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className="navbar">
            <h3 className="h3">Ecommerce</h3>
            <div>
                <button className="button is-success">Item1</button>
                <button className="button is-light">Item2</button>
                <button className="button is-danger">Item3</button>
            </div>
            <CartWidget />
        </nav>
    )
}


export default NavBar;