import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { selectedProduct, resetProduct } from "../redux/actions/productActions";

const Product = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.product);

  const fetchProduct = async () => {
    await fetch("https://fakestoreapi.com/products/" + params.productId)
      .then((res) => res.json())
      .then((json) => dispatch(selectedProduct(json)));
  };

  useEffect(() => {
    fetchProduct();
    return () => {
      dispatch(resetProduct());
    }
  }, []);

  return (
    <>
      <div>
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => navigate("/")}
        >
          Back
        </button>
      </div>
      {Object.keys(productsData).length === 0 ? (
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      ) : (
        <>
          <div class="col-md-6 main-column">
            <div class="card">
              <img
                src={productsData.image}
                class="card-img-top product-single-image"
                alt={productsData.title}
              />
            </div>
          </div>
          <div class="col-md-6 main-column">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{productsData.title}</h5>
                <p class="card-text">{productsData.description}</p>
                <h4>${productsData.price}</h4>
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
