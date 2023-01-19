import React, { useEffect, useState } from 'react';
import {Container } from "@mui/material";
import {useParams} from "react-router-dom";
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {Grid, TextField, Button} from '@mui/material';

//const getUser = localStorage.getItem("getUser");
//const token = localStorage.getItem("tokenStore");

const Item = styled(Paper)(() => ({
    backgroundColor: '#FFFFFF',
    padding: "20px",
    color: "#000",
    borderRadius: "4px",
    boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
    minHeight: "400px",
    marginTop: "2rem",
  }));

export default function SingleProductCard() {
    const {id} = useParams();

    const [products, setProducts] = useState([]);
    const [token, setToken] = useState("");

    const getProduct = async (token) => {
        const res = await axios.get(`/api/products/${id}`, {
          headers: { Authorization: token },
        });
        setProducts(res.data);
      };

      useEffect(() => {
        const token = localStorage.getItem("tokenStore");
        setToken(token);
        if (token) {
            getProduct(token);
        }
        else{
          window.location.href = "/";
        }
      }, []);

  return (
    <Container maxWidth="lg">
        <div className='singleProduct'>
            
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item><img src="https://res.cloudinary.com/dbhlicq8f/image/upload/v1673894712/cld-sample-5_aakjpl.jpg" className="img-fluid" alt='test-img'/></Item>
        </Grid>
        <Grid item xs={8}>
          <Item><div>
            <div className='title-flex'>
          <h2>{products.title}</h2>
          <p><span>Available Quantity: </span>{products.quantity}</p>
          </div>
          <p><span>Cetegory: </span><strong>{products.cetegory}</strong></p>
          <p>{products.description}</p>
          <p
              className="mt-4 text-xs italic "
              style={{ textTransform: "uppercase", color:"red", fontSize: "18px" }}
            >
              <span>₹ </span>{products.price}
            </p>
            <TextField className="" label="Quantity" variant="outlined" autoFocus 
              id="price"
              type="text"
              name="price"
              placeholder="Quantity"
              required="true"/>
              <br></br><br></br>
              <Button style={{backgroundColor: "#3F51B5", color: "#FFFFFF",}}>Place Order</Button>
            </div>
            </Item>
        </Grid>
      </Grid>
    </Box>
        </div>
    </Container>
  )
}