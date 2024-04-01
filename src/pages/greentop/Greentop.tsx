/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import ListIcon from "@mui/icons-material/List";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Link, Typography } from "@mui/material";
import {
  BoxContainer,
  BrandTypography,
  DivCount,
  ImageStyled1,
  ImageStyled2,
  ImageStyled3,
  ImageStyled4,
  LgTypography,
  StyledDiv,
  TypographyLi,
  TypographyUl,
  TypographyContent,
  CountTypo1,
  CountTypo3,
  CountTypo2,
  CountTypo6,
  CountTypo5,
  CountTypo4,
  DivCount1,
  DivAmount,
  AmtTypo,
  ButtonDiv,
  ButtonDiv1,
  ButtonDiv2,
  ButtonDiv3,
  ButtonDiv4,
  ButtonDiv5,
  Typography1,
  Typography3,
  Typography2,
  BoxDetails1,
  DetailTypo,
  DetailTypo1,
  StyledBox,
  StyledBox1,
  BrandTypography1,
  BrandTypography2,
  DetailTypo2,
  DetailTypo3,
  DetailTypo4,
  SetIcon,
  BreadcrumbsStyle,
} from "./Greentop.styled";
import { TOPSQUERY } from "./query";
import { useQuery } from "@apollo/client";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { api } from "@/service/backend-api";

const Greentop = () => {
  const { data } = useQuery(TOPSQUERY);
  console.log(data, "data");
  const { greentops } = data || {};
  const { breadcrum, leftdetail, rightdetail, description } =
  greentops?.data?.[0]?.attributes || {};
  const GreentopDetail = () => {
    const [count, setCount] = useState(1);

    const increment = () => {
      setCount(count + 1);
    };
    const decrement = () => {
      setCount(count - 1);
    };
    const buttonBg = leftdetail?.[0]?.buy?.[0]?.color?.button?.[0]?.color?.background;
    const buttonText = leftdetail?.[0]?.buy?.[0]?.color?.button?.[0]?.color?.text;

    return (
      <>
        <SetIcon>
          <Typography sx={{ width: "max-content" }}>
            <ListIcon
              sx={{
                position: "relative",
                top: "5px",
                fontSize: "20px",
                marginRight: "8px",
              }}
            />
            {greentops?.data?.[0]?.attributes?.nav}
            <KeyboardArrowDownIcon
              sx={{
                position: "relative",
                top: "5px",
                fontSize: "20px",
                marginLeft: "8px",
              }}
            />
          </Typography>
        </SetIcon>
        <BoxContainer>
          <TypographyContent variant="h4">
            {breadcrum?.[0]?.title}
          </TypographyContent>
          <BreadcrumbsStyle>
            <Link
              href="/"
              sx={{
                fontFamily: "Inter",
                fontSize: { xs: "13px", sm: "15px", md: "18px" },
                textDecoration: "none",
                color: "inherit",
              }}
            >
              {breadcrum?.[0]?.links?.[0]?.link}
            </Link>
            <Link
              href="/"
              sx={{
                fontFamily: "Inter",
                fontSize: { xs: "13px", sm: "15px", md: "18px" },
                textDecoration: "none",
                color: "inherit",
              }}
            >
              {breadcrum?.[0]?.links?.[1]?.link}
            </Link>
            <Link
              href="#"
              sx={{
                fontFamily: "Inter",
                fontSize: { xs: "13px", sm: "15px", md: "18px" },
                textDecoration: "none",
                color: "inherit",
              }}
            >
              {breadcrum?.[0]?.links?.[2]?.link}
            </Link>
          </BreadcrumbsStyle>
        </BoxContainer>
        <StyledDiv>
          <StyledBox>
            <ImageStyled1>
              <img
                src={api+rightdetail?.[0]?.rightimages?.[0]?.image?.data?.[0]?.attributes?.url}
                alt={
                  rightdetail?.[0]?.rightimages?.[0]?.image?.data?.[0]
                    ?.attributes?.alternativeText
                }
                style={{ height: "89px", width: "108px",marginLeft:"20px" }}
              />
            </ImageStyled1>
            <ImageStyled2>
              <img src={rightdetail?.[0]?.rightimages?.[1]?.image?.data?.[0]?.attributes?.url} height="89px" width="108px" />
            </ImageStyled2>
            <ImageStyled3>
              <img src={rightdetail?.[0]?.rightimages?.[2]?.image?.data?.[0]?.attributes?.url} height="89px" width="108px" />
            </ImageStyled3>
            <ImageStyled4>
              <img src={rightdetail?.[0]?.rightimages?.[3]?.image?.data?.[0]?.attributes?.url} height="89px" width="108px" />
            </ImageStyled4>
          </StyledBox>
          <StyledBox1>
            <div>
              <img
                src={api+rightdetail?.[0]?.image?.data?.[0]?.attributes?.url}
                alt={rightdetail?.[0]?.image?.data?.[0]?.attributes?.alternativeText}
              />
            </div>
            <Typography
              sx={{
                color: "#6F6F6F",
                fontSize: "13px",
                marginTop: { xs: "20px", sm: "30px", md: "140px" },
              }}
            >
              {rightdetail?.[0]?.content}
            </Typography>
          </StyledBox1>
          <Box
            sx={{
              marginLeft: { xs: "0px", md: "10px", lg: "30px" },
              marginTop: "10px",
            }}
          >
            <BrandTypography>
              <b
                style={{
                  fontFamily: "Inter",
                  fontWeight: "500",
                  color: "#191919",
                }}
              >
                {leftdetail?.[0]?.details?.[0]?.content1}
              </b>
              {leftdetail?.[0]?.details?.[0]?.content2}
            </BrandTypography>
            <BrandTypography1>
              <b
                style={{
                  fontFamily: "Inter",
                  fontWeight: "500",
                  color: "#191919",
                }}
              >
                {leftdetail?.[0]?.details?.[1]?.content1}
              </b>
              {leftdetail?.[0]?.details?.[1]?.content2}
            </BrandTypography1>
            <BrandTypography2>
              <b
                style={{
                  fontFamily: "Inter",
                  fontWeight: "500",
                  color: "#191919",
                }}
              >
                {leftdetail?.[0]?.details?.[2]?.content1}
              </b>
              {leftdetail?.[0]?.details?.[2]?.content2}
            </BrandTypography2>
            <LgTypography>
              {leftdetail?.[0]?.name}
            </LgTypography>
            <div style={{ marginTop: "10px" }}>
              <img
                src="/img/Star 1.png"
                alt="star"
                height="20px"
                width="20px"
              />
              <img
                src="/img/Star 1.png"
                alt="star"
                height="20px"
                width="20px"
                style={{ marginLeft: "5px" }}
              />
              <img
                src="/img/Star 1.png"
                alt="star"
                height="20px"
                width="20px"
                style={{ marginLeft: "5px" }}
              />
              <img
                src="/img/Star 1.png"
                alt="star"
                height="20px"
                width="20px"
                style={{ marginLeft: "5px" }}
              />
              <img
                src="/img/Star 5.png"
                alt="star"
                height="20px"
                width="20px"
                style={{ marginLeft: "5px" }}
              />
            </div>
            <TypographyUl>
              <TypographyLi>
                {leftdetail?.[0]?.lists?.[0]?.content1}
              </TypographyLi>
              <TypographyLi>
                {leftdetail?.[0]?.lists?.[1]?.content1}
              </TypographyLi>
              <TypographyLi>
                {leftdetail?.[0]?.lists?.[2]?.content1}
              </TypographyLi>
              <TypographyLi>
                {leftdetail?.[0]?.lists?.[3]?.content1}
              </TypographyLi>
              <TypographyLi>
                {leftdetail?.[0]?.lists?.[4]?.content1}
              </TypographyLi>
            </TypographyUl>
            <DivCount>
              <CountTypo1>{leftdetail?.[0]?.multisize?.[0]?.title}</CountTypo1>
              <CountTypo2>{leftdetail?.[0]?.multisize?.[1]?.title}</CountTypo2>
              <CountTypo3>{leftdetail?.[0]?.multisize?.[2]?.title}</CountTypo3>
            </DivCount>
            <DivCount1>
              <CountTypo4>{leftdetail?.[0]?.multisize?.[3]?.title}</CountTypo4>
              <CountTypo5>{leftdetail?.[0]?.multisize?.[4]?.title}</CountTypo5>
              <CountTypo6>{leftdetail?.[0]?.multisize?.[5]?.title}</CountTypo6>
            </DivCount1>
            <DivAmount>{leftdetail?.[0]?.taxname}</DivAmount>
            <AmtTypo>{leftdetail?.[0]?.prize}</AmtTypo>
            <ButtonDiv>
              <ButtonDiv1 onClick={decrement}>-</ButtonDiv1>
              <ButtonDiv2>{count}</ButtonDiv2>
              <ButtonDiv3 onClick={increment}>+</ButtonDiv3>
              <ButtonDiv4 bgcolor={buttonBg} textcolor={buttonText}>{leftdetail?.[0]?.buy?.[0]?.title}</ButtonDiv4>
              <ButtonDiv5>{leftdetail?.[0]?.buy?.[1]?.title}</ButtonDiv5>
            </ButtonDiv>
          </Box>
        </StyledDiv>
        <Tabs>
          <TabList style={{display:"flex",textAlign:"center",justifyContent:"center",marginTop:"120px",listStyle:"none"}}>
            <Typography1>{description?.[0]?.link?.[0]?.link}</Typography1>
            <Typography2>{description?.[0]?.link?.[1]?.link}</Typography2>
            <Typography3>{description?.[0]?.link?.[2]?.link}</Typography3>
          </TabList>
          <BoxDetails1>
          <DetailTypo> {description?.[0]?.description} </DetailTypo>
          <DetailTypo1>{description?.[0]?.description1}</DetailTypo1>
          <DetailTypo2>
          {description?.[0]?.description2}
            <Link
              href="#"
              sx={{
                fontFamily: "Inter",
                fontWeight: "300",
                color: "red",
                textDecoration: "none",
                visibility: { xs: "visible", md: "hidden" },
              }}
            >
             {description?.[0]?.text}
            </Link>
          </DetailTypo2>
          <DetailTypo3> {description?.[0]?.description3}</DetailTypo3>
          <DetailTypo4>
          {description?.[0]?.description4}
            <Link
              href="#"
              style={{
                fontFamily: "Inter",
                fontWeight: "300",
                color: "red",
                textDecoration: "none",
              }}
            >
             {description?.[0]?.text}
            </Link>
          </DetailTypo4>
          </BoxDetails1>
          <BoxDetails1>
          <DetailTypo> {description?.[0]?.description} </DetailTypo>
          {/* <DetailTypo1>{description?.[0]?.description1}</DetailTypo1> */}
          <DetailTypo2>
          {description?.[0]?.description2}
            <Link
              href="#"
              sx={{
                fontFamily: "Inter",
                fontWeight: "300",
                color: "red",
                textDecoration: "none",
                visibility: { xs: "visible", md: "hidden" },
              }}
            >
             {description?.[0]?.text}
            </Link>
          </DetailTypo2>
          <DetailTypo3> {description?.[0]?.description3}</DetailTypo3>
          <DetailTypo4>
          {description?.[0]?.description4}
            <Link
              href="#"
              style={{
                fontFamily: "Inter",
                fontWeight: "300",
                color: "red",
                textDecoration: "none",
              }}
            >
             {description?.[0]?.text}
            </Link>
          </DetailTypo4>
          </BoxDetails1>
          <BoxDetails1>
          <DetailTypo> {description?.[0]?.description} </DetailTypo>
          <DetailTypo1>{description?.[0]?.description1}</DetailTypo1>
          <DetailTypo2>
          {description?.[0]?.description2}
            <Link
              href="#"
              sx={{
                fontFamily: "Inter",
                fontWeight: "300",
                color: "red",
                textDecoration: "none",
                visibility: { xs: "visible", md: "hidden" },
              }}
            >
             {description?.[0]?.text}
            </Link>
          </DetailTypo2>
          <DetailTypo4>
          {description?.[0]?.description4}
            <Link
              href="#"
              style={{
                fontFamily: "Inter",
                fontWeight: "300",
                color: "red",
                textDecoration: "none",
              }}
            >
             {description?.[0]?.text}
            </Link>
          </DetailTypo4>
          </BoxDetails1>
        </Tabs>
      </>
    );
  };

  return (
    <>
      <GreentopDetail />
    </>
  );
};

export default Greentop;
