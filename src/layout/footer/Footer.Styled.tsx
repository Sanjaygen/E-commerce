
import { appColors } from "@/theme/color.Config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, Typography,  } from "@mui/material";
import { styled } from "@mui/system";

export const ToppDiv = styled('div')`
   height:98vh;
 @media (min-width: 390px) and (max-width: 767px) {
  top: -390px;
  position: relative;
  height:0;
}

@media (min-width: 768px) and (max-width: 1023px) {
   height:0; 
}

@media (min-width: 1024px) and (max-width: 1200px) {
    height:0;
}
@media (min-width:1440px){
   height:0;
}
@media (min-width:1450px){
   height:98vh;
}
`;

export const StyledBox = styled(Box)`
 display: flex;
 position: relative;
 top: 150px;
 @media (min-width: 390px) and (max-width: 767px) {
  flex-direction: column;
  left: -100px;
  position: relative;

}

@media (min-width: 768px) and (max-width: 1023px) {
  display: flex;
  position: relative;
  left: -80px;
  top: 180px;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px; 
    height: 600px;
}

@media (min-width: 1024px) and (max-width: 1440px) {
  display: flex;
  position: relative;
  top: 80px;
}
`;
export const DivWrapper = styled("div")`
  cursor: pointer;

  @media (min-width: 1024px) and (max-width: 1440px) {
    cursor: pointer;
    display: flex;
    gap: 5px;
  }
`;

export const CatTypography = styled(Typography)`
line-height: 30px;
@media (min-width: 390px) and (max-width: 767px) {
  left: -50px;
  position: relative;

}

@media (min-width: 768px) and (max-width: 1023px) {
  display: flex;
  position: relative;
  left: 400px;
  bottom: 230px; 
  width: 100%
  font-size: 25px;
}

@media (min-width: 1024px) and (max-width: 1440px) {
  display: flex;
  position: relative;
  left: 120px;
  top: 10px;
  width: 100%
  font-size: 25px;
  
}
  
`;
export const CatTypography1 = styled(Typography)`
line-height: 30px;
font-size:13px;
color:rgba(30, 40, 50, 1);
cursor:pointer;
&:hover{
   color:#FF6F61;
}
@media (min-width: 390px) and (max-width: 767px) {
  left: -50px;
  position: relative;

}

@media (min-width: 768px) and (max-width: 1023px) {
  display: flex;
  position: relative;
  left: 400px;
  bottom: 230px; 
  width: 100%
  font-size: 25px;
  
}

@media (min-width: 1024px) and (max-width: 1440px) {
  display: flex;
  position: relative;
  left: 120px;
  top: 10px;
  width: 100%
  font-size: 25px;
  
}
  
`;

export const AbTypography = styled(Typography)`
line-height: 30px;

@media (min-width: 390px) and (max-width: 767px) {
  left: -180px;
  position: relative;

}

@media (min-width: 768px) and (max-width: 1023px) {
  position: relative;
  left: -180px;
  width: 100%;
  bottom: 150px;
}
  

@media (min-width: 1024px) and (max-width: 1440px) {
  position: relative;
  left: 50px;
  width: 100%;
  top: 8px;
}
`;
export const AbTypography1 = styled(Typography)`
line-height: 30px;
font-size:13px;
color:rgba(30, 40, 50, 1);
cursor:pointer;
&:hover{
  color:#FF6F61;
}

@media (min-width: 390px) and (max-width: 767px) {
  left: -180px;
  position: relative;

}

@media (min-width: 768px) and (max-width: 1023px) {
  position: relative;
  left: -180px;
  width: 100%;
  bottom: 150px;
}
  

@media (min-width: 1024px) and (max-width: 1440px) {
  position: relative;
  left: 50px;
  width: 100%;
  top: 8px;
}
`;

export const CusTypography = styled(Typography)`
line-height: 28px;
@media (min-width: 390px) and (max-width: 767px) {
  left: -50px;
  position: relative;

}

@media (min-width: 768px) and (max-width: 1023px) {
  display: flex;
  position: absolute;
  left: 550px;
  bottom: 350px; 
  width: 100%
  font-size: 25px;
}

@media (min-width: 1024px) and (max-width: 1199px) {
  display: flex;
  position: relative;
  right: 50px;
  top: 50px;
  width: 100%
  font-size: 25px;
}
@media(min-width:1200px){
    display: flex;
    position: relative;
    right: 50px;
    top: 32px;
    width: 100%
    font-size: 25px;
}
  
`;
export const CusTypography1 = styled(Typography)`
line-height: 28px;
font-size:13px;
color:rgba(30, 40, 50, 1);
cursor:pointer;
&:hover{
  color:#FF6F61;
}
@media (min-width: 390px) and (max-width: 767px) {
  left: -50px;
  position: relative;
  margin-top:10px;

}

@media (min-width: 768px) and (max-width: 1023px) {
  display: flex;
  position: absolute;
  left: 550px;
  bottom: 350px; 
  width: 100%
  font-size: 25px;
}

@media (min-width: 1024px) and (max-width: 1199px) {
  display: flex;
  position: relative;
  right: 50px;
  top: 50px;
  width: 100%
  font-size: 25px;
}
@media(min-width:1200px){
  display: flex;
  position: relative;
  right: 50px;
  top: 32px;
  width: 100%
  font-size: 25px;
}
  
`;
export const BottomContainer = styled(Box)<{ bgcolor: string , textcolor:string}>`
border: 1px solid black;
background: ${({bgcolor}) => bgcolor || appColors['white']};
color: ${({textcolor}) => textcolor || appColors['black']};
display: flex;
height: 52px;
position: relative;
top: 160px;


@media (min-width: 390px) and (max-width: 767px) {
  border: 1px solid black;
  background: ${({bgcolor}) => bgcolor || appColors['white']};
  color: ${({textcolor}) => textcolor || appColors['black']};
  display: flex;
  height: 52px;
  margin-top:30px;

}

@media (min-width: 768px) and (max-width: 1023px) {
  border: 1px solid black;
  background: ${({bgcolor}) => bgcolor || appColors['white']};
  color: ${({textcolor}) => textcolor || appColors['black']};
  display: flex;
  height: 52px;
  position: relative;
  top: 250px;
}

@media (min-width: 1024px) and (max-width: 1440px) {
  border: 1px solid black;
  background: ${({bgcolor}) => bgcolor || appColors['white']};
  color: ${({textcolor}) => textcolor || appColors['black']};
  display: flex;
  height: 52px;
  position: relative;
  top:185px;
}
@media(min-width:1445px){
   top: 290px;
}

`;

export const TopicDiv = styled('div')`
margin-top: 16px;
margin-left: 150px;

@media (min-width: 390px) and (max-width: 767px) {
  margin-top: 12px;
 margin-left: 5px;  
 font-size: 13px;

}

@media (min-width: 768px) and (max-width: 1023px) {
  margin-top: 12px;
  margin-left: 50px;  
  font-size: 13px;
}

@media (min-width: 1024px) and (max-width: 1440px) {
  margin-top: 12px;
  margin-left: 130px;  
  font-size: 13px;
}
  
`;

export const LogDiv = styled('div')`
margin-top: 14px;
margin-left: 290px;

@media (min-width: 390px) and (max-width: 767px) {
  margin-top: 10px;
  margin-left: 3px;

   img{
    height: 20px !important;
    width: 200px  !important;
   }
}

@media (min-width: 768px) and (max-width: 1023px) {
  margin-top: 10px;
  margin-left: 100px;
}
@media (min-width: 1024px) and (max-width: 1199px) {
  margin-top: 10px;
  margin-left: 120px;
}
@media(min-width:1200px) and (max-width:1439px){
   margin-left:250px;
}
@media(min-width:1440px) {
   margin-left:400px;
}
@media(min-width:1450px){
    margin-left:290px;
}
`;

export const StyledButton = styled(Button)`
 margin-left: 390px;
 color: white;

@media (min-width: 390px) and (max-width: 767px) {
  margin-left: 0px;
  color: white;
  font-size: 13px;
}

@media (min-width: 768px) and (max-width: 1023px) {
  margin-left: 100px;
  color: white;
  font-size: 13px;
}
  
@media (min-width: 1024px) and (max-width: 1199px) {
  margin-left: 200px;
  color: white;
  font-size: 13px;
}
@media(min-width:1200px){
   margin-left:340px;
}
@media (min-width:1440px){
   margin-left:400px;
}
`;
export const StyledIcon = styled(FontAwesomeIcon)`
margin-left: 20px;
font-size: 20px;
border: 1px solid #fff;
border-radius: 50%;
padding: 5px;
`;