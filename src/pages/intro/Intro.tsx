import React from "react";
import { Grid, Box } from "@mui/material";
import {
FrameRightStyled,
  FrameStyled,
  ImageBorder,
  ImageStyled,
  LeftColumn,
  RightColumn,
  StyledButton,
  TypographyContent,
  TypographyStyled,
} from "./Intro.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { LeftFrame } from "../../../public/svg/LeftFrame";
import { RightFrame } from "../../../public/svg/RightFrame";

const Intro = () => {
  return (
    <>
    <FrameStyled>
    <LeftFrame />
    </FrameStyled>
    <Box sx={{ margin: "90px 200px 0 220px" }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <LeftColumn>
            <TypographyStyled>Collections</TypographyStyled>
            <TypographyContent>
              You Can Explore And Shop Many Different Collections <br/> From Various
              brands here.
            </TypographyContent>
            <StyledButton variant="contained">
              {" "}
              <FontAwesomeIcon icon={faShoppingBag} scale={"1.25x"} /> Shop
                Now
            </StyledButton>
          </LeftColumn>
        </Grid>
        <Grid item xs={6}>
          <RightColumn>
            <ImageStyled src="img/19.png" alt="Mountains" />
            <ImageBorder />
          </RightColumn>
        </Grid>
      </Grid>
    </Box>
    <FrameRightStyled>
        <RightFrame />
      </FrameRightStyled>
    </>
  );
};

export default Intro;
