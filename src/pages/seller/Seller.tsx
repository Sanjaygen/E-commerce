import {
  Box,
  Button,
  CardContent,
  Link,
  Typography,
} from "@mui/material";
import { BoxContainer, CustomCard, HotTypography, ProductContent, SaleTypography, StyledButton, StyledLink, StyledTypography, TypographySale } from "./Seller.styled";
import { useQuery } from "@apollo/client";
import { QUERY } from "../homepage/query";
import { api } from "@/service/backend-api";

const Seller = () => {
  const { data } = useQuery(QUERY);
  const { homes } = data || {};
  const { silderProduct } = homes?.data?.[0].attributes || {};
  console.log('silderProduct', silderProduct);

  const sellerButton = silderProduct?.[0]?.filterbutton?.[0]?.color?.navbutton?.[0]?.background;
  const sellerText = silderProduct?.[0]?.filterbutton?.[0]?.color?.navbutton?.[0]?.text;
  return (
    <BoxContainer>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", position: "relative" }}
      >
        {silderProduct?.[0]?.title}
      </Typography>
      <Box sx={{ position: "relative" }}>
        <Box sx={{ marginLeft: "20px", marginTop: "25px" }}>
          <StyledLink  href={"#"}>
            <b>{silderProduct?.[0]?.navbar?.[0]?.title}</b>
          </StyledLink>
          <StyledLink href={"#"}>
            {silderProduct?.[0]?.navbar?.[1]?.title}
          </StyledLink>
          <StyledLink href={"#"}>
            {silderProduct?.[0]?.navbar?.[2]?.title}
          </StyledLink>
          <StyledLink href={"#"}>
            {silderProduct?.[0]?.navbar?.[3]?.title}
          </StyledLink>
          <StyledButton variant="contained" bgColor={sellerButton} textColor={sellerText} >
            {silderProduct?.[0]?.filterbutton?.[0]?.title}
          </StyledButton>
        </Box>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex" }}>
            <CustomCard>
              <CardContent>
                <img
                  src={api+silderProduct?.[0]?.cards?.[0]?.cardimages?.data?.[0]?.attributes?.url}
                  alt="Brand 5"
                  style={{ width: "95%", marginBottom: "10px" }}
                />
                <HotTypography> HOT</HotTypography>
                <StyledTypography variant="h6">
                  {silderProduct?.[0]?.cards?.[0]?.title}
                </StyledTypography>
                <ProductContent>
                  <Typography variant="body2">{silderProduct?.[0]?.cards?.[0]?.content}</Typography>
                  <Typography variant="body2" sx={{ marginRight: "20px" }}>
                  {silderProduct?.[0]?.cards?.[0]?.prize}
                  </Typography>
                </ProductContent>
              </CardContent>
            </CustomCard>

            <CustomCard>
              <CardContent>
                <img
                  src={api+silderProduct?.[0]?.cards?.[1]?.cardimages?.data?.[0]?.attributes?.url}
                  alt="Brand 2"
                  style={{
                    width: "95%",
                    marginBottom: "10px",
                    position: "relative",
                    right: "15px",
                  }}
                />
                <StyledTypography variant="h6">
                {silderProduct?.[0]?.cards?.[1]?.title}
                </StyledTypography>
                <ProductContent>
                  <Typography variant="body2">{silderProduct?.[0]?.cards?.[1]?.content}</Typography>
                  <Typography variant="body2" sx={{ marginRight: "30px" }}>
                  {silderProduct?.[0]?.cards?.[1]?.prize}
                  </Typography>
                </ProductContent>
              </CardContent>
            </CustomCard>

            <CustomCard>
              <CardContent style={{ position: "relative" }}>
                <img
                  src={api+silderProduct?.[0]?.cards?.[2]?.cardimages?.data?.[0]?.attributes?.url}
                  alt="Brand 4"
                  style={{
                    width: "95%",
                    marginBottom: "10px",
                    position: "relative",
                    right: "45px",
                  }}
                />
                <SaleTypography> SALE </SaleTypography>
                <StyledTypography variant="h6">
                {silderProduct?.[0]?.cards?.[2]?.title}
                </StyledTypography>
                <ProductContent>
                  <Typography variant="body2">{silderProduct?.[0]?.cards?.[2]?.content}</Typography>
                  <Typography variant="body2" sx={{ marginRight: "55px" }}>
                  {silderProduct?.[0]?.cards?.[2]?.prize}
                  </Typography>
                </ProductContent>
              </CardContent>
            </CustomCard>

            <CustomCard>
              <CardContent>
                <img
                  src={api+silderProduct?.[0]?.cards?.[3]?.cardimages?.data?.[0]?.attributes?.url}
                  alt="Brand 6"
                  style={{ width: "95%", position: "relative", right: "65px" }}
                />
                <TypographySale> SALE</TypographySale>
                <div
                  style={{ position: "relative", right: "55px", top: "10px" }}
                >
                  <StyledTypography variant="h6">
                  {silderProduct?.[0]?.cards?.[3]?.title}
                  </StyledTypography>
                  <ProductContent>
                    <Typography variant="body2"> {silderProduct?.[0]?.cards?.[3]?.content}</Typography>
                    <Typography variant="body2" sx={{ marginRight: "30px" }}>
                    {silderProduct?.[0]?.cards?.[3]?.prize}
                    </Typography>
                  </ProductContent>
                </div>
              </CardContent>
            </CustomCard>
          </div>
        </div>
      </Box>
    </BoxContainer>
  );
};

export default Seller;
