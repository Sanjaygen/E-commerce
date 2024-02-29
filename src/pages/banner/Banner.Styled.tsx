import { appColors } from "@/theme/color.Config";
import { Button, Typography, styled } from "@mui/material";

export const BoxContainer = styled('div')`
position: realtive;
margin-top:90px;

@media (min-width: 390px) and (max-width: 767px) {
    position:relative;
     left: 0px;
     bottom: 280px;
  }

`;
export const TextPara= styled(Typography)`
color: white;
font-size: 21px;
padding-top:40px;
padding-right:30px;
font-family:serif;
Width:430px;
Height:187px;
@media (min-width: 390px) and (max-width: 767px) {
    font-size:10px;
    padding:5px;
    width:150px;
    height:70px;
}
@media (min-width: 768px) and (max-width: 1023px){
    font-size:18px;
    padding-right:15px;
    width:350px;
    height:60px;
}
`;
export const StyledButton= styled(Button)<{bgColor: string, textColor: string}>`
font-size: 23px;
font-weight: 400;
background: ${({bgColor}) => bgColor || appColors['white']};
color: ${({textColor}) => textColor || appColors['black']};
text-transform: capitalize;
font-family:Roboto;
margin-top: 50px;
padding:10px;
width:200px;
height:50px;
border-radius:none;
&:hover{
    background-color:white;
}
@media (min-width: 390px) and (max-width: 767px) {
    font-size:10px;
    font-weight:20;
    width:90px;
    height:20px;
    margin:20px;
    left:-14px;
}
@media (min-width: 768px) and (max-width: 1023px){
    font-size:15px;
    width:150px;
    height:30px;
    margin:120px;
    left:-120px;
}
`;
export const ContentWrapper=styled('div')`
position: absolute;
top: 240px;
left: 1020px;
padding:10px 20px;
@media (min-width: 390px) and (max-width: 767px) {
    position:absolute;
    top:40px;
    left:220px;
    padding:0px;
    width:150px;
    height:70px;
img{
    height:20px !important;
    width:40px;
}
}
@media (min-width: 768px) and (max-width: 1023px){
    position:absolute;
    top:40px !important;
    left:420px!important;
}
@media (min-width: 1024px) and (max-width: 1440px){
    position:absolute;
    top:40px !important;
    left:620px!important;
}
`