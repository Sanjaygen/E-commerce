import React from "react";
import { Grid, Box } from "@mui/material";
import {
  FrameRightStyled,
  FrameStyled,
  ImageBorder,
  ImageStyled,
  LeftColumn,
  MainDiv,
  RightColumn,
  StyledButton,
  TypographyContent,
  TypographyStyled,
} from "./Intro.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { LeftFrame } from "../../../public/svg/LeftFrame";
import { RightFrame } from "../../../public/svg/RightFrame";
import { useQuery } from "@apollo/client";
import { QUERY } from "../homepage/query";
import { api } from "@/service/backend-api";

const Intro = () => {
  const { data } = useQuery(QUERY);
  const { homes } = data || {};
  const { topmain } = homes?.data?.[0]?.attributes || {};
  console.log('topmain', topmain);

  const leftFrameData = topmain?.[0]?.frame1?.data?.[0]?.attributes || {};
  const rightFrameData = topmain?.[0]?.frame2?.data?.[0]?.attributes || {};

  console.log("leftFrameData", leftFrameData);
  console.log("rightFrameData", rightFrameData);

  const introButton = topmain?.[0]?.topbutton?.[0]?.color?.topButton?.[0]?.background;
  const introText = topmain?.[0]?.topbutton?.[0]?.color?.topButton?.[0]?.text;

  return (
    <>
    <MainDiv>
      <FrameStyled>
        <LeftFrame {...leftFrameData} />
      </FrameStyled>
      <Box sx={{ margin: "90px 200px 0 220px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <LeftColumn>
              <TypographyStyled>{topmain?.[0].title}</TypographyStyled>
              <TypographyContent>
                {topmain?.[0].description}
              </TypographyContent>
              <StyledButton variant="contained" bgColor={introButton} textColor={introText}>
                {" "}
                <FontAwesomeIcon icon={faShoppingBag} scale={"1.25x"} />
                {topmain?.[0].topbutton?.[0]?.title}
              </StyledButton>
            </LeftColumn>
          </Grid>
          <Grid item xs={12} sm={6}>
            <RightColumn>
              <ImageBorder>
              <ImageStyled src={api + topmain?.[0]?.image?.data?.[0]?.attributes?.url} alt="Mountains" />
              </ImageBorder>
            </RightColumn>
          </Grid>
        </Grid>
      </Box>
      <FrameRightStyled>
        <RightFrame style={{ height: '50px', width: '50px' }} {...rightFrameData} />
      </FrameRightStyled>
      </MainDiv>
    </>
  );
};

export default Intro;
