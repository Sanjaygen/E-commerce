'use client';
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { AppBarStyled, BoxStyled } from "./Header.styled";
import { Link } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag,faUser,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useQuery } from "@apollo/client";
import { QUERY } from "@/pages/homepage/query";

export const Header = () => {
  const {  data } = useQuery(QUERY);
  const { homes } = data || {};
  const { header, navbar } = homes?.data?.[0].attributes || {};
 
  return (
    <BoxStyled>
      <AppBarStyled position="static">
        <Toolbar>
          <FontAwesomeIcon icon={faMagnifyingGlass} scale={'1.25x'} style={{position:'relative',right:'20px'}}/> 
          <Typography  sx={{ marginLeft: "400px",fontSize:'28px' }}>
            <img src="img/logo/Group1.png" alt="no logo" width={'31px'} height={'15px'} style={{marginRight:'10px'}}/>
            {header?.[0]?.title}
            <img src="img/logo/Group1.png" alt="no logo" width={'31px'} height={'15px'} style={{marginLeft:'10px'}}/>
          </Typography>
          <Box sx={{ marginLeft: "auto" }}>
            <Button variant="text" color="inherit" sx={{gap:'8px'}}><FontAwesomeIcon icon={faUser} scale={'1.25x'}/>{header?.[0]?.headerbutton?.[0]?.title}</Button>
            <Button variant="text" color="inherit" sx={{gap:'8px'}}>   <FontAwesomeIcon icon={faShoppingBag} scale={'1.25x'}/>{header?.[0]?.headerbutton?.[1]?.title}</Button>
          </Box>
        </Toolbar>
        <hr />
        <Box sx={{ fontSize: "16px", color: "black", justifyContent: "space-between",fontFamily:'Open Sans',marginTop:'20px' }}>
          <Link href="#" sx={{ color: "black", marginRight: "40px", textDecoration:'none',cursor:'pointer' }}>{navbar?.[0]?.title}</Link>
          <Link href="#" sx={{ color: "black", marginRight: "40px", textDecoration:'none',cursor:'pointer'  }}>{navbar?.[1]?.title}</Link>
          <Link href="#" sx={{ color: "black", marginRight: "40px", textDecoration:'none',cursor:'pointer'  }}>{navbar?.[2]?.title}</Link>
          <Link href="#" sx={{ color: "black", marginRight: "40px", textDecoration:'none',cursor:'pointer'  }}>{navbar?.[3]?.title}</Link>
          <Link href="#" sx={{ color: "black", marginRight: "40px", textDecoration:'none',cursor:'pointer'  }}>{navbar?.[4]?.title}</Link>
          <Link href="#" sx={{ color: "black", marginRight: "40px", textDecoration:'none',cursor:'pointer'  }}>{navbar?.[5]?.title}</Link>
          <Link href="#" sx={{ color: "black" , textDecoration:'none',cursor:'pointer'}}>{navbar?.[6]?.title}</Link>
        </Box>
      </AppBarStyled>
    </BoxStyled>
  );
};
