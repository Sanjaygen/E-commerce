import { appColors } from "@/theme/color.Config";
import { Box, Breadcrumbs, Button, Typography } from "@mui/material";
import { Tab, TabPanel } from "react-tabs";
import styled from "styled-components";

export const SetIcon = styled(Box)`
    color:#fff;
    background:#E73C17;
    padding:8px;
    width:15%;
    cursor:pointer;
    @media(min-width:390px) and (max-width:767px){
       margin-left:0px;
       width:45%;
    }
    @media(min-width:768px) and (max-width:1023px){
       margin-left:0px;
       width:25%;
    }
    @media(min-width:1024px) and (max-width:1199px){
        width:20%; 
    }
    @media(min-width:1450px) and (max-width:1550px){
        width:12%
    }
`
export const BoxContainer = styled(Box)`
    background:#F4F5F8; 
    height:200px; 
    text-align:center;
    font-family:Inter;
    font-weight:300;
    margin-top:30px;
`
export const TypographyContent = styled(Typography)`
    padding-top:50px;
    @media(min-width:390px) and (max-width:767px){
        font-size:23px;
    }
    @media(min-width:768px) and (max-width:1023px){
        font-size:27px;
    }
`
export const StyledDiv = styled(Box)`
    display:flex;
    margin-top:50px;
    margin-left:30px;
    @media(min-width:390px) and (max-width:767px){
        flex-direction:column;
    }
    @media(min-width:768px) and (max-width:1023px){
        flex-direction:column;
    }
`
export const StyledBox1 = styled(Box)`
    background:#F4F5F8;
    height:525px;
    width:410px;
    margin-left:30px;
    padding-top:110px;
    img{
        height:300px;
        width:300px;
        margin-left:35px;
    }
    @media(min-width:390px) and (max-width:767px){
        height:200px;
        width:330px;
        margin-left:0px;
        margin-right:10px;
        padding-top:0px;
        img{
            height:170px;
            width:200px;
            margin-left:65px;
            margin-top:16px;
        }
    }
    @media(min-width:768px) and (max-width:1023px){
        height:320px;
        width:95%;
        margin-left:0px;
        margin-right:0px;
        padding-top:0px;
        img{
            height:270px;
            width:500px;
            margin-left:100px;
            margin-top:25px;
        }
    }
    @media(min-width:1024px) and (max-width:1199px){
        margin-left:10px;
        width:70%;
        img{
            height:350px;
            width:350px;
            margin-left:40px;
            margin-top:-20px;
        }
    }
    @media(min-width:1440px) and (max-width:1451px){
        margin-left:10px;
        width:50%;
        img{
            height:350px;
            width:320px;
            margin-left:60px;
            margin-top:-20px;
        }
    }
`
export const StyledBox = styled(Box)`
    @media(min-width:390px) and (max-width:767px){
          position:absolute;
          margin-top:200px;
    }
`
export const ImageStyled1 = styled("div")`
    border:1px solid #E73C17;
    padding:5px;
    width:158px;
    @media(min-width:390px) and (max-width:767px){
        display:none;
    }
    @media(min-width:768px) and (max-width:1023px){
        border:1px solid #E73C17;
        position:absolute;
        margin-top:370px;
        img{
            margin-top:15px;
            margin-left:5px;
        } 
    }
`
export const ImageStyled2 = styled("div")`
    border:1px solid #F0F0F0;
    padding:5px;
    width:158px;
    margin-top:35px;
    padding-left:20px;
    @media(min-width:390px) and (max-width:767px){
        border:1px solid #E73C17;
        position:absolute;
        top:30px;
        left:0px;
        width:90px;
        height:89px;
        img{
            height:68px;
            width:78px;
            margin-top:5px;
            margin-left:-15px;
        }
    }
    @media(min-width:768px) and (max-width:1023px){
        border:2px solid #F0F0F0;
        position:absolute;
        margin-top:370px;
        left:210px;
        img{
            margin-top:15px;
            margin-left:5px;
        }
    }
`
export const ImageStyled3 = styled("div")`
    border:1px solid #F0F0F0;
    padding:5px;
    width:158px;
    margin-top:35px;
    padding-left:20px;
    @media(min-width:390px) and (max-width:767px){
        border:2px solid #F0F0F0;
        position:absolute;
        top:30px;
        left:115px;
        width:83px;
        height:89px;
        img{
            height:68px;
            width:68px;
            margin-top:5px;
            margin-left:-15px;
        }
    }
    @media(min-width:768px) and (max-width:1023px){
        border:2px solid #F0F0F0;
        position:absolute;
        margin-top:370px;
        left:387px;
        img{
            margin-top:15px;
            margin-left:5px;
        }
    }
`
export const ImageStyled4 = styled("div")`
    border:1px solid #F0F0F0;
    padding:5px;
    width:158px;
    margin-top:35px;
    border:1px solid #F0F0F0;
    padding:5px;
    width:158px;
    margin-top:35px;
    padding-left:20px;
    @media(min-width:390px) and (max-width:767px){
        border:2px solid #F0F0F0;
        position:absolute;
        top:30px;
        left:235px;
        width:83px;
        height:89px;
        img{
            height:68px;
            width:68px;
            margin-top:5px;
            margin-left:-15px;
        }
    }
    @media(min-width:768px) and (max-width:1023px){
        border:2px solid #F0F0F0;
        position:absolute;
        margin-top:370px;
        left:570px;
        img{
            margin-top:15px;
            margin-left:5px;
        }
    }
`
export const BrandTypography = styled(Typography)`
    font-family:Inter;
    font-weight:300;
    font-size:13px;
    margin-top:5px;
    @media(min-width:390px) and (max-width:767px){
        margin-top:200px;
    }
    @media(min-width:768px) and (max-width:1023px){
        margin-top:200px;
        font-size:15px;
    }
    @media(min-width:1440px) and (max-width:1460px){
        font-size:20px;
    }
`
export const BrandTypography1 = styled(Typography)`
    font-family:Inter;
    font-weight:300;
    font-size:13px;
    margin-top:5px;
    @media(min-width:390px) and (max-width:767px){
        
    }
    @media(min-width:768px) and (max-width:1023px){
        font-size:15px;
    }
    @media(min-width:1440px) and (max-width:1460px){
        font-size:20px;
    }
`
export const BrandTypography2 = styled(Typography)`
    font-family:Inter;
    font-weight:300;
    font-size:13px;
    margin-top:5px;
    @media(min-width:390px) and (max-width:767px){
        
    }
    @media(min-width:768px) and (max-width:1023px){
        font-size:15px;
    }
    @media(min-width:1440px) and (max-width:1460px){
        font-size:20px;
    }
`
export const LgTypography = styled(Typography)`
    color:#191919;
    font-family:Inter;
    font-weight:500;
    margin-top:10px;
    font-size:25px;
    line-height:33px;
    @media(min-width:390px) and (max-width:767px){
        font-size:16px;
        font-weight:600;
    }
    @media(min-width:768px) and (max-width:1023px){
        font-size:30px;
        font-weight:500;
    }
    @media(min-width:1024px) and (max-width:1199px){
        font-size:20px;
    }
    @media(min-width:1440px) and (max-width:1460px){
        font-size:35px;
        font-weight:500;
        line-height:40px;
    }
`
export const TypographyUl = styled("ul")`
    margin-left:20px;
    margin-top:10px;
    line-height:25px;
    padding-bottom:30px;
    border-bottom:1px solid #F0F0F0;
    @media(min-width:390px) and (max-width:767px){
        margin-left:7px;
    }
`
export const TypographyLi = styled("li")`
    font-family:Inter;
    font-weight:300;
    font-size:15px;
    @media(min-width:390px) and (max-width:767px){
        font-size:11px;
    }
    @media(min-width:768px) and (max-width:1023px){
        font-size:17px;
    }
`
export const DivCount = styled("div")`
    display:flex;
    margin-top:20px;
`
export const DivCount1 = styled("div")`
    display:flex;
    margin-top:20px;
    padding-bottom:20px;
    border-bottom:1px solid #F0F0F0;
`
export const CountTypo1 = styled(Typography)`
    font-family:Inter;
    font-weight:300;
    font-size:15px;
    border:1px solid #E73C17;
    color:#E73C17;
    padding:10px;
    padding-left:25px;
    height:45px;
    @media(min-width:390px) and (max-width:767px){
        padding-left:20px;
        padding:10px;
    }
    @media(min-width:1024px) and (max-width:1199px){
        padding-left:20px;
        padding:10px;
        margin-left:0px;
    }
`
export const CountTypo2 = styled(Typography)`
    font-family:Inter;
    font-weight:300;
    font-size:15px;
    color:#6F6F6F;
    padding:10px;
    padding-left:35px;
    margin-left:30px;
    @media(min-width:390px) and (max-width:767px){
        padding-left:20px;
        padding:10px;
        margin-left:25px;
    }
    @media(min-width:1024px) and (max-width:1199px){
        padding-left:20px;
        padding:10px;
        margin-left:25px;
    }
`
export const CountTypo3 = styled(Typography)`
    font-family:Inter;
    font-weight:300;
    font-size:15px;
    color:#6F6F6F;
    padding:10px;
    padding-left:35px;
    margin-left:30px;
    @media(min-width:390px) and (max-width:767px){
        padding-left:20px;
        padding:10px;
        margin-left:15px;
    }
    @media(min-width:1024px) and (max-width:1199px){
        padding-left:20px;
        padding:10px;
        margin-left:25px;
    }
`
export const CountTypo4 = styled(Typography)`
    font-family:Inter;
    font-weight:300;
    font-size:15px;
    color:#6F6F6F;
    padding-left:25px;
    @media(min-width:390px) and (max-width:767px){
        padding-left:20px;
        padding:10px;
    }
    @media(min-width:768px) and (max-width:1023px){
        padding-left:20px;
        padding:10px;
        position:absolute;
        margin-top:-65px;
        left:68%;
    }
    @media(min-width:1024px) and (max-width:1199px){
        padding-left:20px;
        padding:10px;
        margin-left:0px;
    }
`
export const CountTypo5 = styled(Typography)`
    font-family:Inter;
    font-weight:300;
    font-size:15px;
    color:#6F6F6F;
    padding-left:12px;
    margin-left:68px;
    @media(min-width:390px) and (max-width:767px){
        padding-left:20px;
        padding:10px;
        margin-left:25px;
    }
    @media(min-width:768px) and (max-width:1023px){
        margin-left:15px;
    }
    @media(min-width:1024px) and (max-width:1199px){
        padding-left:20px;
        padding:10px;
        margin-left:25px;
    }
`
export const CountTypo6 = styled(Typography)`
    font-family:Inter;
    font-weight:300;
    font-size:15px;
    color:#6F6F6F;
    padding-left:35px;
    margin-left:43px;
    @media(min-width:390px) and (max-width:767px){
        margin-left:15px;
        padding:10px;
    }
    @media(min-width:1024px) and (max-width:1199px){
        padding-left:20px;
        padding:10px;
        margin-left:25px;
    }
`
export const DivAmount = styled(Typography)`
    color:#191919;
    font-family:Inter;
    font-weight:400;
    font-size:15px;
    margin-top:5px;
`
export const AmtTypo = styled(Typography)`
    color:#191919;
    font-family:Inter;
    font-weight:400;
    font-size:20px;
    margin-top:5px;
`
export const ButtonDiv = styled("div")`
    padding:5px;
    @media(min-width:767px) and (max-width:1023px){
        margin-top:15px;
    }
`
export const ButtonDiv1 = styled("button")`
    padding:5px;
    width:50px;
    border:1px solid #F0F0F0;
    background:#fff;
    font-size:20px;
    @media(min-width:390px) and (max-width:767px){
       width:30px; 
    }
    @media(min-width:768px) and (max-width:1023px){
       width:50px;
       font-size:20px; 
    }
    @media(min-width:1024pxpx) and (max-width:1199px){
        width:30px;
    }
`
export const ButtonDiv2 = styled("button")`
    padding:5px;
    width:50px;
    border:1px solid #F0F0F0;
    background:#fff;
    font-size:20px;
    @media(min-width:390px) and (max-width:767px){ 
       width:30px;
    }
    @media(min-width:768px) and (max-width:1023px){
       width:50px;
       font-size:20px; 
    }
    @media(min-width:1024pxpx) and (max-width:1199px){
        width:30px;
    }
`
export const ButtonDiv3 = styled("button")`
    padding:5px;
    width:50px;
    border:1px solid #F0F0F0;
    background:#fff;
    font-size:20px;
    @media(min-width:390px) and (max-width:767px){
       width:30px; 
    }
    @media(min-width:768px) and (max-width:1023px){
       width:50px;
       font-size:20px; 
    }
    @media(min-width:1024pxpx) and (max-width:1199px){
        width:30px;
    }
`
export const ButtonDiv4 = styled("button")<{bgcolor: string; textcolor: string;}>`
    background: ${({ bgcolor }) => bgcolor || appColors["white"]};
    color: ${({ textcolor }) => textcolor || appColors["black"]};
    border:none;
    height:33px;
    width:150px;
    margin-left:30px;
    font-family:Inter;
    padding:5px;
    cursor:pointer;
    @media(min-width:390px) and (max-width:767px){
       margin-left:15px;
       width:100px;
    }
    @media(min-width:1024px) and (max-width:1199px){
       margin-left:10px;
       width:100px;
    }
`
export const ButtonDiv5 = styled("button")`
    background:#fff;
    color:#E73C17;
    border:1px solid #E73C17;
    height:33px;
    width:150px;
    margin-left:30px;
    font-family:Inter;
    padding:5px;
    cursor:pointer;
    @media(min-width:390px) and (max-width:767px){
       margin-left:15px;
       width:100px;
    }
    @media(min-width:1024px) and (max-width:1199px){
       margin-left:10px;
       width:100px;
    }
`
export const BoxDetails = styled(Box)`
    display:flex;
    text-align:center;
    justify-content:center;
    margin-top:80px;
    border-bottom:1px solid #F0F0F0;
    @media(min-width:390px) and (max-width:767px){
        border-bottom:2px solid #F0F0F0;
    }
`
export const Typography1 = styled(Tab)`
    color:#191919;
    font-family:Inter;
    font-weight:500;
    font-size:20px;
    text-decoration:none;
    padding-bottom:20px;
    // outline:2px solid #E73C17;
    cursor:pointer;
    @media(min-width:390px) and (max-width:767px){
        margin-left:0px;
        font-size:15px;
    }
`
export const Typography2 = styled(Tab)`
    color:#191919;
    font-family:Inter;
    font-weight:500;
    font-size:20px;
    text-decoration:none;
    margin-left:50px;
    // outline:2px solid #E73C17;
    cursor:pointer;
    @media(min-width:390px) and (max-width:767px){
        margin-left:10px;
        font-size:15px;
    }
`
export const Typography3 = styled(Tab)`
    color:#191919;
    font-family:Inter;
    font-weight:500;
    font-size:20px;
    text-decoration:none;
    margin-left:50px;
    outline:none;
    cursor:pointer;
    // outline:2px solid #E73C17;
    @media(min-width:390px) and (max-width:767px){
        margin-left:10px;
        font-size:15px;
    }
`
export const BoxDetails1 = styled(TabPanel)`
    margin-top:50px;
    margin-left:200px;
    margin-right:200px;
    @media(min-width:390px) and (max-width:767px){
        margin-left:15px;
        margin-right:0px;
    }
    @media(min-width:768px) and (max-width:1023px){
        margin-left:20px;
        margin-right:20px;
    }
`
export const DetailTypo = styled(Typography)`
    font-family:Inter;
    font-weight:300;
    font-size:15px;
    line-height:30px;
    @media(min-width:390px) and (max-width:767px){
        margin-left:10px;
        margin-right:10px;
        font-size:13px;
    }
`
export const DetailTypo1 = styled(Typography)`
    font-family:Inter;
    font-weight:300;
    font-size:15px;
    line-height:30px;
    @media(min-width:390px) and (max-width:767px){
        margin-left:10px;
        margin-right:10px;
        font-size:13px;
    }
    @media(min-width:1450px){
        line-height:40px
    }
`
export const DetailTypo2 = styled(Typography)`
    font-family:Inter;
    font-weight:300;
    font-size:15px;
    line-height:30px;
    @media(min-width:390px) and (max-width:767px){
        margin-left:10px;
        margin-right:10px;
        font-size:13px;
    }
    @media(min-width:1450px){
        line-height:40px
    }
`
export const DetailTypo3 = styled(Typography)`
    font-family:Inter;
    font-weight:300;
    font-size:15px;
    line-height:30px;
    @media(min-width:390px) and (max-width:767px){
        display:none;
    }
    @media(min-width:1450px){
        line-height:40px
    }
`
export const DetailTypo4 = styled(Typography)`
    font-family:Inter;
    font-weight:300;
    font-size:15px;
    line-height:30px;
    @media(min-width:390px) and (max-width:767px){
        display:none;
    }
    @media(min-width:1450px){
        line-height:40px
    }
`
export const BreadcrumbsStyle = styled(Breadcrumbs)`
     margin-left:510px;
     margin-top:15px;
     @media(min-width:390px) and (max-width:767px){
        margin-left:120px;
     }
     @media(min-width:768px) and (max-width:1023px){
        margin-left:285px;
     }
     @media(min-width:1024px) and (max-width:1199px){
        margin-left:400px;
     }
     @media(min-width:1439px){
        margin-left:600px;
     }
     @media(min-width:1450px) and (max-width:1550px){
        margin-left:620px;
    }
`
