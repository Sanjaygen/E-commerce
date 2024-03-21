import { appColors } from "@/theme/color.Config";
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
export const LadyDiv = styled("div")<{bgcolor: string;}>`
     visibility:hidden;
     display:flex;
     background: ${({ bgcolor }) => bgcolor || appColors["white"]};
     color:#fff;
     justify-content:space-between;
     padding:10px;
     position:relative;
     margin-top:-48px;
     cursor:pointer;
     @media(min-width:390px) and (max-width:767px){
        position:relative;
        top:-30px;
     }
`

export const LadyimgDiv = styled('div')`
margin-right: 15px;
&:hover{
   ${LadyDiv}{
      visibility:visible;
   }
} 
// margin-bottom: 15px;
    img{
        height: 525px !important;
    }

@media (min-width: 390px) and (max-width: 767px) {
    margin-left: 40px;
    
    img {
      height: 400px !important; 
      width:  300px !important;
      object-fit:contain; 
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
export const PantsDiv = styled("div")<{bgcolor: string;}>`
     visibility:hidden;
     display:flex;
     background: ${({ bgcolor }) => bgcolor || appColors["white"]};
     color:#fff;
     justify-content:space-between;
     padding:10px;
     width:250px;
     position:absolute;
     margin-top:-52px;
     cursor:pointer;
     z-index:999;
     @media(min-width:390px) and (max-width:767px){
        width:175px;
        padding:5px;
        margin-top:-42px;
     }
`
export const CoatDiv = styled("div")<{bgcolor: string;}>`
     visibility:hidden;
     display:flex;
     background: ${({ bgcolor }) => bgcolor || appColors["white"]};
     color:#fff;
     justify-content:space-between;
     padding:10px;
     width:250px;
     position:absolute;
     margin-top:-47px;
     cursor:pointer;
     z-index:999;
     @media(min-width:390px) and (max-width:767px){
      width:175px;
      padding:5px;
      margin-top:-60px;
   }
   @media(min-width:768px) and (max-width:1024px){
      margin-top:-70px;
   }
`
export const ShirtDiv = styled("div")<{bgcolor: string;}>`
     visibility:hidden;
     display:flex;
     background: ${({ bgcolor }) => bgcolor || appColors["white"]};
     color:#fff;
     justify-content:space-between;
     padding:10px;
     width:250px;
     position:absolute;
     margin-top:-52px;
     cursor:pointer;
     z-index:999;
     @media(min-width:390px) and (max-width:767px){
      width:175px;
      padding:5px;
      margin-top:-42px;
   }
`
export const JacketDiv = styled("div")<{bgcolor: string;}>`
     visibility:hidden;
     display:flex;
     background: ${({ bgcolor }) => bgcolor || appColors["white"]};
     color:#fff;
     justify-content:space-between;
     padding:10px;
     width:250px;
     position:absolute;
     margin-top:-47px;
     cursor:pointer;
     z-index:999;
     @media(min-width:390px) and (max-width:767px){
      width:175px;
      padding:5px;
      margin-top:-37px;
   }
`
export const HoverDiv = styled("div")`
     &:hover{
          ${PantsDiv}{
             visibility:visible;
          }
          ${ShirtDiv}{
             visibility:visible;
          }
          ${CoatDiv}{
             visibility:visible;
          }
          ${JacketDiv}{
             visibility:visible;
          }
     }
     @media(min-width:390px) and (max-width:767px){
          img{
             object-fit:contain;
             margin-top:-20px;
          }
     }
     @media(min-width:1200px) and (max-width:1440px){
           img{
              height:270px !important;
           }
     }
` 
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
    margin-left:10px;
@media (min-width: 390px) and (max-width: 767px) {
    padding: 10px; 
    display:flex;
    gap:10px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    display:flex;
    gap:20px;
    margin-top:20px;
    img {
        height: 100% !important; 
        width:  auto !important; 
      }
  }
  @media (min-width: 1024px) and (max-width: 1199px) {
    display:flex;
    gap:20px;
    margin-top:20px;
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

  
  @media (min-width: 1024px) and (max-width: 1199px) {
    position: relative;
    left: -390px;  
    top: 100px;    
    font-size: 28px; 
  }
  @media (min-width: 1200px) and (max-width: 1439px){
     left: -650px;
     top:-20px;
  }
  @media(min-width:1440px){
     top:-120px;
     left: -650px;
  }
  @media(min-width:1450px){
     top:-180px;
  }
`;

export const SaleTypography = styled(Typography)`
position: absolute;
top: 40px;
left: 62.7%;
background-color: black;
color: white;
width: 60px;
text-align: center; 
z-index: 1;

@media (min-width: 390px) and (max-width: 767px) {
  position: relative;
  top: 40px;
  left: -185px;
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
  left: -270px;
  background-color: black;
  color: white;
  width: 60px;
  text-align: center; 
  z-index: 1;
}
@media(min-width:1024px) and (max-width:1199px){
  position: relative;
  top: 40px;
  left: -270px;
}
@media(min-width:1440px){
   left:61.3%;
}
@media(min-width:1449px){
  left:59.5%;
}

`
