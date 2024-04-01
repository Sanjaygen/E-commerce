import { appColors } from "@/theme/color.Config";
import { Box, Card, Typography } from "@mui/material";
import styled from "styled-components";

export const TypoProducts = styled(Typography)`
    margin-top:100px;
    text-align:center;
    justify-content:center;
    font-family:Inter;
    font-weight:500;
    @media(min-width:390px) and (max-width:767px){
         font-size:15px;
         margin-top:50px;
    }
`
export const CarouselBox = styled(Box)`
    display:flex;
    margin-top:100px;
    margin-left:40px;
    margin-right:40px;
    gap:20px;
    @media(min-width:390px) and (max-width:767px){
        margin-top:50px;
        margin-left:15px;
        margin-right:15px;
    }
    @media(min-width:1440px) and (max-width:1460px){
        text-align:center;
        justify-content:center;
    }
    @media(min-width:1450px){
        text-align:center;
        justify-content:center;
    }
`
export const CardDiv = styled("div")`
    img{
    border:1px solid #D7D7D7;
    padding:5px;
    border-radius:50%;
    height:25px;
    width:25px;
    margin-left:236px;
    margin-top:20px;
    cursor:pointer;
}
    @media(min-width:390px) and (max-width:767px){
        img{
        margin-left:135px; 
    }
}
@media(min-width:768px) and (max-width:1023px){
        img{
            margin-left:175px;
    }
}
`
export const CardTypo = styled(Typography)`
    color:#fff;
    background:#12A05C;
    border-radius:100px;
    font-size:13px;
    width:60px;
    position:absolute;
    margin-top:20px;
    margin-left:10px;
    padding-left:13px;
`
export const CardTypo1 = styled(Typography)`
    color:#fff;
    background:#E73C17;
    border-radius:100px;
    font-size:13px;
    width:60px;
    position:absolute;
    margin-top:20px;
    margin-left:10px;
    padding-left:13px;
`
export const CardTypo2 = styled(Typography)`
    color:#fff;
    background:#FF9900;
    border-radius:100px;
    font-size:13px;
    width:60px;
    position:absolute;
    margin-top:20px;
    margin-left:10px;
    padding-left:15px;
`
export const CardTypo3 = styled(Typography)`
    color:#fff;
    background:#7F7CF6;
    border-radius:100px;
    font-size:13px;
    width:100px;
    position:absolute;
    margin-top:20px;
    margin-left:10px;
    padding-left:20px;
`
export const CardButton = styled("button")<{bgcolor: string; textcolor: string;}>`
    background: ${({ bgcolor }) => bgcolor || appColors["white"]};
    color: ${({ textcolor }) => textcolor || appColors["black"]};
    font-family:Inter;
    font-weight:500;
    width:200px;
    padding:10px;
    border:none;
    margin-left: 25px;
    margin-top:35px;
    cursor:pointer;
    @media(min-width:390px) and (max-width:767px){
        width:120px;
        margin-left:7px;
        margin-top:25px;
    }
    @media(min-width:768px) and (max-width:1023px){
        width:150px;
        margin-left:7px;
        margin-top:10px;
    }
    @media(min-width:1024px) and (max-width:1199px){
        margin-left:0px; 
    }
    @media(min-width:1440px){
        margin-left:-20px;
    }
`
export const CardButton1 = styled("button")`
    color:#E73C17;
    font-family:Inter;
    font-weight:500;
    width:200px;
    padding:10px;
    background:#fff;
    border:none;
    margin-left: 25px;
    margin-top:35px;
    cursor:pointer;
    @media(min-width:1024px) and (max-width:1199px){
        margin-left: 0px;
    }
    @media(min-width:1440px){
        margin-left:-10px;
    }
`
export const StyleTypo = styled(Typography)`
    font-family:Inter;
    font-weight:400;
    color:#191919;
    font-size:14px;
    position:absolute;
    margin-top:30px;
    margin-left:0px;
    @media(min-width:390px) and (max-width:767px){
        margin-left:0px;
        margin-top:20px;
        font-size:10px;
    }
    @media(min-width:768px) and (max-width:1023px){
        margin-left:25px;
        margin-top:20px;
        font-size:12px;
    }
    @media(min-width:1024px) and (max-width:1199px){
         margin-left:23px;
    }
`
export const StyleTypo1 = styled(Typography)`
    font-family:Inter;
    font-weight:400;
    color:#191919;
    font-size:14px;
    position:absolute;
    margin-top:30px;
    margin-left:40px;
    @media(min-width:390px) and (max-width:767px){
        margin-left:0px;
        margin-top:20px;
        font-size:12px;
    }
    @media(min-width:768px) and (max-width:1023px){
        margin-left:40px;
        margin-top:20px;
        font-size:12px;
    }
    @media(min-width:1024px) and (max-width:1199px){
         margin-left:26px;
    }
`
export const StyleTypo2 = styled(Typography)`
    font-family:Inter;
    font-weight:400;
    color:#191919;
    font-size:14px;
    position:absolute;
    margin-top:30px;
    margin-left:15px;
    @media(min-width:390px) and (max-width:767px){
        margin-left:0px;
        margin-top:20px;
        font-size:12px;
    }
    @media(min-width:768px) and (max-width:1023px){
        margin-left:40px;
        margin-top:20px;
        font-size:12px;
    }
    @media(min-width:1024px) and (max-width:1199px){
         margin-left:26px;
    }
`
export const TypographyAmt = styled(Typography)`
    font-family:Inter;
    font-weight:600;
    color:#191919;
    position:absolute;
    margin-top:50px;
    margin-left:80px;
    @media(min-width:390px) and (max-width:767px){
        margin-left:40px;
        margin-top:40px;
    }
    @media(min-width:768px) and (max-width:1023px){
        margin-left:70px;
        margin-top:40px;
    }
`
export const TypographyAmt1 = styled(Typography)`
    font-family:Inter;
    font-weight:600;
    color:#191919;
    position:absolute;
    margin-top:50px;
    margin-left:110px;
    @media(min-width:390px) and (max-width:767px){
        margin-left:40px;
        margin-top:40px;
    }
    @media(min-width:768px) and (max-width:1023px){
        margin-left:80px;
        margin-top:40px;
    }
    @media(min-width:1024px) and (max-width:1199px){
         margin-left:66px;
    }
`