import { Typography } from "@mui/material";
import styled from "styled-components";

export const MainDiv = styled('div')`
// background-color:#fff;
position:relative;
height:100vh;
`;
export const LogoDiv = styled('div')`

display: flex;
justify-content: center;
align-items: center;
position:relative;
top: 57px;
// left: 130px;
`;

export const ImageStyled = styled('img')`
    width: 200px;
    height: 70px;
    margin: 0 10px; 
`;

export const StyledTypography = styled(Typography)`
transform: rotate(-90deg);
 color: black;
 position: relative;
 right: 535px;
 bottom: 170px;
 fontWeight: 400;
 fontSize: 34px;
 fontFamily: roboto;
`;

export const SaleTypography = styled(Typography)`
position: absolute;
top: 20px; 
left: 10px;
background-color: black;
color: white;
width: 60px;
text-align: center; 
z-index: 1;
`
