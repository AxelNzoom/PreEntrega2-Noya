import carrito from "../CartWidget/assets/carrito.ico"

const CartWidget = () => {
    return (
        <div>
            <div class="box">
                <img src={carrito} alt="cart-widget" width={30}/>
                <span class="tag is-primary is-medium" ><p>0</p></span>
            </div>
        </div>
    )
}


export default CartWidget;