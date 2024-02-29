import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const MainDiv = styled('div')`
position:relative;
left: 130px;
@media (min-width: 390px) and (max-width: 767px) {
  position:relative;
   left: 0px;
   bottom: 250px;
}

@media (min-width: 768px) and (max-width: 1023px) {
  position:relative;
  // left: 130px;
}
 
@media (min-width: 1024px) and (max-width: 1440px) {
  // position:relative;
 // left: 130px;
}
`;
export const BoxStyled = styled(Box)`
position: relative;
top: 60px;

`;

export const LadyimgDiv = styled('div')`
margin-right: 15px; 
// margin-bottom: 15px;
    img{
        height: 525px !important;
    }

@media (min-width: 390px) and (max-width: 767px) {
    margin-left: 40px;
    
    img {
      height: 400px !important; 
      width:  300px !important; 
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-left: 40px;
    
    img {
      height: 50% !important; 
      width:  auto !important; 
    }
  }
   
  @media (min-width: 1024px) and (max-width: 1440px) {
  
    left: -400px;
    position:realtive;
    
    img {
      height: 100% !important; 
      width:  100% !important; 
      
    }
  }
  
`;
export const LogoDiv = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: 57px;
  
  
  @media (min-width: 390px) and (max-width: 767px) {
    flex-direction: column; 
    align-items: center; 
    gap: 15px; 
  }

  
  @media (min-width: 768px) and (max-width: 1023px) {
    display: flex;
    justify-content: center;
    position: relative;
    top: 57px; 
    // right: 50px;

    img{
      height: 50px !important;
      width: 20% !important;
    }
  }
  

  @media (min-width: 1024px) and (max-width: 1440px) {
    display: flex;
    justify-content: center;
    position: relative;
    top: 57px; 
    right: 50px;

    img{
      height: 50px !important;
      width: 50% !important;
    }
  }
`;

export const ImageStyled = styled('img')`
    width: 200px;
    height: 70px;
    margin: 0 10px; 
`;

export const StyledDiv = styled('div')`

@media (min-width: 390px) and (max-width: 767px) {
    padding: 10px; 

  }

  @media (min-width: 768px) and (max-width: 1023px) {
    img {
        height: 100% !important; 
        width:  auto !important; 
      }
  }
`;

export const StyledTypography = styled(Typography)`
  transform: rotate(-90deg);
  color: black;
  position: relative;
  font-weight: 400;
  font-family: roboto;
  left: -630px; 
  font-size: 27px;
  bottom: 160px;
  
  @media (min-width: 390px) and (max-width: 767px) {
    left: -160px;  
    top: 230px;    
    font-size: 18px; 
    font-family: roboto;
    font-weight: 400;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    left: -390px;  
    top: 219px;    
    font-size: 28px; 
  }

  
  @media (min-width: 1024px) and (max-width: 1440px) {
    position: relative;
    left: -390px;  
    top: 100px;    
    font-size: 28px; 
  }
`;

export const SaleTypography = styled(Typography)`
position: relative;
top: 40px;
left: 0px;
background-color: black;
color: white;
width: 60px;
text-align: center; 
z-index: 1;

@media (min-width: 390px) and (max-width: 767px) {
 position: relative;
top: 40px;
left: 0px;
background-color: black;
color: white;
width: 50px;
font-size: 15px;
text-align: center; 
z-index: 1;

  }

  @media (min-width: 768px) and (max-width: 1023px) {
    position: relative;
top: 40px;
left: 0px;
background-color: black;
color: white;
width: 60px;
text-align: center; 
z-index: 1;
  }

`
