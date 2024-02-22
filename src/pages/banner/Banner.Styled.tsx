import { appColors } from "@/theme/color.Config";
import { Button, Typography, styled } from "@mui/material";
export const TextPara= styled(Typography)`
position: absolute;
top: 363px;
left: 1043px;
color: white;
font-size: 24px;
padding-right:30px;
font-family:serif;
Width:504px;
Height:187px;
`;
export const StyledButton= styled(Button)<{bgColor: string, textColor: string}>`
position: absolute;
top: 543px;
left: 1043px;
padding:10px 20px;
font-size: 23px;
font-weight: 400;
background: ${({bgColor}) => bgColor || appColors['white']};
color: ${({textColor}) => textColor || appColors['black']};
text-transform: capitalize;
font-family:Roboto;
width:200px;
height:50px;
border-radius:none;
&:hover{
    background-color:white;
}
`;