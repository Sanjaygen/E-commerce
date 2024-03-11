/* eslint-disable @next/next/no-img-element */
import {
  Box,
  CardContent,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faFilter, faHeart, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { BoxContainer, BoxStyled, CommonDiv, CustomCard, DetailDiv, FirstDiv, HotTypography, ProductContent, SaleTypography, SecDiv, StyledButton, StyledLink, StyledLink1, StyledTypography, TopTypography, TypographyIcon, TypographySale } from "./Product.styled";
import { useQuery } from "@apollo/client";
import { QUERY } from "../homepage/query";
import { api } from "@/service/backend-api";

const Products = () => {
  const { data } = useQuery(QUERY);
  const { homes } = data || {};
  const { productitems } = homes?.data?.[0]?.attributes || {};
  console.log('data', data);

  const filterButton = productitems?.[0]?.filterbutton?.[0]?.color?.filter?.[0]?.color?.background;
  const filterText = productitems?.[0]?.filterbutton?.[0]?.color?.filter?.[0]?.color?.text;
  return (
    <BoxContainer>
      <TopTypography variant="h4"> {productitems?.[0]?.title}</TopTypography>
      <Box sx={{ position: 'relative' }}>
        <BoxStyled>
          <StyledLink
            href={"#"}>
            <b>{productitems?.[0]?.navbar?.[0]?.title}</b>
          </StyledLink>
          <StyledLink1 href={"#"}>
            {productitems?.[0]?.navbar?.[1]?.title}
          </StyledLink1>
          <StyledLink1 href={"#"}>
            {productitems?.[0]?.navbar?.[2]?.title}
          </StyledLink1>
          <StyledLink1 href={"#"}>
            {productitems?.[0]?.navbar?.[3]?.title}
          </StyledLink1>
          <StyledButton variant="contained" bgColor={filterButton} textColor={filterText}>
            <FontAwesomeIcon icon={faFilter} scale={"1.25x"} />
            {productitems?.[0]?.filterbutton?.[0]?.title}
          </StyledButton>
        </BoxStyled>
        <CommonDiv>
          <FirstDiv>
            <CustomCard>
              <CardContent>
                <img
                  src={api + productitems?.[0]?.cards?.[0]?.cardimages?.data?.[0]?.attributes?.url}
                  alt="Brand 1"
                  style={{ width: "95%", marginBottom: "10px" }}
                />
                <DetailDiv>
                    <FontAwesomeIcon icon={faHeart} />
                    <div style={{position:"relative",left:"20px"}}> 
                    <FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                    <TypographyIcon href="#"><FontAwesomeIcon icon={faBagShopping} /> Shop Now</TypographyIcon>
                </DetailDiv>
                <StyledTypography variant="h6">
                  {productitems?.[0]?.cards?.[0]?.title}
                </StyledTypography>
                <ProductContent>
                  <Typography variant="body2" style={{ color: 'rgba(0, 0, 0, 0.5)' }}>{productitems?.[0]?.cards?.[0]?.content}</Typography>
                  <Typography variant="body2" sx={{ marginRight: '20px' }} style={{ fontWeight: 'bold' }}>$63.85</Typography>
                </ProductContent>
              </CardContent>
            </CustomCard>

            <CustomCard>
              <CardContent>
                <img
                  src={api + productitems?.[0]?.cards?.[1]?.cardimages?.data?.[0]?.attributes?.url}
                  alt="Brand 2"
                  style={{ width: "95%", marginBottom: "10px", position: 'relative'}}
                />
                <DetailDiv>
                    <FontAwesomeIcon icon={faHeart} />
                    <div style={{position:"relative",left:"20px"}}> 
                    <FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                    <TypographyIcon href="#"><FontAwesomeIcon icon={faBagShopping} /> Shop Now</TypographyIcon>
                </DetailDiv>
                <StyledTypography variant="h6">
                  {productitems?.[0]?.cards?.[1]?.title}
                </StyledTypography>
                <ProductContent>
                  <Typography variant="body2" style={{ color: 'rgba(0, 0, 0, 0.5)' }}>{productitems?.[0]?.cards?.[1]?.content}</Typography>
                  <Typography variant="body2" sx={{ marginRight: '30px' }}style={{ fontWeight: 'bold' }}>{productitems?.[0]?.cards?.[1]?.prize}</Typography>
                </ProductContent>
              </CardContent>
            </CustomCard>

            <CustomCard>
              <CardContent>
                <img
                  src={api + productitems?.[0]?.cards?.[2]?.cardimages?.data?.[0]?.attributes?.url}
                  alt="Brand 3"
                  style={{ width: "95%", marginBottom: "10px", position: 'relative' }}
                />
                <DetailDiv>
                    <FontAwesomeIcon icon={faHeart} />
                    <div style={{position:"relative",left:"20px"}}> 
                    <FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                    <TypographyIcon href="#"><FontAwesomeIcon icon={faBagShopping} /> Shop Now</TypographyIcon>
                </DetailDiv>
                <StyledTypography variant="h6">
                  {productitems?.[0]?.cards?.[2]?.title}
                </StyledTypography>
                <ProductContent>
                  <Typography variant="body2" style={{ color: 'rgba(0, 0, 0, 0.5)' }}>{productitems?.[0]?.cards?.[2]?.content}</Typography>
                  <Typography variant="body2" sx={{ marginRight: '40px' }}style={{ fontWeight: 'bold' }}>{productitems?.[0]?.cards?.[2]?.prize}</Typography>
                </ProductContent>
              </CardContent>
            </CustomCard>

            <CustomCard>
              <CardContent>
                <img
                  src={api + productitems?.[0]?.cards?.[3]?.cardimages?.data?.[0]?.attributes?.url}
                  alt="Brand 4"
                  style={{ width: "95%", marginBottom: "10px", position: 'relative'}}
                />
                <DetailDiv>
                    <FontAwesomeIcon icon={faHeart} />
                    <div style={{position:"relative",left:"20px"}}> 
                    <FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                    <TypographyIcon href="#"><FontAwesomeIcon icon={faBagShopping} /> Shop Now</TypographyIcon>
                </DetailDiv>
                <SaleTypography> SALE</SaleTypography>
                <StyledTypography variant="h6">
                  {productitems?.[0]?.cards?.[3]?.title}
                </StyledTypography>
                <ProductContent>
                  <Typography variant="body2" style={{ color: 'rgba(0, 0, 0, 0.5)' }}>{productitems?.[0]?.cards?.[3]?.content}</Typography>
                  <Typography variant="body2" sx={{ marginRight: '55px' }}style={{ fontWeight: 'bold' }}>{productitems?.[0]?.cards?.[3]?.prize}</Typography>
                </ProductContent>
              </CardContent>
            </CustomCard>
          </FirstDiv>

          <SecDiv>
            <CustomCard>
              <CardContent>
                <img
                  src={api + productitems?.[0]?.cards?.[4]?.cardimages?.data?.[0]?.attributes?.url}
                  alt="Brand 5"
                  style={{ width: "95%", marginBottom: "10px" }}
                />
                <DetailDiv>
                    <FontAwesomeIcon icon={faHeart} />
                    <div style={{position:"relative",left:"20px"}}> 
                    <FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                    <TypographyIcon href="#"><FontAwesomeIcon icon={faBagShopping} /> Shop Now</TypographyIcon>
                </DetailDiv>
                <HotTypography> HOT </HotTypography>
                <StyledTypography variant="h6">{productitems?.[0]?.cards?.[4]?.title}</StyledTypography>
                <ProductContent>
                  <Typography variant="body2" style={{ color: 'rgba(0, 0, 0, 0.5)' }}>{productitems?.[0]?.cards?.[4]?.content}</Typography>
                  <Typography variant="body2" sx={{ marginRight: '20px' }}style={{ fontWeight: 'bold' }}>{productitems?.[0]?.cards?.[4]?.prize}</Typography>
                </ProductContent>
              </CardContent>
            </CustomCard>

            <CustomCard>
              <CardContent>
                <img
                  src={api + productitems?.[0]?.cards?.[5]?.cardimages?.data?.[0]?.attributes?.url}
                  alt="Brand 6"
                  style={{ width: "95%", marginBottom: "10px", position: 'relative'}}
                />
                <DetailDiv>
                    <FontAwesomeIcon icon={faHeart} />
                    <div style={{position:"relative",left:"20px"}}> 
                    <FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                    <TypographyIcon href="#"><FontAwesomeIcon icon={faBagShopping} /> Shop Now</TypographyIcon>
                </DetailDiv>
                <TypographySale> SALE</TypographySale>
                <div style={{ position: 'relative'}}>
                  <StyledTypography variant="h6">
                    {productitems?.[0]?.cards?.[5]?.title}
                  </StyledTypography>
                  <ProductContent>
                    <Typography variant="body2" style={{ color: 'rgba(0, 0, 0, 0.5)' }}>{productitems?.[0]?.cards?.[5]?.content}</Typography>
                    <Typography variant="body2" sx={{ marginRight: '30px' }}style={{ fontWeight: 'bold' }}>{productitems?.[0]?.cards?.[5]?.prize}</Typography>
                  </ProductContent>
                </div>
              </CardContent>
            </CustomCard>

            <CustomCard>
              <CardContent>
                <img
                  src={api + productitems?.[0]?.cards?.[6]?.cardimages?.data?.[0]?.attributes?.url}
                  alt="Brand 7"
                  style={{ width: "95%", marginBottom: "10px", position: 'relative' }}
                />
                <DetailDiv>
                    <FontAwesomeIcon icon={faHeart} />
                    <div style={{position:"relative",left:"20px"}}> 
                    <FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                    <TypographyIcon href="#"><FontAwesomeIcon icon={faBagShopping} /> Shop Now</TypographyIcon>
                </DetailDiv>
                <div style={{ position: 'relative' }}>
                  <StyledTypography variant="h6">{productitems?.[0]?.cards?.[6]?.title}</StyledTypography>
                  <ProductContent>
                    <Typography variant="body2" style={{ color: 'rgba(0, 0, 0, 0.5)' }}>{productitems?.[0]?.cards?.[6]?.content}</Typography>
                    <Typography variant="body2" sx={{ marginRight: '40px' }}style={{ fontWeight: 'bold' }}>{productitems?.[0]?.cards?.[6]?.prize}</Typography>
                  </ProductContent>
                </div>
              </CardContent>
            </CustomCard>

            <CustomCard>
              <CardContent>
                <img
                  src={api + productitems?.[0]?.cards?.[7]?.cardimages?.data?.[0]?.attributes?.url}
                  alt="Brand 8"
                  style={{ width: "95%", marginBottom: "10px", position: 'relative' }}
                />
                <DetailDiv>
                    <FontAwesomeIcon icon={faHeart} />
                    <div style={{position:"relative",left:"20px"}}> 
                    <FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                    <TypographyIcon href="#"><FontAwesomeIcon icon={faBagShopping} /> Shop Now</TypographyIcon>
                </DetailDiv>
                <div style={{ position: 'relative', }}>
                  <StyledTypography variant="h3" >
                    {productitems?.[0]?.cards?.[7]?.title}
                  </StyledTypography>
                  <ProductContent >
                    <Typography variant="body2" style={{ color: 'rgba(0, 0, 0, 0.5)' }}>{productitems?.[0]?.cards?.[7]?.content}</Typography>
                    <Typography variant="body2" sx={{ marginRight: '20px' }}style={{ fontWeight: 'bold' }}>{productitems?.[0]?.cards?.[7]?.prize}</Typography>
                  </ProductContent>
                </div>
              </CardContent>
            </CustomCard>
          </SecDiv >
        </CommonDiv>
      </Box>
    </BoxContainer>
  );
};

export default Products;
