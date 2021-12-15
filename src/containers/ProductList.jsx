import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const redirectToProduct = (e, productId) => {
    navigate(`/product/${productId}`);
  };

  const constructList = () => {
    return products.map((i) => (
      <div className="col-md-3 main-column">
        <div className="card">
          <img
            src={i.image}
            className="card-img-top product-image"
            alt={i.title}
          />
          <div className="card-body">
            <p>
              <span class="badge bg-secondary">{i.category}</span>
            </p>
            <h6 className="card-title">{i.title}</h6>
            {/* <p className="card-text">
        {i.description.substring(0,50)+"..."}
        </p> */}
            <button
              type="button"
              className="btn btn-dark"
              onClick={(e) => redirectToProduct(e, i.id)}
            >
              Buy now at ${i.price}
            </button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      {products.length === 0 ? (
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      ) : (
        constructList()
      )}
    </>
  );
};

export default ProductList;
