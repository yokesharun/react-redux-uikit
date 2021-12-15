import Navigation from "./components/Navigation";
import ProductList from "./containers/ProductList";
import Product from "./containers/Product";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import "./index.css";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <div class="container">
          <div class="row main-column">
              <Routes>
                <Route path={process.env.PUBLIC_URL + '/'} exact element={<ProductList />} />
                <Route path={process.env.PUBLIC_URL + '/product/:productId'} element={<Product />} />
              </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
