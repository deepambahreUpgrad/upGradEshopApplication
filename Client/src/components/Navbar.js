import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@material-ui/icons/ShoppingCart';
import { withStyles} from "@material-ui/core";
import { Link} from "react-router-dom";

const styles = theme => ( {
  toolbarButtons: {
    marginLeft: "auto",
    marginRight: -12,
    flexGrow: 0
  }
} );

const getUser = localStorage.getItem("getUser");
const token = localStorage.getItem("tokenStore");

function ResponsiveAppBar(props, { setIsLogin }) {
  const { classes } = props;
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // eslint-disable-next-line
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const logoutSubmit = () => {
    localStorage.clear();
    setIsLogin(false);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // eslint-disable-next-line
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
// eslint-disable-next-line
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" className='navbar'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }} className="logoIcon"/>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              fontSize: "15px",
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              paddingLeft: "2rem",
            }}
          >
            upGrad Eshop
          </Typography>

          
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }} className={classes.toolbarButtons}>
            {token !==null ? (
       <>
       {getUser ==="admin@gmail.com" ? (
       <>
       <Link to="/createProduct" className='nav-link'><p className="md-device-link">Add Product</p></Link>
       <Link to="/" className='nav-link' onClick={logoutSubmit}><p className="md-device-link">Log Out</p></Link>
       </>):(
        <>
        <Link to="/" className='nav-link' onClick={logoutSubmit}><p className="md-device-link">Log Out</p></Link>
        </>
       )}
       
       </>
       ) : (
         <>
       <Link to="/" sx={{mr: 2}} className='nav-link'><p className="md-device-link">login</p></Link>
       <Link to="/signup" className='nav-link'><p className="md-device-link">Signup</p></Link>
         </>
       )}
            
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              className="hamburgerIcon"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
             
                <MenuItem onClick={handleCloseNavMenu} className="nav-xs-ul">
                {token !==null ? (
       <>
       {getUser ==="admin@gmail.com" ? (
       <>
       <Link to="/createProduct" className='nav-link'><p className="xs-device-link">Add Product</p></Link>
       <Link to="/" className='nav-link' onClick={logoutSubmit}><p className="xs-device-link">Log Out</p></Link>
       </>):(
        <>
        <Link to="/" className='nav-link' onClick={logoutSubmit}><p className="xs-device-link">Log Out</p></Link>
        </>
       )}
       
       </>
       ) : (
         <>
       <Link to="/" sx={{mr: 2}} className='nav-link'><p className="xs-device-link">login</p></Link>
       <Link to="/signup" className='nav-link'><p className="xs-device-link">Signup</p></Link>
         </>
       )}
                </MenuItem>
           
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 2 }} className="logoIcon" />
          <Typography
            variant="h5"
            noWrap
            component="a"
            className='mb-logo'
            href=""
            sx={{
              ml: 0,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontSize: "15px",
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              paddingLeft: "0rem",
            }}
          >
            upGrad Eshop
          </Typography>

          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default withStyles( styles )(ResponsiveAppBar);
