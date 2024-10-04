import React from "react"
import small_logo from "../images/small_logo.png"

const Footer = () => {
    return(
        <footer>
            <section>
            <div>
                <img src={small_logo} />
            </div>
            <div>
                <h3>Navigation</h3>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
            </div>
            <div>
                <h3>Contact</h3>
            <ul>
                <li>123 Main St, Chicago, IL 60601</li>
                <li>Phone Number</li>
                <li>(555) 123-4567</li>
            </ul>
            </div>
            <div>
                <h3>Socials</h3>
            <ul>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Twitter</li>
            </ul>
            </div>
            </section>
        </footer>
    )
}

export default Footer;