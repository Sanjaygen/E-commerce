import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBarStyled, BoxStyled } from "./Header.styled";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Link } from "@mui/material";
import { styled } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag,faUser,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  return (
    <BoxStyled>
      <AppBarStyled position="static">
        <Toolbar>
          {/* <SearchIcon color="inherit" sx={{fontWeight:'900'}}/> */}
          <FontAwesomeIcon icon={faMagnifyingGlass} scale={'1.25x'}/> 
          <Typography  sx={{ marginLeft: "400px",fontSize:'28px' }}>
            CORAL
          </Typography>
          <Box sx={{ marginLeft: "auto" }}>
            <Button variant="text" color="inherit" sx={{gap:'8px'}}><FontAwesomeIcon icon={faUser} scale={'1.25x'}/> Account</Button>
            <Button variant="text" color="inherit" sx={{gap:'8px'}}>   <FontAwesomeIcon icon={faShoppingBag} scale={'1.25x'}/> Shopping</Button>
          </Box>
        </Toolbar>
        <hr />
        <Box sx={{ fontSize: "16px", color: "black", justifyContent: "space-between",fontFamily:'Open Sans' }}>
          <Link href="#" sx={{ color: "black", marginRight: "40px", textDecoration:'none',cursor:'pointer' }}>Jewelry & Accessories</Link>
          <Link href="#" sx={{ color: "black", marginRight: "40px", textDecoration:'none',cursor:'pointer'  }}>Clothing & Shoes</Link>
          <Link href="#" sx={{ color: "black", marginRight: "40px", textDecoration:'none',cursor:'pointer'  }}>Home & Living</Link>
          <Link href="#" sx={{ color: "black", marginRight: "40px", textDecoration:'none',cursor:'pointer'  }}>Wedding & Party</Link>
          <Link href="#" sx={{ color: "black", marginRight: "40px", textDecoration:'none',cursor:'pointer'  }}>Toys & Entertainment</Link>
          <Link href="#" sx={{ color: "black", marginRight: "40px", textDecoration:'none',cursor:'pointer'  }}>Art & Collectibles</Link>
          <Link href="#" sx={{ color: "black" , textDecoration:'none',cursor:'pointer'}}>Craft Supplies & Tools</Link>
        </Box>
      </AppBarStyled>
    </BoxStyled>
  );
};
