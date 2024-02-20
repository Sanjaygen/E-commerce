import { Box, Button, Grid, Typography } from "@mui/material";
import {  DivWrapper } from "./Footer.Styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

<Button variant="text" sx={{ marginLeft: "250px", color: "white" }}>
  Scroll To Top <FontAwesomeIcon icon={faArrowUp} />
</Button>;

export const Footer = () => {
  return (
    <>
      <Box sx={{display: "flex" }}>
        <Grid
          container
          spacing={2}
          sx={{ margin: "auto", padding: "50px", marginLeft: "80px" }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{ marginBottom: { xs: "20px", sm: 0 } }}
          >
            <Typography
              sx={{ fontSize: "28px", fontWeight: "450", mb: "10px" }}
            >
              <img
                src="img/logo/Group1.png"
                alt="no logo"
                width={"31px"}
                height={"15px"}
                style={{ marginRight: "10px" }}
              />
              CORAL
              <img
                src="img/logo/Group1.png"
                alt="no logo"
                width={"31px"}
                height={"15px"}
                style={{ marginLeft: "15px" }}
              />
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </Typography>
            <DivWrapper
              sx={{
                gap: "25px",
                mt: "30px",
                position:'relative',
                right:'20px'
              }}
            >
              <FontAwesomeIcon
                icon={faFacebookF}
                style={{
                  marginLeft: "20px",
                  fontSize: 28,
                  border: "1px solid #fff",
                  borderRadius: "50%",
                  padding: "5px",
                }}
              />

              <FontAwesomeIcon
                icon={faTwitter}
                style={{
                  marginLeft: "20px",
                  fontSize: 28,
                  border: "1px solid #fff",
                  borderRadius: "50%",
                  padding: "5px"
                }}
              />
             
              <FontAwesomeIcon
                icon={faLinkedinIn}
                style={{
                  marginLeft: "20px",
                  fontSize: 28,
                  border: "1px solid #fff",
                  borderRadius: "50%",
                  padding: "5px"
                }}
              />
               <FontAwesomeIcon
                icon={faInstagram}
                style={{
                  marginLeft: "20px",
                  fontSize: 28,
                  border: "1px solid #fff",
                  borderRadius: "50%",
                  padding: "5px"
                }}
              />
            </DivWrapper>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={1}
            sx={{
              marginBottom: { xs: "20px", sm: 0, marginLeft: "50px" },
            }}
          >
            <Typography sx={{ color: "black", fontWeight: "550", mb: "10px" }}>
              CATALOG
            </Typography>
            <Typography sx={{ mb: "5px" }}>Necklaces</Typography>
            <Typography sx={{ mb: "5px" }}>Hoodies</Typography>
            <Typography sx={{ mb: "5px" }}>Jewelry Box</Typography>
            <Typography sx={{ mb: "5px" }}>T-Shirt</Typography>
            <Typography sx={{ mb: "5px" }}>Jacket</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{ marginBottom: { xs: "20px", sm: 0, marginLeft: "80px" } }}
          >
            <Grid container spacing={0} sx={{ marginLeft: "100px" }}>
              <Grid item xs={8} md={6}>
                <Typography
                  sx={{ color: "black", fontWeight: "550", mb: "10px" }}
                >
                  ABOUT US
                </Typography>
                <Typography sx={{ mb: "5px" }}>Our Producers</Typography>
                <Typography sx={{ mb: "5px" }}>Sitemap</Typography>
                <Typography sx={{ mb: "5px" }}>FAQ</Typography>
                <Typography sx={{ mb: "5px" }}>About Us</Typography>
                <Typography sx={{ mb: "5px" }}>Terms & Conditions</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{ marginBottom: { xs: "20px", sm: 0 }, marginLeft: "50px" }}
          >
            <Typography sx={{ color: "black", fontWeight: "550", mb: "10px" }}>
              CUSTOMER SERVICES
            </Typography>
            <Typography sx={{ mb: "8px" }}>Contact Us</Typography>
            <Typography sx={{ mb: "8px" }}>Track Your Order</Typography>
            <Typography sx={{ mb: "8px" }}>Product Care & Repair</Typography>
            <Typography sx={{ mb: "8px" }}>Book an Appointment</Typography>
            <Typography sx={{ mb: "8px" }}>Shipping & Returns</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          border: "1px solid black",
          backgroundColor: "black",
          color: "white",
          display: "flex",
          height: "52px",
        }}
      >
        <div style={{ marginTop: "16px", marginLeft: "190px" }}>
          © 2022 Coral , Inc.
        </div>
        <div style={{ marginTop: "14px", marginLeft: "280px" }}>
          <img src="img/icons_payment.png" alt="no img" />
        </div>
        <Button variant="text" sx={{ marginLeft: "250px", color: "white" }}>
          Scroll To Top{" "}
          <FontAwesomeIcon icon={faArrowUp} style={{ marginLeft: "10px" }} />
        </Button>
      </Box>
    </>
  );
};
