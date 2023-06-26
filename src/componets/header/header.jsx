import { NavLink, Link } from "react-router-dom";
import './header.scss';
function Header() {
  return (
    <>
      <header className="header">
        <Link to="/">
          <div className="header__logo"></div>
        </Link>

        <div className="header__nav">
          <NavLink to="/listings" className="header__nav--item">
            <div>Looking for a Group</div>
          </NavLink>

          <NavLink to="/createlisting" className="header__nav--item">
            <div>Would you like to be a GM?</div>
          </NavLink>
          <div className="header__nav--avatar"></div>
        </div>
      </header>
    </>
  );
}

export default Header;
