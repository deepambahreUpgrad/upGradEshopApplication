import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

export default function Products({ setIsLogin }) {
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");

  const getProducts = async (token) => {
    const res = await axios.get("api/products", {
      headers: { Authorization: token },
    });
    setProducts(res.data);
  };

  useEffect(() => {
    const token = localStorage.getItem("tokenStore");
    setToken(token);
    if (token) {
      getProducts(token);
    }
    else{
      window.location.href = "/";
    }
  }, []);

  const deleteProduct = async (id) => {
    try {
      if (token) {
        await axios.delete(`api/products/${id}`, {
          headers: { Authorization: token },
        });
        getProducts(token);
      }
    } catch (error) {
      window.location.href = "/";
    }
  };

  return (
    <div>
      <ProductCard products={products} deleteProduct={deleteProduct} />
    </div>
  );
}
