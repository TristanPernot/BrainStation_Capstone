import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
// Components
import Header from './componets/header/header'
import Footer from './componets/footer/footer'
// Pages
import HomePage from "./pages/HomePage/HomePage";
import ListingsPage from "./pages/ListingsPage/ListingsPage"
import CreateListingPage from "./pages/CreateListingPage/CreateListingPage";
import GetSingleListing from "./pages/GetSingleListing/GetSingleListing";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* header */}
      <Header />
      {/* routes */}
      <Routes>
      <Route path="/" element={<HomePage />} />
      {/*Listings*/}
      <Route path="/listings" element={<ListingsPage />} />
      <Route path="/listings/:id" element={<GetSingleListing />} />
      {/*Create Listings*/}
      <Route path="/createlisting" element={<CreateListingPage />} />
      {/*404 not found*/}
      <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
