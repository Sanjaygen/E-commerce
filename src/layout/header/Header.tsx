'use client';
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { AppBarStyled, BoxStyled } from "./Header.styled";
import { Link } from "@mui/material";
import { styled } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag,faUser,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useQuery } from "@apollo/client";
import { QUERY } from "@/pages/homepage/query";

export const Header = () => {
  // const {loading, error, data} = useQuery(QUERY)
  // console.log(data,'data');
  // const {header} = data || {};
  // console.log(header,'header');
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  return (
    <BoxStyled>
      <AppBarStyled position="static">
        <Toolbar>
          <FontAwesomeIcon icon={faMagnifyingGlass} scale={'1.25x'} style={{position:'relative',right:'20px'}}/> 
          <Typography  sx={{ marginLeft: "400px",fontSize:'28px' }}>
            <img src="img/logo/Group1.png" alt="no logo" width={'31px'} height={'15px'} style={{marginRight:'10px'}}/>
            CORAL
            <img src="img/logo/Group1.png" alt="no logo" width={'31px'} height={'15px'} style={{marginLeft:'10px'}}/>
          </Typography>
          <Box sx={{ marginLeft: "auto" }}>
            <Button variant="text" color="inherit" sx={{gap:'8px'}}><FontAwesomeIcon icon={faUser} scale={'1.25x'}/> Account</Button>
            <Button variant="text" color="inherit" sx={{gap:'8px'}}>   <FontAwesomeIcon icon={faShoppingBag} scale={'1.25x'}/> Shopping</Button>
          </Box>
        </Toolbar>
        <hr />
        <Box sx={{ fontSize: "16px", color: "black", justifyContent: "space-between",fontFamily:'Open Sans',marginTop:'20px' }}>
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
