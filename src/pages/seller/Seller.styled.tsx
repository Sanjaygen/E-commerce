import { appColors } from "@/theme/color.Config";
import { Box, Button, Link, Typography } from "@mui/material";
import styled from "styled-components";

export const BoxContainer = styled("div")`
margin-left: 230px;
margin-top: 130px;
width: 69%;

@media (min-width: 390px) and (max-width: 767px) {
    margin-left: 2px;
    width: 69%;
    position: relative;
    bottom: 330px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
   margin-left: 2px;
    width: 69%;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    margin-left: 2px;
     width: 100%;
   }
`;

export const TopTypography = styled(Typography)`
text-align: center;
position: relative;
font-weight: 600;

@media (min-width: 390px) and (max-width: 767px) {
    text-align: center;
    position: relative;
    left: 53px;
    font-weight: 300;
    font-size: 35px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    text-align: center;
    position: relative;
    left: 100px;
    font-weight: 300;
    font-size: 40px;

  }
`;

export const BoxStyled = styled(Box)`
  margin-left: 20px;
  margin-top: 25px;
  margin-bottom: 20px;
  font-size: 15px; 
  
  @media (min-width: 390px) and (max-width: 767px) {
    left: 10px;
    margin-top: 25px;
    position: relative;
    font-size: 12px; 
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-top: 25px;
    position: relative;
    font-size: 20px; 

  }
`;

export const RowDiv = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (min-width: 390px) and (max-width: 767px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
export const ImgDiv = styled('div')`
  display: flex;
  position: relative;   

  @media (min-width: 390px) and (max-width: 767px) {
    flex-direction: column;
    margin-left: 40px;
    margin-top: 0px;
    position: relative;

  }

  @media (min-width: 768px) and (max-width: 1023px) {
    display: grid;
    margin-left: 70px;
    margin-top: 10px;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px; 
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    margin-left: 0px;
    margin-top: 10px;
    width: 1010px;
    height: 400px;
  }

`;
 export const CustomCard = styled("div")`
  width: 282px;

  @media (min-width: 390px) and (max-width: 767px) {
    width: 282px;
 
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 282px;
  }
`;

export const ProductContent = styled('div')`
display: flex;
justify-content: space-between;

@media (min-width: 390px) and (max-width: 767px) {
    display: flex;
   justify-content: space-between;
   
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    display: flex;
    justify-content: space-between;
  }
`;
export const StyledTypography = styled(Typography)`
font-family: "Open Sans", sans-serif;
font-weight: 600;
font-size: 16px;
line-height: 21.79px;


@media (min-width: 390px) and (max-width: 767px) {
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 21.79px;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    font-size: 13px;
    line-height: 21.79px;
  }
`;

export const StyledLink = styled(Link)`
margin-right: 10px;
text-decoration: none;
color: black;
cursor: pointer;


@media (min-width: 390px) and (max-width: 767px) {
    margin-right: 5px;
    text-decoration: none;
    color: black;
    cursor: pointer;

  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-right: 10px;
    text-decoration: none;
    color: black;
    cursor: pointer;

  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    margin-right: 30px;
    text-decoration: none;
    color: black;
    position: relative;
    cursor: pointer;

  }
`;
export const StyledButton = styled(Button)<{bgColor: string, textColor: string}>`
margin-right: 0px;
float: right;
height: 25px;
position: relative;
bottom: 10px;
left: 80px;
background: ${({bgColor}) => bgColor || appColors['white']};
color: ${({textColor}) => textColor || appColors['black']};
&:hover {
    background-color: black;
}

  
@media (min-width: 390px) and (max-width: 767px) {
    margin-right: 0px;
    float: right;
    height: 21px;
    position: relative;
    bottom: 18px;
    font-size: 9px;
    left: 100px;
    width: 82px;
    gap: 10px;
    background: ${({ bgColor }) => bgColor || appColors["white"]};
    color: ${({ textColor }) => textColor || appColors["black"]};
    &:hover {
      background-color: black;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-right: 0px;
    float: right;
    height: 29px;
    position: relative;
    bottom: 25px;
    font-size: 18px;
    left: 200px;
    gap: 10px;
    background: ${({ bgColor }) => bgColor || appColors["white"]};
    color: ${({ textColor }) => textColor || appColors["black"]};
    &:hover {
      background-color: black;
    }

  }
  
  @media (min-width: 1024px) and (max-width: 1440px) {
    float: right;
    height: 29px;
    position: relative;
    font-size: 12px;
    right: 22px;
    top: 0px;
    gap: 10px;
    background: ${({ bgColor }) => bgColor || appColors["white"]};
    color: ${({ textColor }) => textColor || appColors["black"]};
    &:hover {
      background-color: black;
    }

  }
`;

export const HotTypography = styled(Typography)`
position: absolute;
top: 40px;
left: 17px;
background-color: #ff6f61;
color: white;
width: 60px;
text-align: center;
`;
export const SaleTypography = styled(Typography)`
position:absolute;
top: 40px;
right: 205px;
background-color: black;
color: white;
width: 60px;
text-align: center;

@media (min-width: 390px) and (max-width: 767px) {
    position: absolute;
    top: 40px;
    right: 206px;
    background-color: black;
    color: white;
    width: 60px;
    text-align: center;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
 position: absolute;
  top: 40px;
  right: 205px;
  background-color: black;
  color: white;
  width: 60px;
  text-align: center;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    position: absolute;
     top: 40px;
     right: 175px;
     background-color: black;
     color: white;
     width: 60px;
     text-align: center;
     }
`;
export const TypographySale = styled(Typography)`
position: absolute;
top: 40px;
left: 863px;
background-color: black;
color: white;
width: 60px;
text-align: center;

@media (min-width: 390px) and (max-width: 767px) {
    position: absolute;
    top: 440px;
    left: 17px;
    background-color: #ff6f61;
  color: white;
  
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    position: absolute;
    top: 40px;
    left: 320px;
    background-color: #ff6f61;
    color: white;
    width: 60px;
    text-align: center;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    position: absolute;
    top: 40px;
    left: 775px;
    background-color: black;
    color: white;
    width: 60px;
    text-align: center;
  }
`;
