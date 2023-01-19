import React from "react";
import { Paper, styled, Stack, Box, Grid, Container } from "@mui/material";
import { Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const getUser = localStorage.getItem("getUser");
//const token = localStorage.getItem("tokenStore");

const Item = styled(Paper)(() => ({
  backgroundColor: '#FFFFFF',
  padding: "20px",
  color: "rgba(0, 0, 0, 0.6)",
  borderRadius: "4px",
  boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
  minHeight: "400px",
  marginTop: "2rem",
}));

export default function ProductCard({ products, deleteProduct }) {


  return (
    <Container maxWidth="lg">

<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {products.map((product) => (
          <Grid item xs={2} sm={4} md={4} key={product._id}>
            <Item> 
            <div className='upgrad-card-content'>
            <img src="https://res.cloudinary.com/dbhlicq8f/image/upload/v1673894712/cld-sample-5_aakjpl.jpg" className="img-fluid" alt='test-img'/>
            <div className='card-content-flex'>
            <h2 className="text-center font-bold">{product.title}</h2>
            
            <p
              className="mt-4 text-xs italic "
              style={{ textTransform: "uppercase" }}
            >
              <span>₹ </span>{product.price}
            </p>
            </div>
            <p className="mt-2 description">{product.description}</p>
            <div className="w-3/5 m-auto flex justify-between">
          <Link className="button-link" to={`/productDetails/${product._id}`}>Buy Now</Link>
 
          {getUser ==="admin@gmail.com" ? (
          
          <Stack direction="right" spacing={2} className="admin_crud">
              <Link color='grey' className="card-button-link" to={`/edit/${product._id}`}><EditIcon /></Link>
            
            <Link color='grey' className="card-button-link" to={`#`} onClick={() => deleteProduct(product._id)}><DeleteIcon /></Link>
            </Stack>
           ):(
            <>
           </>
             )}

          </div>
            </div>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>



    </Container>
  );
}
