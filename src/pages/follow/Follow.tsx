/* eslint-disable @next/next/no-img-element */
import { useQuery } from "@apollo/client";
import { Box, Button, TextField, Typography } from "@mui/material";
import { QUERY } from "../homepage/query";
import { api } from "@/service/backend-api";
import { ContentTypography, MainDiv, StyledBox, StyledButton, StyledText, TopDiv, TopTypography } from "./Follow.styled";

export const Follow = () => {
  const { data } = useQuery(QUERY);
  const { homes } = data || {};
  const { feedback } = homes?.data?.[0]?.attributes || {};
  console.log('feedback', feedback);
  return (
    <TopDiv>
      <StyledBox>
        <TopTypography variant="h4">
          {feedback?.[0]?.title}
        </TopTypography>
        
        <MainDiv >
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
        </MainDiv>

        <ContentTypography
          variant="h4"
        >
         {feedback?.[0]?.heading}
        </ContentTypography>

        <StyledText
          id="standard-basic"
          label="Email Address..."
          variant="standard"/>
        <StyledButton variant="outlined" >
          {feedback?.[0]?.button?.[0]?.title}
        </StyledButton>
      </StyledBox>
    </TopDiv>
  );
};
