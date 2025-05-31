import { useState } from "react";

const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className={menuOpen ? "open" : ""}>
                <ul>
                    <li><a href="#reservations">Reservations</a></li>
                    <li><a href="#order">Order online</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#home">Home</a></li>
                </ul>
            </nav>
            <button
                className="hamburger"
                aria-label="Toggle menu"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                &#9776;
            </button>
        </>
    );
};

export default Nav;