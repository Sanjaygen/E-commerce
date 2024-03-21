/* eslint-disable @next/next/no-img-element */
import { Box, Card, Typography } from "@mui/material";
import {
  BoxStyled,
  CoatDiv,
  HoverDiv,
  ImageStyled,
  JacketDiv,
  LadyDiv,
  LadyimgDiv,
  LogoDiv,
  MainDiv,
  PantsDiv,
  SaleTypography,
  ShirtDiv,
  StyledDiv,
  StyledTypography,
} from "./Brand.styled";
import { useQuery } from "@apollo/client";
import { QUERY } from "../homepage/query";
import { api } from "@/service/backend-api";


const Brand = () => {
  const { data } = useQuery(QUERY);
  const { homes } = data || {};
  const { brands, categorey } = homes?.data?.[0]?.attributes || {};
  console.log(categorey, 'categorey');
  const hoverBg = categorey?.[0]?.images?.[0]?.colors?.color?.[0]?.background;
  return (
    <MainDiv>
      <LogoDiv>
        {brands &&
          brands.map((brand: any, index: number) => (
            <ImageStyled
              key={index}
              src={api + brand?.brandlogo?.data?.[0]?.attributes?.url}
              alt={`Image ${index}`}
            />
          ))}
      </LogoDiv>

      <StyledTypography variant="h5">{categorey?.[0]?.title}</StyledTypography>
      <BoxStyled>
        <Box sx={{
          display: "flex",
          flexDirection: { xs: 'column', md: 'column', lg: "row" },
          justifyContent: "center",
          alignItems: "center",
        }}>
          <LadyimgDiv>
            <img
              src={
                api +
                categorey?.[0]?.images?.[0]?.brandlogo?.data?.[0]?.attributes
                  ?.url
              }
              alt="category-1"
              style={{
                width: "100%",
                maxWidth: "500px",
                height: "500px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
            <LadyDiv bgcolor={hoverBg}>
              <Typography>{categorey?.[0]?.images?.[0]?.productname}</Typography>
              <Typography>{categorey?.[0]?.images?.[0]?.productcount}</Typography>
            </LadyDiv>
          </LadyimgDiv>
          <StyledDiv>
            <HoverDiv>
              <img src={
                api +
                categorey?.[0]?.images?.[1]?.brandlogo
                  ?.data?.[0]?.attributes?.url
              }
                alt={`category`}
                style={{
                  width: "100%",
                  maxWidth: "250px",
                  height: "auto",
                  marginBottom: "5px",
                }}
              />
              <PantsDiv bgcolor={hoverBg}>
                <Typography>{categorey?.[0]?.images?.[1]?.productname}</Typography>
                <Typography>{categorey?.[0]?.images?.[1]?.productcount}</Typography>
              </PantsDiv>
            </HoverDiv>
            <HoverDiv>
              <img src={
                api +
                categorey?.[0]?.images?.[2]?.brandlogo
                  ?.data?.[0]?.attributes?.url
              }
                alt={`category`}
                style={{
                  width: "100%",
                  maxWidth: "250px",
                  height: "auto",
                }}
              />
              <SaleTypography>SALE</SaleTypography>
              <CoatDiv bgcolor={hoverBg}>
                <Typography>{categorey?.[0]?.images?.[2]?.productname}</Typography>
                <Typography>{categorey?.[0]?.images?.[2]?.productcount}</Typography>
              </CoatDiv>
            </HoverDiv>
          </StyledDiv>
          <StyledDiv>
            <HoverDiv>
              <img src={
                api +
                categorey?.[0]?.images?.[3]?.brandlogo
                  ?.data?.[0]?.attributes?.url
              }
                alt={`category`}
                style={{
                  width: "100%",
                  maxWidth: "250px",
                  height: "auto",
                  marginBottom: "5px"
                }}
              />
              <ShirtDiv bgcolor={hoverBg}>
                <Typography>{categorey?.[0]?.images?.[3]?.productname}</Typography>
                <Typography>{categorey?.[0]?.images?.[3]?.productcount}</Typography>
              </ShirtDiv>
            </HoverDiv>
            <HoverDiv>
              <img src={
                api +
                categorey?.[0]?.images?.[4]?.brandlogo
                  ?.data?.[0]?.attributes?.url
              }
                alt={`category`}
                style={{
                  width: "100%",
                  maxWidth: "250px",
                  height: "auto",
                }}
              />
              <JacketDiv bgcolor={hoverBg}>
                <Typography>{categorey?.[0]?.images?.[4]?.productname}</Typography>
                <Typography>{categorey?.[0]?.images?.[4]?.productcount}</Typography>
              </JacketDiv>
            </HoverDiv>
          </StyledDiv>
        </Box>
      </BoxStyled>
    </MainDiv>
  );
};

export default Brand;
