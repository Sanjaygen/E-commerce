import { Box, Button, TextField, Typography } from "@mui/material";

export const Follow = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#ebedf0",
        height: "630px",
        position: "relative",
        bottom: "100px",
      }}
    >
      <Box sx={{ position: "relative", top: "60px" }}>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Follow Products And Discounts On Instagram
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "70px",
          }}
        >
          <img
            src="img/follow/card1.png"
            alt="Brand 1"
            style={{ width: "200px", height: "200px", margin: "0 5px" }} // Added margin for gaps
          />
          <img
            src="img/follow/card2.png"
            alt="Brand 2"
            style={{ width: "200px", height: "200px", margin: "0 5px" }} 
          />
          <img
            src="img/follow/card3.png"
            alt="Brand 3"
            style={{ width: "200px", height: "200px", margin: "0 5px" }} 
          />
          <img
            src="img/follow/card4.png"
            alt="Brand 4"
            style={{ width: "200px", height: "200px", margin: "0 5px" }} 
          />
          <img
            src="img/follow/card5.png"
            alt="Brand 5"
            style={{ width: "200px", height: "200px", margin: "0 5px" }} 
          />
          <img
            src="img/follow/card6.png"
            alt="Brand 6"
            style={{ width: "200px", height: "200px", margin: "0 5px" }} 
          />
        </div>

        <Typography
          variant="h4"
          sx={{ textAlign: "center", marginTop: "50px" }}
        >
          Or Subscribe To The Newsletter
        </Typography>
        <TextField
          id="standard-basic"
          label="Email Address..."
          variant="standard"
          sx={{
            width: "473px",
            height: "32px",
            marginTop: "22px",
            marginLeft: "480px",
          }}
        />
        <Button
          variant="outlined"
          sx={{
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            borderColor: "black",
            color: "black",
            marginTop: "34px",
            marginLeft: "50px",
          }}
        >
          SUBMIT
        </Button>
      </Box>
    </Box>
  );
};
