/* eslint-disable @next/next/no-img-element */
import { Box, Button, Grid, Typography } from "@mui/material";
import { AbTypography, BottomContainer, CatTypography, CusTypography, DivWrapper, LogDiv, StyledBox, StyledButton, StyledIcon, TopicDiv, ToppDiv } from "./Footer.Styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { useQuery } from "@apollo/client";
import { QUERY } from "@/pages/homepage/query";
import { api } from "@/service/backend-api";

export const Footer = () => {
  const { data } = useQuery(QUERY);
  const { homes } = data || {};
  const { footer, bottom } = homes?.data?.[0]?.attributes || {};
  console.log('footer', footer);
  console.log('bottom', bottom);

  const bottomBg = bottom?.[0]?.colors?.bottom?.[0]?.color?.backgroundcolor;
  const bottomText = bottom?.[0]?.colors?.bottom?.[0]?.color?.text;
  return (
    <>
    <ToppDiv>
      <StyledBox>
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
              {footer?.[0]?.description}
            </Typography>
            <DivWrapper
              sx={{
                gap: "25px",
                mt: "30px",
                position: 'relative',
                right: '20px'
              }}
            >
              <StyledIcon icon={faFacebookF} />
              <StyledIcon icon={faTwitter} />
              <StyledIcon icon={faLinkedinIn} />
              <StyledIcon icon={faInstagram} />
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
            <CatTypography sx={{ color: "black", fontWeight: "600", mb: "10px" }}>
              {footer?.[1]?.title}
            </CatTypography>
            <CatTypography sx={{ mb: "5px" }}>{footer?.[1]?.items?.[0]?.content}</CatTypography>
            <CatTypography sx={{ mb: "5px" }}>{footer?.[1]?.items?.[1]?.content}</CatTypography>
            <CatTypography sx={{ mb: "5px" }}>{footer?.[1]?.items?.[2]?.content}</CatTypography>
            <CatTypography sx={{ mb: "5px" }}>{footer?.[1]?.items?.[3]?.content}</CatTypography>
            <CatTypography sx={{ mb: "5px" }}>{footer?.[1]?.items?.[4]?.content}</CatTypography>
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
                <AbTypography
                  sx={{ color: "black", fontWeight: "600", mb: "10px" }}
                >
                  {footer?.[2]?.title}
                </AbTypography>
                <AbTypography sx={{ mb: "5px" }}>{footer?.[2]?.items?.[0]?.content}</AbTypography>
                <AbTypography sx={{ mb: "5px" }}>{footer?.[2]?.items?.[1]?.content}</AbTypography>
                <AbTypography sx={{ mb: "5px" }}>{footer?.[2]?.items?.[2]?.content}</AbTypography>
                <AbTypography sx={{ mb: "5px" }}>{footer?.[2]?.items?.[3]?.content}</AbTypography>
                <AbTypography sx={{ mb: "5px" }}>{footer?.[2]?.items?.[4]?.content}</AbTypography>
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
            <CusTypography sx={{ color: "black", fontWeight: "600", mb: "10px" }}>
              {footer?.[3]?.title}
            </CusTypography>
            <CusTypography sx={{ mb: "8px" }}>{footer?.[3]?.items?.[0]?.content}</CusTypography>
            <CusTypography sx={{ mb: "8px" }}>{footer?.[3]?.items?.[1]?.content}</CusTypography>
            <CusTypography sx={{ mb: "8px" }}>{footer?.[3]?.items?.[2]?.content}</CusTypography>
            <CusTypography sx={{ mb: "8px" }}>{footer?.[3]?.items?.[3]?.content}</CusTypography>
            <CusTypography sx={{ mb: "8px" }}>{footer?.[3]?.items?.[4]?.content}</CusTypography>
          </Grid>
        </Grid>
      </StyledBox>
      <BottomContainer bgColor={bottomBg} textColor={bottomText}>
        <TopicDiv>
          {bottom?.[0]?.content}
        </TopicDiv>
        <LogDiv>
          <img src={api + bottom?.[0]?.image?.data?.[0]?.attributes?.url} alt="no img" />
        </LogDiv>
        <StyledButton variant="text">
          {/* {bottom?.[0]?.button?.[0]?.title} {" "} */}
          <FontAwesomeIcon icon={faArrowUp} style={{ marginLeft: "10px" }} />
        </StyledButton>
      </BottomContainer>
      </ToppDiv>
    </>
  );
};
