import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  const fetchProducts = async () => {
    await fetch("https://fakestoreapi.com/products/" + params.productId)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
    <div>
      <button type="button" className="btn btn-dark" onClick={() => navigate('/')}>
       Back
      </button>
      </div>
      {Object.keys(product).length === 0 ? (
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      ) : (
        <>
          <div class="col-md-6 main-column">
            <div class="card">
              <img
                src={product.image}
                class="card-img-top product-single-image"
                alt={product.title}
              />
            </div>
          </div>
          <div class="col-md-6 main-column">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{product.title}</h5>
                <p class="card-text">{product.description}</p>
                <h4>${product.price}</h4>
                <button type="button" class="btn btn-dark">
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Product;
