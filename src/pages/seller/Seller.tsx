import {
  Box,
  Button,
  CardContent,
  Link,
  Typography,
} from "@mui/material";
import { BoxContainer, CustomCard, ProductContent, StyledTypography } from "./Seller.styled";

const Seller = () => {

  return (
    <BoxContainer>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", position: "relative" }}
      >
        Best Sellers
      </Typography>
      <Box sx={{ position: "relative" }}>
        <Box sx={{ marginLeft: "20px", marginTop: "25px" }}>
          <Link
            href={"#"}
            sx={{
              marginRight: "10px",
              textDecoration: "none",
              color: "black",
              cursor: "pointer",
            }}
          >
            <b>All Products</b>
          </Link>
          <Link
            href={"#"}
            sx={{
              marginRight: "10px",
              textDecoration: "none",
              color: "black",
              cursor: "pointer",
            }}
          >
            T-Shirt
          </Link>
          <Link
            href={"#"}
            sx={{
              marginRight: "10px",
              textDecoration: "none",
              color: "black",
              cursor: "pointer",
            }}
          >
            Hoodies
          </Link>
          <Link
            href={"#"}
            sx={{
              marginRight: "10px",
              textDecoration: "none",
              color: "black",
              cursor: "pointer",
            }}
          >
            Jacket
          </Link>
          <Button
            variant="contained"
            sx={{
              marginRight: "0px",
              float: "right",
              height: "30px",
              position: "relative",
              bottom: "10px",
              right: "10px",
              backgroundColor: "black",
              color: "white",
            }}
          >
            Show All
          </Button>
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
                  src="img/11.png"
                  alt="Brand 5"
                  style={{ width: "95%", marginBottom: "10px" }}
                />
                <Typography
                  sx={{
                    position: "absolute",
                    top: "40px",
                    left: "17px",
                    backgroundColor: "#FF6F61",
                    color: "white",
                    width: "60px",
                    textAlign: "center",
                  }}
                >
                  HOT
                </Typography>
                <StyledTypography variant="h6">
                  Basic Dress Green
                </StyledTypography>
                <ProductContent>
                  <Typography variant="body2"> Dress</Typography>
                  <Typography variant="body2" sx={{ marginRight: "20px" }}>
                    $63.85
                  </Typography>
                </ProductContent>
              </CardContent>
            </CustomCard>

            <CustomCard>
              <CardContent>
                <img
                  src="img/14.png"
                  alt="Brand 2"
                  style={{
                    width: "95%",
                    marginBottom: "10px",
                    position: "relative",
                    right: "15px",
                  }}
                />
                <StyledTypography variant="h6">
                  Nike Sportswear Futura Luxe
                </StyledTypography>
                <ProductContent>
                  <Typography variant="body2"> Dress</Typography>
                  <Typography variant="body2" sx={{ marginRight: "30px" }}>
                    $63.85
                  </Typography>
                </ProductContent>
              </CardContent>
            </CustomCard>

            <CustomCard>
              <CardContent style={{ position: "relative" }}>
                <img
                  src="img/04.png"
                  alt="Brand 4"
                  style={{
                    width: "95%",
                    marginBottom: "10px",
                    position: "relative",
                    right: "45px",
                  }}
                />
                <Typography
                  sx={{
                    position: "absolute",
                    top: "40px",
                    right: "249px",
                    backgroundColor: "black",
                    color: "white",
                    width: "60px",
                    textAlign: "center",
                  }}
                >
                  SALE
                </Typography>
                <StyledTypography variant="h6">
                  Yellow Reserved Hoodie
                </StyledTypography>
                <ProductContent>
                  <Typography variant="body2"> Dress</Typography>
                  <Typography variant="body2" sx={{ marginRight: "55px" }}>
                    $63.85
                  </Typography>
                </ProductContent>
              </CardContent>
            </CustomCard>

            <CustomCard>
              <CardContent>
                <img
                  src="img/12.png"
                  alt="Brand 6"
                  style={{ width: "95%", position: "relative", right: "65px" }}
                />
                <Typography
                  sx={{
                    position: "absolute",
                    top: "60px",
                    left: "798px",
                    backgroundColor: "black",
                    color: "white",
                    width: "60px",
                    textAlign: "center",
                  }}
                >
                  SALE
                </Typography>
                <div
                  style={{ position: "relative", right: "55px", top: "10px" }}
                >
                  <StyledTypography variant="h6">
                    Nike Air Zoom Pegasus
                  </StyledTypography>
                  <ProductContent>
                    <Typography variant="body2"> Dress</Typography>
                    <Typography variant="body2" sx={{ marginRight: "30px" }}>
                      $63.85
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
