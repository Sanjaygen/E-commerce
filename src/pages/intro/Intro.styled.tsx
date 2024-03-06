import { appColors } from "@/theme/color.Config";
import { Box, Button, Typography } from "@mui/material";
 import styled from "styled-components";

 export const MainDiv = styled("div")`
 background-color: rgba(30, 40, 50, 0.05);

  @media (min-width: 390px) and (max-width: 767px) {
  background-color: rgba(30, 40, 50, 0.05);
  height: 1100px;
  top: -280px;
  z-index:-1;
  position: relative;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    background-color: rgba(30, 40, 50, 0.05);
     top: -80px;
     position: relative;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
  background-color: rgba(30, 40, 50, 0.05);
  }
`;
 export const RightColumn = styled("div")`
  padding: 30px;
  left: 50px;
  position:relative;

  @media (min-width: 390px) and (max-width: 767px) {
    left: -30px;
    position:relative;
    top:400px;
    width: 500px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    left: -30px;
    position:relative;
    top:100px;
    width: 500px;
  }

  
  @media (min-width: 1024px) and (max-width: 1440px) {
    position:relative;
    top:20px;
    width: 500px;
    left:0px;
  }

`;

 export const LeftColumn = styled.div`
 position:relative;
   left: -34px;
   bottom: 60px;

   @media (min-width: 390px) and (max-width: 767px) {
    position:relative;
    left: -190px;
    top: 95px;
    height: 25px;
    width: 380px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    position:relative;
    left: -140px;
    top: 95px;
    height: 25px;
    width: 300px;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    position:relative;
    left: -100px;
  }
  
`;


export const ImageStyled = styled("img")`
    z-index: 1;
    width:100%;
    height:440px;
    border-radius:120px 0px 120px 0px;
    position:relative;
    bottom: 10px;
    right:10px;
    max-width: 340px;

    @media (min-width: 390px) and (max-width: 767px) {
      z-index: 1;
      width:100%;
      height:350px !important;
      border-radius:120px 0px 120px 0px;
      position:relative;
      bottom: 17px;
      left: -10px;
      width: 250px !important;
    }
  
    @media (min-width: 768px) and (max-width: 1023px) {
     
    }

    @media (min-width: 1024px) and (max-width: 1440px) {
      z-index: 1;
      width:100%;
      height:400px !important;
      border-radius:120px 0px 120px 0px;
      position:relative;
      bottom: 20px;
      left: -10px;
      width: 280px !important;
    }

`;

export const ImageBorder = styled(Box)`
  border: 2px solid rgba(0, 0, 0, 0.25);
  width:100%;
  max-width:342px;
  height:450px;
  border-radius:120px 0px 120px 0px;
  position:relative;
  bottom:140px;
  border: 2px solid rgba(0, 0, 0, 0.25);

  @media (min-width: 390px) and (max-width: 767px) {
    border: 2px solid rgba(0, 0, 0, 0.25);
    width: 255px !important;
    height:350px !important;
    border-radius:120px 0px 120px 0px;
    position:relative;
    top: 40px;
    left: -200px;
    border: 2px solid rgba(0, 0, 0, 0.25);
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    border: 2px solid rgba(0, 0, 0, 0.25);
    width: 255px !important;
    height:450px !important;
    border-radius:120px 0px 120px 0px;
    position:relative;
    border: 2px solid rgba(0, 0, 0, 0.25);
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    border: 2px solid rgba(0, 0, 0, 0.25);
    width: 290px !important;
    height:400px !important;
    border-radius:120px 0px 120px 0px;
    position:relative;
    border: 2px solid rgba(0, 0, 0, 0.25);
  }


`;
export const TypographyStyled = styled(Typography)`
  position: relative;
  font-weight: 200;
  font-size: 70px;
  font-family: 'Roboto', sans-serif;
  bottom: 25px;

  @media (min-width: 390px) and (max-width: 767px) {
  position: relative;
  font-weight: 300;
  font-size: 50px;
  font-family: sans-serif;
  bottom: 25px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    position: relative;
    font-weight: 300;
    font-size: 40px;
    font-family: sans-serif;
    bottom: 70px;
    }
  }

`;
export const TypographyContent = styled(Typography)`
  font-size: 20px;
  font-family: roboto;
  font-weight: 400;
  line-height: 38px;
  margin-left: 10px;
  line-height: 50px;
  position: relative;

  @media (min-width: 390px) and (max-width: 767px) {
      font-size: 15px;  
      font-family: roboto;
      display: flex;
      position: relative;
      line-height: 30px;
      flex-direction: row;
      left: 0px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 15px;  
    font-family: roboto;
    position: relative;
    line-height: 20px;
    flex-direction: row;
    left:-5px;
    bottom: 50px;
  }
`;



export const StyledButton = styled(Button)<{
  bgcolor: string;
  textcolor: string;
}>`
  margin-top: 40px;
  margin-left: 10px;
  background: ${({ bgcolor }) => bgcolor || appColors["white"]};
  color: ${({ textcolor }) => textcolor || appColors["black"]};
  line-height: 40px;
  gap: 10px;
  width: 170px;
  font-size: 18px;
  font-size: 1rem;

  &:hover {
    background-color: black;
  }

  @media (min-width: 390px) and (max-width: 767px) {
    margin-top: 40px;
  left: 5px;
  background: ${({ bgcolor }) => bgcolor || appColors["white"]};
  color: ${({ textcolor }) => textcolor || appColors["black"]};
  gap: 10px;
  width: 150px;
  position: relative;
  font-size: 1rem;

  &:hover {
    background-color: black;
  }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-top: 5px;
    left: 10px;
    background: ${({ bgcolor }) => bgcolor || appColors["white"]};
    color: ${({ textcolor }) => textcolor || appColors["black"]};
    gap: 10px;
    width: 150px;
    position: relative;
    font-size: 1rem;
  
    &:hover {
      background-color: black;
    }
  }
`;
export const FrameStyled = styled("div")`
  position: relative;
  top: 430px;

  @media (min-width: 390px) and (max-width: 767px) {
    position: relative;
     top: 550px;
    left: -10px

  }

  @media (min-width: 768px) and (max-width: 1023px) {
    position: relative;
     bottom: 350px;
    left: -10px
  }
`;

  export const FrameRightStyled = styled("div")`
    position: relative;
    bottom: 550px;
    float: right;

    @media (min-width: 390px) and (max-width: 767px) {
      position: relative;
      top: 30px;
      left: 60px;
    
    }

    @media (min-width: 768px) and (max-width: 1023px) {
      position: relative;
      bottom: 500px;
      left: 60px;
    }
  `;
