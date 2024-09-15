import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const FormAddProduct = () => {
  const [product_name, setProduct_Name] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const saveProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/products", {
        product_name: product_name,
        price: price,
      });
      navigate("/products");
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Products</h1>
      <h2 className="subtitle">Add New Product</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveProduct}>
              <p className="has-text-centered">{message}</p>
              <div className="field">
                <label className="label">Product Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    value={product_name}
                    onChange={(e) => setProduct_Name(e.target.value)}
                    placeholder="Product Name"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Price</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Price"
                  />
                </div>
              </div>
              <div className="field is-grouped">
                <div className="control">
                  <button type="submit" className="button is-link">
                    Submit
                  </button>
                </div>
                <div className="control">
                  <Link to="/products" className="button is-link is-light">
                    Cancel
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddProduct;
