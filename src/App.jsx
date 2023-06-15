import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
// Components
import Header from './componets/header/header'
// Pages
import HomePage from "./pages/HomePage/HomePage";
import ListingsPage from "./pages/ListingsPage/ListingsPage"

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
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
