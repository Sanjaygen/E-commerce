import {
  Box,
  Button,
  CardContent,
  Link,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { BoxContainer, CustomCard, ProductContent, StyledTypography } from "./Product.styled";

const Products = () => {

  return (
    <BoxContainer>
      <Typography variant="h4" sx={{ textAlign: "center" ,position:'relative'}}>
        Or subscribe to the newsletter
      </Typography>
      <Box sx={{position:'relative'}}>
      <Box sx={{ marginLeft: "20px",marginTop:'25px' }}>
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
          <FontAwesomeIcon icon={faFilter} scale={"1.25x"} />
          Filter
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
                src="img/image-product-3.png"
                alt="Brand 1"
                style={{ width: "95%", marginBottom: "10px" }}
              />
              <StyledTypography variant="h6">
                Adicolor Classics Joggers
              </StyledTypography>
              <ProductContent>
                <Typography variant="body2"> Dress</Typography>
                <Typography variant="body2" sx={{marginRight:'20px'}}>$63.85</Typography>
              </ProductContent>
            </CardContent>
          </CustomCard>

          <CustomCard>
            <CardContent>
              <img
                src="img/14.png"
                alt="Brand 2"
                style={{ width: "95%", marginBottom: "10px",position:'relative',right:'15px' }}
              />
              <StyledTypography variant="h6">
                Nike Sportswear Futura Luxe
              </StyledTypography>
              <ProductContent>
                <Typography variant="body2"> Dress</Typography>
                <Typography variant="body2" sx={{marginRight:'30px'}}>$63.85</Typography>
              </ProductContent>
            </CardContent>
          </CustomCard>

          <CustomCard>
            <CardContent>
              <img
                src="img/13.png"
                alt="Brand 3"
                style={{ width: "95%", marginBottom: "10px",position:'relative',right:'30px' }}
              />
              <StyledTypography variant="h6">
                Geometric print Scarf
              </StyledTypography>
              <ProductContent>
                <Typography variant="body2"> Dress</Typography>
                <Typography variant="body2"sx={{marginRight:'40px'}}>$63.85</Typography>
              </ProductContent>
            </CardContent>
          </CustomCard>

          <CustomCard>
            <CardContent style={{position:'relative'}}>
              <img
                src="img/04.png"
                alt="Brand 4"
                style={{ width: "95%", marginBottom: "10px",position:'relative',right:'45px' }}
              />
              <Typography
                sx={{
                  position: "absolute",
                  top: "40px",
                  right: "249px",
                  backgroundColor: "black",
                  color: "white",
                  width: "60px",
                  textAlign:'center'
                }}
              >
                SALE
              </Typography>
              <StyledTypography variant="h6">
                Yellow Reserved Hoodie
              </StyledTypography>
              <ProductContent>
                <Typography variant="body2"> Dress</Typography>
                <Typography variant="body2" sx={{marginRight:'55px'}}>$63.85</Typography>
              </ProductContent>
            </CardContent>
          </CustomCard>
        </div>

        <div style={{ display: "flex",position:'relative' }}>
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
              <StyledTypography variant="h6">Basic Dress Green</StyledTypography>
              <ProductContent>
                <Typography variant="body2"> Dress</Typography>
                <Typography variant="body2" sx={{marginRight:'20px'}}>$63.85</Typography>
              </ProductContent>
            </CardContent>
          </CustomCard>

          <CustomCard>
            <CardContent>
              <img
                src="img/12.png"
                alt="Brand 6"
                style={{ width: "95%",position:'relative',right:'10px' }}
              />
              <Typography
                sx={{
                  position: "absolute",
                  top: "40px",
                  left: "288px",
                  backgroundColor: "black",
                  color: "white",
                  width: "60px",
                  textAlign: "center",
                }}
              >
                SALE
              </Typography>
              <div style={{position:'relative',right:'8px' ,top:'10px'}}>
              <StyledTypography variant="h6">
                Nike Air Zoom Pegasus
              </StyledTypography>
              <ProductContent>
                <Typography variant="body2"> Dress</Typography>
                <Typography variant="body2" sx={{marginRight:'30px'}}>$63.85</Typography>
              </ProductContent>
              </div>
            </CardContent>
          </CustomCard>

          <CustomCard>
            <CardContent>
              <img
                src="img/17.png"
                alt="Brand 7"
                style={{ width: "95%", marginBottom: "10px",position:'relative',right:'25px' }}
              />
               <div style={{position:'relative',right:'17px' }}>
              <StyledTypography variant="h6">Nike Repel Miler</StyledTypography>
              <ProductContent>
                <Typography variant="body2"> Dress</Typography>
                <Typography variant="body2" sx={{marginRight:'40px'}}>$63.85</Typography>
              </ProductContent>
              </div>
            </CardContent>
          </CustomCard>

          <CustomCard>
            <CardContent>
              <img
                src="img/16.png"
                alt="Brand 8"
                style={{ width: "95%", marginBottom: "10px",position:'relative',right:'40px' }}
              />
              <div style={{position:'relative',right:'30px' }}>
              <StyledTypography variant="h3" >
                Nike Sportswear Futura Luxe
              </StyledTypography>
              <ProductContent >
                <Typography variant="body2"> Dress</Typography>
                <Typography variant="body2" sx={{marginRight:'20px'}}>$63.85</Typography>
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

export default Products;
