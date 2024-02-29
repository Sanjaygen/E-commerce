
import { appColors } from "@/theme/color.Config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, Typography,  } from "@mui/material";
import { styled } from "@mui/system";

export const ToppDiv = styled('div')`

 @media (min-width: 390px) and (max-width: 767px) {
  top: -390px;
  position: relative;
}

@media (min-width: 768px) and (max-width: 1023px) {

}

@media (min-width: 1024px) and (max-width: 1440px) {
 
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

@media (min-width: 390px) and (max-width: 767px) {
  left: -50px;
  position: relative;

}

@media (min-width: 768px) and (max-width: 1023px) {
  display: flex;
  position: relative;
  left: 400px;
  bottom: 350px; 
  width: 100%
  font-size: 25px;
}

@media (min-width: 1024px) and (max-width: 1440px) {
  display: flex;
  position: relative;
  right: 50px;
  top: 30px;
  width: 100%
  font-size: 25px;
}
  
`;
export const BottomContainer = styled(Box)<{ bgColor: string , textColor:string}>`
border: 1px solid black;
background: ${({bgColor}) => bgColor || appColors['white']};
color: ${({textColor}) => textColor || appColors['black']};
display: flex;
height: 52px;
position: relative;
top: 160px;


@media (min-width: 390px) and (max-width: 767px) {
  border: 1px solid black;
  background: ${({bgColor}) => bgColor || appColors['white']};
  color: ${({textColor}) => textColor || appColors['black']};
  display: flex;
  height: 52px;


}

@media (min-width: 768px) and (max-width: 1023px) {
  border: 1px solid black;
  background: ${({bgColor}) => bgColor || appColors['white']};
  color: ${({textColor}) => textColor || appColors['black']};
  display: flex;
  height: 52px;
  position: relative;
 
}

@media (min-width: 1024px) and (max-width: 1440px) {
  border: 1px solid black;
  background: ${({bgColor}) => bgColor || appColors['white']};
  color: ${({textColor}) => textColor || appColors['black']};
  display: flex;
  height: 52px;
  position: relative;
 
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
margin-left: 280px;

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
@media (min-width: 1024px) and (max-width: 1440px) {
  margin-top: 10px;
  margin-left: 120px;
}
`;

export const StyledButton = styled(Button)`
 margin-left: 300px;
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
  
@media (min-width: 1024px) and (max-width: 1440px) {
  margin-left: 200px;
  color: white;
  font-size: 13px;
}
`;
export const StyledIcon = styled(FontAwesomeIcon)`
margin-left: 20px;
font-size: 28px;
border: 1px solid #fff;
border-radius: 50%;
padding: 5px;
`;