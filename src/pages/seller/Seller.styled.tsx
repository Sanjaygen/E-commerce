import { appColors } from "@/theme/color.Config";
import { Button, Link, Typography } from "@mui/material";
import styled from "styled-components";

 export const CustomCard = styled("div")`
width: 282px;
`;

export const ProductContent = styled('div')`
display: flex;
justify-content: space-between;
`;
export const StyledTypography = styled(Typography)`
font-family: "Open Sans", sans-serif;
font-weight: 600;
font-size: 16px;
line-height: 21.79px;
`;
export const BoxContainer = styled("div")`
height: 100vh;
margin-left: 230px;
margin-top: 80px;
width: 69%;
`;
export const StyledLink = styled(Link)`
margin-right: 10px;
text-decoration: none;
color: black;
cursor: pointer;
`;
export const StyledButton = styled(Button)<{bgColor: string, textColor: string}>`
margin-right: 0px;
float: right;
height: 30px;
position: relative;
bottom: 10px;
right: 10px;
background: ${({bgColor}) => bgColor || appColors['white']};
color: ${({textColor}) => textColor || appColors['black']};
&:hover {
    background-color: black;
}

`;

export const HotTypography = styled(Typography)`
position: absolute;
top: 40px;
left: 17px;
backgroundColor: #FF6F61;
color: white;
width: 60px;
text-align: center;
`;
export const SaleTypography = styled(Typography)`
position:absolute;
top: 40px;
right: 249px;
background-color: black;
color: white;
width: 60px;
text-align: center;
`;
export const TypographySale = styled(Typography)`
position: absolute;
top: 60px;
left: 798px;
background-color: black;
color: white;
width: 60px;
text-align: center;
`;
