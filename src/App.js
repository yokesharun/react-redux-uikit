import Navigation from "./components/Navigation";
import ProductList from "./containers/ProductList";
import Product from "./containers/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <div class="container">
          <div class="row main-column">
            <Routes>
            <Route path="/" exact element={<ProductList/>}/>
              <Route path="/product/:productId" element={<Product/>}/>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
