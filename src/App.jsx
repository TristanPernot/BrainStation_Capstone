import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './componets/header/header'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* header */}
      <Header />
      {/* routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/listings" element={<ListingPage />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
