import { NavLink, Link } from "react-router-dom";
import './header.scss'
import Logo from '../../assests/Logo/Logo.png'

function Header() {
    return (
        <>
        <header className="header">
            <Link to="/">
            <div className="header__logo"></div>
            </Link>

            <div className="header__nav">
            <NavLink to="/listings" className="header__nav--item">
                <div>Player looking to join a group</div>
            </NavLink>

            <NavLink to="/createListing" className="header__nav--item">
                <div>I'm Looking to make a group</div>
            </NavLink>
            <NavLink to="/loginPage" className="header__nav--button">
                <div>Log In</div>
            </NavLink>
            </div>
        </header>
        </>
    );
}

export default Header;