/* eslint-disable @next/next/no-img-element */
import {
  Box,
  Button,
  CardContent,
  Link,
  Typography,
} from "@mui/material";
import { BoxContainer, BoxStyled, CustomCard, DetailDiv, HotTypography, ImgDiv, ProductContent, RowDiv, SaleTypography, StyledButton, StyledLink, StyledLink1, StyledTypography, TopTypography, TypographyIcon, TypographySale } from "./Seller.styled";
import { useQuery } from "@apollo/client";
import { QUERY } from "../homepage/query";
import { api } from "@/service/backend-api";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBagShopping, faHeart, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Seller = () => {
  const { data } = useQuery(QUERY);
  const { homes } = data || {};
  const { silderProduct } = homes?.data?.[0]?.attributes || {};
  console.log('silderProduct', silderProduct);

  const sellerButton = silderProduct?.[0]?.filterbutton?.[0]?.color?.navbutton?.[0]?.background;
  const sellerText = silderProduct?.[0]?.filterbutton?.[0]?.color?.navbutton?.[0]?.text;
  const hoverBg = silderProduct?.[0]?.cards?.[0]?.colors?.color?.[0]?.background;
  const hoverText = silderProduct?.[0]?.cards?.[0]?.colors?.color?.[1]?.hover?.text;
  return (
    <BoxContainer>
      <TopTypography
        variant="h4"
      >
        {silderProduct?.[0]?.title}
      </TopTypography>
      <BoxStyled sx={{ position: "relative" }}>
        <Box sx={{ marginLeft: "20px", marginTop: "25px" }}>
          <StyledLink  href={"#"}>
            <b>{silderProduct?.[0]?.navbar?.[0]?.title}</b>
          </StyledLink>
          <StyledLink1 href={"#"}>
            {silderProduct?.[0]?.navbar?.[1]?.title}
          </StyledLink1>
          <StyledLink1 href={"#"}>
            {silderProduct?.[0]?.navbar?.[2]?.title}
          </StyledLink1>
          <StyledLink1 href={"#"}>
            {silderProduct?.[0]?.navbar?.[3]?.title}
          </StyledLink1>
          <StyledButton variant="contained" bgcolor={sellerButton} textcolor={sellerText} >
            {silderProduct?.[0]?.filterbutton?.[0]?.title}
          </StyledButton>
        </Box>

        <RowDiv>
          <ImgDiv>
            <CustomCard>
              <CardContent>
                <Link href="/Greentop">
                <img
                  src={api+silderProduct?.[0]?.cards?.[0]?.cardimages?.data?.[0]?.attributes?.url}
                  alt="Brand 5"
                  style={{ width: "95%", marginBottom: "10px" }}
                />
                </Link>
                <DetailDiv bgcolor={hoverBg}>
                    <FontAwesomeIcon icon={faHeart} />
                    <div style={{position:"relative",left:"20px"}}> 
                    <FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                    <TypographyIcon href="#" textcolor={hoverText}><FontAwesomeIcon icon={faBagShopping} /> {silderProduct?.[0]?.cards?.[0]?.link}</TypographyIcon>
                </DetailDiv>
                <HotTypography> HOT</HotTypography>
                <StyledTypography variant="h6">
                  {silderProduct?.[0]?.cards?.[0]?.title}
                </StyledTypography>
                <ProductContent>
                  <Typography variant="body2" style={{ color: 'rgba(0, 0, 0, 0.5)' }}>{silderProduct?.[0]?.cards?.[0]?.content}</Typography>
                  <Typography variant="body2" sx={{ marginRight: "20px" }}style={{ fontWeight: 'bold' }}>
                  {silderProduct?.[0]?.cards?.[0]?.prize}
                  </Typography>
                </ProductContent>
              </CardContent>
            </CustomCard>

            <CustomCard>
              <CardContent>
                <Link href="/Bags">
                <img
                  src={api+silderProduct?.[0]?.cards?.[1]?.cardimages?.data?.[0]?.attributes?.url}
                  alt="Brand 2"
                  style={{
                    width: "95%",
                    marginBottom: "10px",
                    position: "relative"    
                  }}
                />
                </Link>
                <DetailDiv bgcolor={hoverBg}>
                    <FontAwesomeIcon icon={faHeart} />
                    <div style={{position:"relative",left:"20px"}}> 
                    <FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                    <TypographyIcon href="#" textcolor={hoverText}><FontAwesomeIcon icon={faBagShopping} /> {silderProduct?.[0]?.cards?.[0]?.link}</TypographyIcon>
                </DetailDiv>
                <StyledTypography variant="h6">
                {silderProduct?.[0]?.cards?.[1]?.title}
                </StyledTypography>
                <ProductContent>
                  <Typography variant="body2"style={{ color: 'rgba(0, 0, 0, 0.5)' }}>{silderProduct?.[0]?.cards?.[1]?.content}</Typography>
                  <Typography variant="body2" sx={{ marginRight: "30px" }}style={{ fontWeight: 'bold' }}>
                  {silderProduct?.[0]?.cards?.[1]?.prize}
                  </Typography>
                </ProductContent>
              </CardContent>
            </CustomCard>

            <CustomCard>
              <CardContent>
                <Link href="/Dress">
                <img
                  src={api+silderProduct?.[0]?.cards?.[2]?.cardimages?.data?.[0]?.attributes?.url}
                  alt="Brand 4"
                  style={{
                    width: "95%",
                    marginBottom: "10px",
                    position: "relative"
                  }}
                />
                </Link>
                <DetailDiv bgcolor={hoverBg}>
                    <FontAwesomeIcon icon={faHeart} />
                    <div style={{position:"relative",left:"20px"}}> 
                    <FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                    <TypographyIcon href="#" textcolor={hoverText}><FontAwesomeIcon icon={faBagShopping} /> {silderProduct?.[0]?.cards?.[0]?.link}</TypographyIcon>
                </DetailDiv>
                <SaleTypography> SALE </SaleTypography>
                <StyledTypography variant="h6">
                {silderProduct?.[0]?.cards?.[2]?.title}
                </StyledTypography>
                <ProductContent>
                  <Typography variant="body2"style={{ color: 'rgba(0, 0, 0, 0.5)' }}>{silderProduct?.[0]?.cards?.[2]?.content}</Typography>
                  <Typography variant="body2" sx={{ marginRight: "55px" }}style={{ fontWeight: 'bold' }}>
                  {silderProduct?.[0]?.cards?.[2]?.prize}
                  </Typography>
                </ProductContent>
              </CardContent>
            </CustomCard>

            <CustomCard>
              <CardContent>
                <Link href="/Shoe">
                <img
                  src={api+silderProduct?.[0]?.cards?.[3]?.cardimages?.data?.[0]?.attributes?.url}
                  alt="Brand 6"
                  style={{ width: "95%",marginBottom: "10px", position: "relative"}}
                />
                </Link>
                <DetailDiv bgcolor={hoverBg}>
                    <FontAwesomeIcon icon={faHeart} />
                    <div style={{position:"relative",left:"20px"}}> 
                    <FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                    <TypographyIcon href="#" textcolor={hoverText}><FontAwesomeIcon icon={faBagShopping} /> {silderProduct?.[0]?.cards?.[0]?.link}</TypographyIcon>
                </DetailDiv>
                <TypographySale> SALE</TypographySale>
                <div
                  style={{ position: "relative"}}
                >
                  <StyledTypography variant="h6">
                  {silderProduct?.[0]?.cards?.[3]?.title}
                  </StyledTypography>
                  <ProductContent>
                    <Typography variant="body2"style={{ color: 'rgba(0, 0, 0, 0.5)' }}> {silderProduct?.[0]?.cards?.[3]?.content}</Typography>
                    <Typography variant="body2" sx={{ marginRight: "30px" }}style={{ fontWeight: 'bold' }}>
                    {silderProduct?.[0]?.cards?.[3]?.prize}
                    </Typography>
                  </ProductContent>
                </div>
              </CardContent>
            </CustomCard>
          </ImgDiv>
        </RowDiv>
      </BoxStyled>
    </BoxContainer>
  );
};

export default Seller;
