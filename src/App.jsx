import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
// Components
import Header from './componets/header/header'
import Footer from './componets/footer/footer'
// Pages
import HomePage from "./pages/HomePage/HomePage";
import ListingsPage from "./pages/ListingsPage/ListingsPage"
import CreateListingPage from "./pages/CreateListingPage/CreateListingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* header */}
      <Header />
      {/* routes */}
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/listings" element={<ListingsPage />} />
      <Route path="/createlisting" element={<CreateListingPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
