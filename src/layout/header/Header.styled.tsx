import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Link, Typography, styled } from "@mui/material";
export const BoxStyled = styled(Box)`
  background-color: rgba(30, 40, 50, 0.05);
  margin: 0 auto;
  width: 100%;
  @media (min-width: 390px) and (max-width: 767px) {
    background-color: transparent;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    background-color: transparent;
     position: relative;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
  // background-color: rgba(30, 40, 50, 0.05);
  }

`;
export const AppBarStyled = styled(Box)`
  height: 90px;
  margin: 0 auto;
  width:72%;
`;
export const HeadLineStyled = styled("div")`
  display: flex;
  @media (min-width: 390px) and (max-width: 767px) {
    font-size: 17px;
    position: relative;
    bottom: 10px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 16px;
    position: relative;
    right: 190px;
  }
  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 16px;
    position: relative;
    left: -100px;
  }
`;
export const FirstTypography = styled(Typography)`
  font-size: 35px;
  position: relative;
  left: 350px;
  @media (min-width: 390px) and (max-width: 767px) {
    font-size: 16px;
    position: relative;
    top: 10px;
    left: 60px;
    font-weight: 100;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 27px;
    position: relative;
    left: 280px;
  }
  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 28px;
    position: relative;
    left: 300px;
  }
`;
export const IconBtn = styled(Box)`
  margin-left: 400px;
  font-size: 28px;
  @media (min-width: 320px) {
    display: none;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    display: block;
    position: relative;
    left: 50px;
  }
  @media (min-width: 1240px) {
    display: block;
  }
`;
export const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
  display: none;
  @media (min-width: 390px) and (max-width: 767px) {
    position: relative;
    left: 170px;
    display: block;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    display: none;
  }
`;
export const LinkStyled = styled(Link)`
  color: black;
  text-decoration: none !important;
  cursor: pointer;
  @media (min-width: 390px) and (max-width: 767px) {
    position: relative;
    left: 20px;
    display: block;
    cursor: pointer;
    padding-top: 20px;
  }
`;
export const LinkContainer: any = styled("div")<{ isClick?: boolean }>`
font-family: 'Open Sans', sans-serif;
  .icon-acc {
    display: none;
  }
  .icon-acc1 {
    display: none;
  }
  display: flex;
  justify-content: center; 
  align-items: center; 
  margin: 0 auto; 

  @media (min-width: 390px) and (max-width: 767px) {
    background-color: white;
    flex-direction: column;
    padding-top: 10px;
    position: absolute;
    margin-top:30px;
    left: 45px;
    z-index:999;
    top: 30px;
    width:300px;
    display: ${(props) => (props.isClick ? "flex" : "none")};
    .icon-acc {
      position: relative;
      left: 20px;
      padding-top: 20px;
      display: block;
    }
    .icon-acc1 {
      position: relative;
      left: 20px;
      padding-top: 10px;
      display: block;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    color: black;
    justify-content: space-between;
    font-family: Open Sans;
    display: flex;
    flex-wrap: wrap;
    font-size: 16px;
    justify-content: space-between;
    a {
      margin-bottom: 10px;
    }
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 16px;
    color: black;
    justify-content: space-between;
    font-family: Open Sans;
    display: flex;
    margin-right: 2px;
    gap: 10px;
    flex-wrap: wrap;
    font-size: 16px;
    justify-content: space-between;
    a {
      margin-bottom: 11px;
    }
  }
 
`;