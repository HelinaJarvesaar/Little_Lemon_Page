import logo from "../images/Logo.svg";

function Header({ children }) {

    return (
        <header>
        <img src={logo} alt="Little Lemon logo" />
        {children}
        </header>
    );
}

export default Header;