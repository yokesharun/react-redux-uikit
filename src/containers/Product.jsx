import React from "react";

const Product = () => {
  return (
    <>
      <div class="col-md-6 main-column">
        <div class="card">
          <img src="https://images.unsplash.com/photo-1601983038860-17f26c8c2d9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" class="card-img-top" alt="..." />
        </div>
      </div>
      <div class="col-md-6 main-column">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Price: $123
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
