import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";

export default function CreateProduct() {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price:"",
    cetegory:"",
    quantity:""
  });
  const navigate = useNavigate();

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const createProduct = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("tokenStore");
      if (token) {
        const { title, description, price, cetegory, quantity} = product;
        const newProduct = {
          title,
          description,
          price,
          cetegory,
          quantity
        };

        await axios.post("/api/products", newProduct, {
          headers: { Authorization: token },
        });

        return navigate("/products");
      }
    } catch (err) {
      window.location.href = "/";
    }
  };
  return (
    <div>
      <p className="text-center text-4xl font-bold mt-10">Add Product</p>
      <div className="flex justify-center items-center mt-10">
        <form onSubmit={createProduct} autoComplete="off">
          <div className="m_bottom-2">
<TextField className="" label="Title" variant="outlined" autoFocus 
              id="title"
              type="text"
              name="title"
              placeholder="title"
              required="true"
              value={product.title}
              onChange={onChangeInput} />
          </div>

          <div className="m_bottom-2">

<TextField className="" label="Description" variant="outlined" autoFocus 
              id="description"
              type="text"
              name="description"
              placeholder="description"
              required="true"
              value={product.description}
              onChange={onChangeInput} />

          </div>
          <div className="m_bottom-2">
<TextField className="" label="Price" variant="outlined" autoFocus 
              id="price"
              type="text"
              name="price"
              placeholder="price"
              required="true"
              value={product.price}
              onChange={onChangeInput} />
          </div>

          <div className="m_bottom-2">

<TextField className="" label="Cetegory" variant="outlined" autoFocus 
              id="cetegory"
              type="text"
              name="cetegory"
              placeholder="cetegory"
              required="true"
              value={product.cetegory}
              onChange={onChangeInput} />

          </div>
          <div className="m_bottom-2">

<TextField className="" label="Quantity" variant="outlined" autoFocus 
              id="quantity"
              type="number"
              name="quantity"
              placeholder="quantity"
              required="true"
              value={product.quantity}
              onChange={onChangeInput} />

          </div>
          
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            style={{ marginTop: 10 }}
          >
            Save
          </Button>
        </form>
      </div>
    </div>
  );
}
