import { Box, Grid } from "@mui/material";
import {
  ImageStyled,
  LogoDiv,
  MainDiv,
  SaleTypography,
  StyledTypography,
} from "./Brand.styled";
import { useQuery } from "@apollo/client";
import { QUERY } from "../homepage/query";
import { api } from "@/service/backend-api";

const Brand = () => {
  const { data } = useQuery(QUERY);
  const { homes } = data || {};
  const { brands, categorey } = homes?.data?.[0].attributes || {};
  console.log('brands', brands);
  console.log('categorey', categorey);


  return (
    <MainDiv>

      <LogoDiv>
        {brands && brands.map((brand: any, index: number) => (
          <ImageStyled
            key={index}
            src={api + brand?.brandlogo?.data?.[0]?.attributes?.url}
            alt={`Image ${index}`}
          />
        ))}
      </LogoDiv>

      <StyledTypography variant="h5">{categorey?.[0].title}</StyledTypography>

      <Box sx={{ position: 'relative', bottom: '200px' }}>

        <Grid container spacing={0}>

          <Grid item xs={12} sm={6}>

            <img src={api + categorey?.[0]?.images?.[0]?.brandlogo?.data?.[0]?.attributes?.url} alt="category-1" style={{ width: '500px', height: '512px', marginLeft: '250px'}} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={1} >
              <Grid item xs={5}>
                <img src={api + categorey?.[0]?.images?.[1]?.brandlogo?.data?.[0]?.attributes?.url} alt="category-2" style={{ width: '250px', height: '250px', marginLeft: '10px' }} />
              </Grid>
              <Grid item xs={5} style={{ position: 'relative', left: '-50px' }}>
                <div style={{ position: 'relative' }}>
                  <img
                    src={api + categorey?.[0]?.images?.[3]?.brandlogo?.data?.[0]?.attributes?.url}
                    alt="category-3"
                    style={{ width: '100%', maxWidth: '250px', height: 'auto', marginLeft: '10px' }}
                  />
                  <SaleTypography>SALE </SaleTypography>
                </div>
              </Grid>
              <Grid item xs={5}>
                <img src={api + categorey?.[0]?.images?.[2]?.brandlogo?.data?.[0]?.attributes?.url} alt="category-4" style={{ width: '250px', height: '250px', marginLeft: '10px' }} />
              </Grid>
              <Grid item xs={5}>
                <img src={api + categorey?.[0]?.images?.[4]?.brandlogo?.data?.[0]?.attributes?.url} alt="category-5" style={{ width: '250px', height: '250px', marginLeft: '-40px' }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </MainDiv>
  );
};

export default Brand;
