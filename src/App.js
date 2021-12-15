import Navigation from "./components/Navigation";
import ProductList from "./containers/ProductList";
import Product from "./containers/Product";
import './index.css';

function App() {
  return (
    <>
      <Navigation />
      <div class="container">
        <div class="row main-column">
          <ProductList />
          <Product />
        </div>
      </div>
    </>
  );
}

export default App;
