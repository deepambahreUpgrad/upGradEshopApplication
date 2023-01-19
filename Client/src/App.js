import React from "react";
import axios from "axios";
import Login from "./components/Login";
import Products from "./components/Product";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Register from "./components/Register";
import CreateProduct from "./components/CreateProduct";
import EditProduct from "./components/EditProduct";
import Navbar from "./components/Navbar";
import GetSingleProduct from "./components/getSingleProduct";

function App() {
  // eslint-disable-next-line
  const [isLogin, setIsLogin] = React.useState(false);

  React.useEffect(() => {
    const checkLogin = async () => {
      const token = localStorage.getItem("tokenStore");
      if (token) {
        const verified = await axios.get("/users/verify", {
          headers: { Authorization: token },
        });
        console.log(verified);
        setIsLogin(verified.data);
        if (verified.data === false) return localStorage.clear();
      } else {
        setIsLogin(false);
      }
    };
    checkLogin();
  }, []);
  const params = useParams();
  const id = params.id
 console.log(id);
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Login setIsLogin={setIsLogin} />} />
        <Route path="/signup" element={<Register setIsLogin={setIsLogin} />} />
        <Route path="/products" element={<Products setIsLogin={setIsLogin} />} />
        <Route path="/createProduct" element={<CreateProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />
        <Route path="/productDetails/:id" element={<GetSingleProduct />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
