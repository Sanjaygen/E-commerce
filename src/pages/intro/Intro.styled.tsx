import { appColors } from "@/theme/color.Config";
import { Box, Button, Typography } from "@mui/material";
import styled from "styled-components";

export const LeftColumn = styled('div')`
    position:relative;
    bottom:70px;
`;

export const RightColumn = styled('div')`
  padding: 20px;
  margin-left:100px;
    
`;

export const ImageStyled = styled('img')`
  max-width: 100%;
  height: auto;
  z-index: 1;
  width:304px;
  height:450px;
  border-radius:120px 0px 120px 0px;
  position:relative;
  bottom:115px;
  right:10px;

`;

export const TypographyStyled = styled(Typography)`
    position:relative;
    font-size:74px;
    font-family: sans-serif;
    font-weight: lighter;
`;
export const TypographyContent = styled(Typography)`
    font-size:20px;
    font-family:roboto;
    font-weight: 400;
    line-height: 38px;
    margin-left:10px;
`;
export const ImageBorder = styled(Box)`
border:1px solid black;
width:306px;
height:450px;
border-radius:120px 0px 120px 0px;
position:absolute;
bottom:50px;
`;

export const StyledButton = styled(Button)<{bgColor: string, textColor: string}>`
    margin-top:30px;
     margin-left:10px;
     background: ${({bgColor}) => bgColor || appColors['white']};
     color: ${({textColor}) => textColor || appColors['black']};
    line-height: 30px;
    gap: 5px;

    &:hover {
        background-color: black;
    }
`;
export const FrameStyled = styled('div')`
    position:relative;
    top:370px;
`;

export const FrameRightStyled = styled('div')`
    position:relative;
    bottom:550px;
    float:right;
`;
