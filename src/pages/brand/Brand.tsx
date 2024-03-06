/* eslint-disable @next/next/no-img-element */
import { Box } from "@mui/material";
import {
  BoxStyled,
  ImageStyled,
  LadyimgDiv,
  LogoDiv,
  MainDiv,
  SaleTypography,
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
            display:"flex",
            flexDirection:{ xs: 'column', md: 'column',lg:"row"},
            justifyContent:"center",
            alignItems:"center",
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
          </LadyimgDiv>
          
          <StyledDiv>
          <SaleTypography>SALE</SaleTypography>
            {[1, 2, 3, 4].map((index) =>
              index % 2 === 0 ? ( 
                <div
                  key={index}
                  style={{ display: "flex", marginBottom: "15px" }}
                >
                  
                  <div style={{ flex: 1, marginRight: "15px" }}>
                    <img
                      src={
                        api +
                        categorey?.[0]?.images?.[index - 1]?.brandlogo
                          ?.data?.[0]?.attributes?.url
                      }
                      alt={`category-${index - 1}`}
                      style={{
                        width: "100%",
                        maxWidth: "250px",
                        height: "auto",
                      }}
                    />
                  </div>
                  <div>
                    
                  </div>
                  <div style={{ flex: 1, marginLeft: "5px" }}>
                    <img
                      src={
                        api +
                        categorey?.[0]?.images?.[index]?.brandlogo?.data?.[0]
                          ?.attributes?.url
                      }
                      alt={`category-${index}`}
                      style={{
                        width: "100%",
                        maxWidth: "250px",
                        height: "auto",
                      }}
                    />
                  </div>
                </div>
              ) : null
            )}
          </StyledDiv>
        </Box>
      </BoxStyled>
    </MainDiv>
  );
};

export default Brand;
