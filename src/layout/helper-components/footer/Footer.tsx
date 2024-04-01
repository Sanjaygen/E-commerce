/* eslint-disable @next/next/no-img-element */
import { Box, Button, Grid, Typography } from "@mui/material";
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
import { AbTypography, AbTypography1, BottomContainer, CatTypography, CatTypography1, CusTypography, CusTypography1, DivWrapper, LogDiv, StyledBox, StyledButton, StyledIcon, TopicDiv, ToppDiv } from "./Footer.Styled";

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
          sx={{ margin: "auto", padding: {md:"50px"},paddingLeft:{xs:"50px"}, marginLeft: "80px" }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={3.2}
            sx={{ marginBottom: { xs: "20px", sm: 0 } }}
          >
            <Typography
              sx={{ fontSize: "28px", fontWeight: "450", mb: "10px",marginTop:"10px" }}
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
            <Typography style={{ color: 'rgba(30, 40, 50, 0.75)', fontSize: '13px', lineHeight: '30px' }}>
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
            lg={1.5}
            sx={{
              marginBottom: { xs: "20px", sm: 0,}, marginLeft: {xs:"50px",sm:"10px",md:"-40px",xl:"50px"},marginTop:{sm:"40px",md:0}
            }}
          >
            <CatTypography sx={{ color: "black", fontWeight: "600", mb: "10px", mt:{sm:"-20px",md:"0px"}}}>
              {footer?.[1]?.title}
            </CatTypography>
            <CatTypography1 sx={{ mb: "5px" }}>{footer?.[1]?.items?.[0]?.content}</CatTypography1>
            <CatTypography1 sx={{ mb: "5px" }}>{footer?.[1]?.items?.[1]?.content}</CatTypography1>
            <CatTypography1 sx={{ mb: "5px" }}>{footer?.[1]?.items?.[2]?.content}</CatTypography1>
            <CatTypography1 sx={{ mb: "5px" }}>{footer?.[1]?.items?.[3]?.content}</CatTypography1>
            <CatTypography1 sx={{ mb: "5px" }}>{footer?.[1]?.items?.[4]?.content}</CatTypography1>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={5}
            lg={4}
            sx={{ marginBottom: { xs: "20px", sm: 0,} ,marginLeft: {xs:"180px",md:"30px"} }}
          >
            <Grid container spacing={0} sx={{ marginLeft: {lg:"90px"} }}>
              <Grid item xs={8} md={6} lg={7}>
                <AbTypography
                  sx={{ color: "black", fontWeight: "600", mb: "10px", mt:{sm:"20px",md:"0px",lg:"5px"}}}
                >
                  {footer?.[2]?.title}
                </AbTypography>
                <AbTypography1 sx={{ mb: "5px" }}>{footer?.[2]?.items?.[0]?.content}</AbTypography1>
                <AbTypography1 sx={{ mb: "5px" }}>{footer?.[2]?.items?.[1]?.content}</AbTypography1>
                <AbTypography1 sx={{ mb: "5px" }}>{footer?.[2]?.items?.[2]?.content}</AbTypography1>
                <AbTypography1 sx={{ mb: "5px" }}>{footer?.[2]?.items?.[3]?.content}</AbTypography1>
                <AbTypography1 sx={{ mb: "5px" }}>{footer?.[2]?.items?.[4]?.content}</AbTypography1>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={2.5}
            sx={{ marginBottom: { xs: "20px", sm: 0 }, marginLeft: {xs:"40px",md:"50px",lg:"50px",xl:"0px"},marginTop:{xs:"0px",sm:"-20px",md:"0px",lg:"-15px",xl:"0px"}}}
          >
            <CusTypography sx={{ color: "black", fontWeight: "600", mb: {sm:"-138px",md:"10px"} }}>
              {footer?.[3]?.title}
            </CusTypography>
            <CusTypography1 sx={{ mb: {sm:"-180px",md:"8px"} }}>{footer?.[3]?.items?.[0]?.content}</CusTypography1>
            <CusTypography1 sx={{ mb: {sm:"-215px",md:"8px"} }}>{footer?.[3]?.items?.[1]?.content}</CusTypography1>
            <CusTypography1 sx={{ mb: {sm:"-254px",md:"8px"} }}>{footer?.[3]?.items?.[2]?.content}</CusTypography1>
            <CusTypography1 sx={{ mb: {sm:"-290px",md:"8px"} }}>{footer?.[3]?.items?.[3]?.content}</CusTypography1>
            <CusTypography1 sx={{ mb: {sm:"-325px",md:"8px"} }}>{footer?.[3]?.items?.[4]?.content}</CusTypography1>
          </Grid>
        </Grid>
      </StyledBox>
      <BottomContainer bgcolor={bottomBg} textcolor={bottomText}>
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
