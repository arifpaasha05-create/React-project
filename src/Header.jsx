function Header(){
    return(
        <nav className="navbar">
            <div className="navlogo">
            <h1>my<span>Shop</span></h1>
            </div>
            <ul className="navlinks">
                <li ><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Products">Products</a></li>
                <li><a href="#Contact us">Contact us</a></li>
            </ul>
            <button className="cart-btn">Cart 🛒</button>
        </nav>
    )

}
export default Header;