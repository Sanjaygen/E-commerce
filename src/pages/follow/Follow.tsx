import { useQuery } from "@apollo/client";
import { Box, Button, TextField, Typography } from "@mui/material";
import { QUERY } from "../homepage/query";
import { api } from "@/service/backend-api";

export const Follow = () => {
  const { data } = useQuery(QUERY);
  const { homes } = data || {};
  const { feedback } = homes?.data?.[0].attributes || {};
  console.log('feedback', feedback);
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
          {feedback?.[0]?.title}
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "70px",
          }}
        >
          <img
            src={api+feedback?.[0]?.cardItems?.[0]?.brandlogo?.data?.[0]?.attributes?.url}
            alt="Brand 1"
            style={{ width: "200px", height: "200px", margin: "0 5px" }} 
          />
          <img
            src={api+feedback?.[0]?.cardItems?.[1]?.brandlogo?.data?.[0]?.attributes?.url}
            alt="Brand 2"
            style={{ width: "200px", height: "200px", margin: "0 5px" }} 
          />
          <img
            src={api+feedback?.[0]?.cardItems?.[2]?.brandlogo?.data?.[0]?.attributes?.url}
            alt="Brand 3"
            style={{ width: "200px", height: "200px", margin: "0 5px" }} 
          />
          <img
            src={api+feedback?.[0]?.cardItems?.[3]?.brandlogo?.data?.[0]?.attributes?.url}
            alt="Brand 4"
            style={{ width: "200px", height: "200px", margin: "0 5px" }} 
          />
          <img
            src={api+feedback?.[0]?.cardItems?.[4]?.brandlogo?.data?.[0]?.attributes?.url}
            alt="Brand 5"
            style={{ width: "200px", height: "200px", margin: "0 5px" }} 
          />
          <img
            src={api+feedback?.[0]?.cardItems?.[5]?.brandlogo?.data?.[0]?.attributes?.url}
            alt="Brand 6"
            style={{ width: "200px", height: "200px", margin: "0 5px" }} 
          />
        </div>

        <Typography
          variant="h4"
          sx={{ textAlign: "center", marginTop: "50px" }}
        >
         {feedback?.[0]?.heading}
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
          {feedback?.[0]?.button?.[0]?.title}
        </Button>
      </Box>
    </Box>
  );
};
