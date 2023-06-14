import { NavLink, Link } from "react-router-dom";

function Header() {
    return (
        <>
        <header className="header">
            <Link to="/">
            <div className="header__logo"></div>
            </Link>

            <div className="header__nav">
            <NavLink to="/listings" className="header__nav--item">
                <div>Players looking for a group</div>
            </NavLink>

            <NavLink to="/createListing" className="header__nav--button">
                <div>I'm Looking to make a group</div>
            </NavLink>
            <NavLink to="/loginPage" className="header__nav-button">
                <div>Log In</div>
            </NavLink>
            </div>
        </header>
        </>
    );
}

export default Header;