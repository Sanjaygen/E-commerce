import { Box, Button, TextField, Typography } from "@mui/material";
import styled from "styled-components";


export const TopDiv = styled('div')`
  background-color: rgba(30, 40, 50, 0.05);
    position: relative;
    top: 60px;
    height: 640px;
    @media (min-width: 390px) and (max-width: 767px) {
    background-color: rgba(30, 40, 50, 0.05);
    position: relative;
    top: -270px;
    height: 1900px;
    
    }
  
    @media (min-width: 768px) and (max-width: 1023px) {
      background-color: rgba(30, 40, 50, 0.05);
      position: relative;
      top: 60px;
      height: 1300px;
  
    }

    @media (min-width: 1024px) and (max-width: 1440 px) {
      background-color: rgba(30, 40, 50, 0.05);
      position: relative;
      top: 60px;
  
    }
`;
export const StyledBox = styled(Box)`
position: relative;
top: 60px
`;

export const TopTypography = styled(Typography)`
text-align: center;
font-weight: 600;
font-size: 45px;
@media (min-width: 390px) and (max-width: 767px) {
    text-align: center;
    position: relative;
    left: 0px;
    font-weight: 600;
    font-size: 15px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    text-align: center;
    position: relative;
    left: 0px;
    font-weight: 300;
    font-size: 33px;

  }
`;
export const ImgDiv = styled("div")`
  visibility:hidden;
  position:absolute;
  font-size:30px;
  color:#fff;
  background-color:black;
  opacity:0.5;
  width:150px;
  height:150px;
  padding-top:60px;
  padding-left:60px;
  left:156.5px;
  margin-top:-155px;
  @media (min-width: 390px) and (max-width: 767px){
     font-size:50px;
     height:250px;
     width:250px;
     top:155px;
     left:5px;
     padding-left:0;
     padding-top:90px;
     text-align:center;
  }
  @media (min-width: 768px) and (max-width: 1023px){
     height:300px;
     font-size:50px;
     width:300px;
     top:235px;
     left:55px;
     padding-left:0;
     padding-top:130px;
     text-align:center;
  }
  @media (min-width: 1024px) and (max-width:1199px){
     left:36px;
     font-size:40px;
  }
  @media(min-width:1440px){
     left:243px;
     font-size:40px;
  }
  @media(min-width:1449px){
      left:100px;
      top:280px;
      font-size:50px;
      height:200px;
      width:200px;
      padding-left:0;
      padding-top:80px;
      text-align:center;
  }
`
export const ImgDiv1 = styled("div")`
  visibility:hidden;
  position:absolute;
  font-size:30px;
  color:#fff;
  background-color:black;
  opacity:0.5;
  width:150px;
  height:150px;
  padding-top:60px;
  padding-left:60px;
  left:316.5px;
  margin-top:-155px; 
  @media (min-width: 390px) and (max-width: 767px){
    font-size:50px;
    height:250px;
    width:250px;
    top:425px;
    left:5px;
    padding-left:0;
    padding-top:90px;
    text-align:center;
 }
 @media (min-width: 768px) and (max-width: 1023px){
    height:300px;
    width:300px;
    font-size:50px;
    top:235px;
    left:422px;
    padding-left:0;
    padding-top:130px;
    text-align:center;
 }
 @media (min-width: 1024px) and (max-width:1199px){
    left:195px;
    font-size:40px;
 }
 @media(min-width:1440px){
    left:400px;
    font-size:40px;
 }
 @media(min-width:1449px){
     left:310px;
     top:280px;
     font-size:50px;
     height:200px;
     width:200px;
     padding-left:0;
     padding-top:80px;
     text-align:center;
 } 
`
export const ImgDiv2 = styled("div")`
  visibility:hidden;
  position:absolute;
  font-size:30px;
  color:#fff;
  background-color:black;
  opacity:0.5;
  width:150px;
  height:150px;
  padding-top:60px;
  padding-left:60px;
  left:476.5px;
  margin-top:-155px;
  @media (min-width: 390px) and (max-width: 767px){
    font-size:50px;
    height:250px;
    width:250px;
    top:694px;
    left:5px;
    padding-left:0;
    padding-top:90px;
    text-align:center;
 }
 @media (min-width: 768px) and (max-width: 1023px){
  height:300px;
  width:300px;
  font-size:50px;
  top:560px;
  left:55px;
  padding-left:0;
  padding-top:130px;
  text-align:center;
}
@media (min-width: 1024px) and (max-width:1199px){
  left:357px;
  font-size:40px;
}
@media(min-width:1440px){
  left:565px;
  font-size:40px;
}
@media(min-width:1449px){
  left:520px;
  top:280px;
  font-size:50px;
  height:200px;
  width:200px;
  padding-left:0;
  padding-top:80px;
  text-align:center;
}
`
export const ImgDiv3 = styled("div")`
  visibility:hidden;
  position:absolute;
  font-size:30px;
  color:#fff;
  background-color:black;
  opacity:0.5;
  width:150px;
  height:150px;
  padding-top:60px;
  padding-left:60px;
  left:636.5px;
  margin-top:-155px;
  @media (min-width: 390px) and (max-width: 767px){
    font-size:50px;
    height:250px;
    width:250px;
    top:963px;
    left:5px;
    padding-left:0;
    padding-top:90px;
    text-align:center;
 }
 @media (min-width: 768px) and (max-width: 1023px){
  height:300px;
  width:300px;
  font-size:50px;
  top:560px;
  left:422px;
  padding-left:0;
  padding-top:130px;
  text-align:center;
}
@media (min-width: 1024px) and (max-width:1199px){
  left:518px;
  font-size:40px;
}
@media(min-width:1440px){
  left:725px;
  font-size:40px;
}
@media(min-width:1449px){
  left:730px;
  top:280px;
  font-size:50px;
  height:200px;
  width:200px;
  padding-left:0;
  padding-top:80px;
  text-align:center;
}
`
export const ImgDiv4 = styled("div")`
  visibility:hidden;
  position:absolute;
  font-size:30px;
  color:#fff;
  background-color:black;
  opacity:0.5;
  width:150px;
  height:150px;
  padding-top:60px;
  padding-left:60px;
  left:796.5px;
  margin-top:-155px;
  @media (min-width: 390px) and (max-width: 767px){
    font-size:50px;
    height:250px;
    width:250px;
    top:1230px;
    left:5px;
    padding-left:0;
    padding-top:90px;
    text-align:center;
 }
 @media (min-width: 768px) and (max-width: 1023px){
  height:300px;
  width:300px;
  font-size:50px;
  top:885px;
  left:55px;
  padding-left:0;
  padding-top:130px;
  text-align:center;
}
@media (min-width: 1024px) and (max-width:1199px){
  left:675px;
  font-size:40px;
}
@media(min-width:1440px){
  left:885px;
  font-size:40px;
}
@media(min-width:1449px){
  left:940px;
  top:280px;
  font-size:50px;
  height:200px;
  width:200px;
  padding-left:0;
  padding-top:80px;
  text-align:center;
}
`
export const ImgDiv5 = styled("div")`
  visibility:hidden;
  position:absolute;
  font-size:30px;
  color:#fff;
  background-color:black;
  opacity:0.5;
  width:150px;
  height:150px;
  padding-top:60px;
  padding-left:60px;
  left:957.5px;
  margin-top:-155px;
  @media (min-width: 390px) and (max-width: 767px){
    height:250px;
    font-size:50px;
    width:250px;
    top:1500px;
    left:5px;
    padding-left:0;
    padding-top:90px;
    text-align:center;
 }
 @media (min-width: 768px) and (max-width: 1023px){
  height:300px;
  width:300px;
  font-size:50px;
  top:885px;
  left:422px;
  padding-left:0;
  padding-top:130px;
  text-align:center;
}
@media (min-width: 1024px) and (max-width:1199px){
  left:839px;
  font-size:40px;
}
@media(min-width:1440px){
  left:1047px;
  font-size:40px;
}
@media(min-width:1449px){
  left:1150px;
  top:280px;
  font-size:50px;
  height:200px;
  width:200px;
  padding-left:0;
  padding-top:80px;
  text-align:center;
}
`
export const ImgBox = styled(Box)`
   &:hover{
     ${ImgDiv}{
      visibility:visible;
     }
     ${ImgDiv1}{
      visibility:visible;
     }
     ${ImgDiv2}{
      visibility:visible;
     }
     ${ImgDiv3}{
      visibility:visible;
     }
     ${ImgDiv4}{
      visibility:visible;
     }
     ${ImgDiv5}{
      visibility:visible;
     }
   }
`
export const MainDiv = styled('div')`
display: flex;
justify-content: center;
margin-top: 70px;
cursor:pointer;

@media (min-width: 390px) and (max-width: 767px) {
    flex-direction: column;
    margin-left: 70px;
    margin-top: 40px;
    position: relative;
    gap: 15px;

    img{
        height: 250px !important;
        width:  250px !important;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    display: grid;
    margin-left: 50px;
    margin-top: 40px;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px; 
    
    img{
        height: 300px !important;
        width:  300px !important;
    }
  }
  @media (min-width: 1024px) and (max-width: 1440px) {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    
    img{
        height: 150px !important;
        width:  auto !important;
    }
  }
  
`;
export const StyledButton = styled(Button)`
border-top: none;
border-left: none;
border-right: none;
border-color: black;
border-radius: none;
color: black;
margin-top: 34px;
margin-left: 50px;
&:hover{
   color:#FF6F61;
}

@media (min-width: 390px) and (max-width: 767px) {
    border-top: none;
    border-left: none;
    border-right: none;
    border-color: black;
    border-radius: none;
    color: black;
    margin-top: 34px;
    margin-left: 50px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    border-top: none;
    border-left: none;
    border-right: none;
    border-color: black;
    border-radius: none;
    color: black;
    margin-top: 34px;
    margin-left: 50px;

  }
`;

export const StyledText = styled(TextField)`
width: 473px;
height: 32px;
margin-top: 22px;
margin-left: 480px;

@media (min-width: 390px) and (max-width: 767px) {
    width: 180px;
    height: 32px;
    margin-top: 22px;
    margin-left: 40px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 473px;
    height: 32px;
    margin-top: 22px;
    margin-left: 80px;

  }

  @media (min-width: 1024px) and (max-width: 1199px) {
    width: 400px;
    height: 32px;
    margin-top: 22px;
    margin-left: 240px;
  }
  @media (min-width: 1200px) and (max-width: 1439px){
    margin-left: 320px;
  }
  @media(min-width:1440px){
    margin-left:420px;
  }
  @media(min-width:1450px){
    margin-left:480px;
  }
`;

export const ContentTypography = styled(Typography)`
text-align: center;
 margin-top: 50px;
 font-weight: 600;
font-size: 38px;

 @media (min-width: 390px) and (max-width: 767px) {
    text-align: center;
    position: relative;
    left: 0px;
    font-weight: 600;
    font-size: 20px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    text-align: center;
    position: relative;
    left: 0px;
    font-weight: 600;
    font-size: 40px;

  }
`;