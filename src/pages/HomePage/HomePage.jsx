import { NavLink, Link } from "react-router-dom";
import './HomePage.scss';
import ListComponent from "../../componets/ListingComponent/listingComponent";
function HomePage() {
    return (
        <>
        <div className="homepage">
            <h1 className="homepage__title">
                Begin Your Journey into the world of TableTop Role Playing Games
            </h1>
            <Link to="/listings">
                <button className="homepage__button">
                    Start here
                </button>
            </Link>
        </div>
        </>
    );
}

export default HomePage;