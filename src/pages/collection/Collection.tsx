"use client";
import React, { useState } from "react";
import ListIcon from '@mui/icons-material/List';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, Breadcrumbs,Link, Typography } from "@mui/material";
import { BoxContainer, BrandTypography, DivCount, ImageStyled1, ImageStyled2, ImageStyled3, ImageStyled4, LgTypography, StyledDiv, TypographyLi, TypographyUl, TypographyContent, CountTypo1, CountTypo3, CountTypo2, CountTypo6, CountTypo5, CountTypo4, DivCount1, DivAmount, AmtTypo, ButtonDiv, ButtonDiv1, ButtonDiv2, ButtonDiv3, ButtonDiv4, ButtonDiv5, BoxDetails, Typography1, Typography3, Typography2, BoxDetails1, DetailTypo, DetailTypo1, StyledBox, StyledBox1, BrandTypography1, BrandTypography2, DetailTypo2, DetailTypo3, DetailTypo4, SetIcon, BreadcrumbsStyle } from "./Collection.styled";

const Collection = () => {
    const CollectionDetail = () => {
        const [count, setCount] = useState(1);

        const increment = () => {
            setCount(count + 1);
        }
        const decrement = () => {
            setCount(count - 1);
        }
        return (
            <>
                <SetIcon>
                    <Typography sx={{width:"max-content"}}>
                        <ListIcon sx={{ position: "relative", top: "5px", fontSize: '20px', marginRight: "8px" }} />
                            All Categories
                        <KeyboardArrowDownIcon sx={{ position: "relative", top: "5px", fontSize: '20px', marginLeft: "8px" }} />
                    </Typography>
                </SetIcon>
                <BoxContainer>
                    <TypographyContent variant="h4">TV COLLECTION</TypographyContent>
                    <BreadcrumbsStyle>
                        <Link href="/" sx={{ fontFamily: "Inter", fontSize: { xs: "13px", sm: "15px", md: "18px" },textDecoration:"none",color:"inherit" }}>
                            HOME
                        </Link>
                        <Link href="/"
                            sx={{ fontFamily: "Inter", fontSize: { xs: "13px", sm: "15px", md: "18px" },textDecoration:"none",color:"inherit" }}
                        >
                            PRODUCT
                        </Link>
                        <Link href="#"
                            sx={{ fontFamily: "Inter", fontSize: { xs: "13px", sm: "15px", md: "18px" },textDecoration:"none",color:"inherit"  }}
                        >
                            TV COLLECTION
                        </Link>
                    </BreadcrumbsStyle>
                </BoxContainer>
                <StyledDiv>
                    <StyledBox>
                        <ImageStyled1>
                            <img src="/img/image 2.png" height="89px" width="138px" />
                        </ImageStyled1>
                        <ImageStyled2>
                            <img src="/img/image 3.png" height="89px" width="138px" />
                        </ImageStyled2>
                        <ImageStyled3>
                            <img src="/img/image 4.png" height="89px" width="138px" />
                        </ImageStyled3>
                        <ImageStyled4>
                            <img src="/img/image 5.png" height="89px" width="138px" />
                        </ImageStyled4>
                    </StyledBox>
                    <StyledBox1>
                        <div>
                            <img src="/img/image 6.png" height="300px" width="400px" />
                        </div>
                        <Typography sx={{ color: "#6F6F6F", fontSize: "13px", marginTop: {xs:"20px",sm:"-20px",md:"140px"} }}>*LG C2 42 (106cm) 4K Smart OLED evo TV</Typography>
                    </StyledBox1>
                    <Box sx={{ marginLeft: {xs:"0px",md:"10px",lg:"30px"},marginTop:"10px" }}>
                        <BrandTypography><b style={{ fontFamily: "Inter", fontWeight: "500", color: "#191919" }}>Brand:</b>LG</BrandTypography>
                        <BrandTypography1><b style={{ fontFamily: "Inter", fontWeight: "500", color: "#191919" }}>Model:</b>OLED42C2PSA</BrandTypography1>
                        <BrandTypography2><b style={{ fontFamily: "Inter", fontWeight: "500", color: "#191919" }}>Availability:</b>Only 2 in Stock</BrandTypography2>
                        <LgTypography>LG C2 42 (106cm) 4K Smart OLED evo TV | WebOS | Cinema HDR</LgTypography>
                        <div style={{ marginTop: "10px" }}>
                            <img src="/img/Star 1.png" alt="star" height="20px" width="20px" />
                            <img src="/img/Star 1.png" alt="star" height="20px" width="20px" style={{ marginLeft: "5px" }} />
                            <img src="/img/Star 1.png" alt="star" height="20px" width="20px" style={{ marginLeft: "5px" }} />
                            <img src="/img/Star 1.png" alt="star" height="20px" width="20px" style={{ marginLeft: "5px" }} />
                            <img src="/img/Star 5.png" alt="star" height="20px" width="20px" style={{ marginLeft: "5px" }} />
                        </div>
                        <TypographyUl>
                            <TypographyLi>α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling</TypographyLi>
                            <TypographyLi>Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume</TypographyLi>
                            <TypographyLi>Hands-free Voice Control, Always Ready</TypographyLi>
                            <TypographyLi>Dolby Vision IQ with Precision Detail, Dolby Atmos, Filmmaker Mode</TypographyLi>
                            <TypographyLi>Eye Comfort Display: Low-Blue Light, Flicker-Free</TypographyLi>
                        </TypographyUl>
                        <DivCount>
                            <CountTypo1>106 cm (42)</CountTypo1>
                            <CountTypo2>121 cm (48)</CountTypo2>
                            <CountTypo3>139 cm (55)</CountTypo3>
                        </DivCount>
                        <DivCount1>
                            <CountTypo4>106 cm (42)</CountTypo4>
                            <CountTypo5>121 cm (48)</CountTypo5>
                            <CountTypo6>139 cm (55)</CountTypo6>
                        </DivCount1>
                        <DivAmount>USD(incl. of all taxes):</DivAmount>
                        <AmtTypo>$600.72</AmtTypo>
                        <ButtonDiv>
                            <ButtonDiv1 onClick={decrement}>-</ButtonDiv1>
                            <ButtonDiv2>{count}</ButtonDiv2>
                            <ButtonDiv3 onClick={increment}>+</ButtonDiv3>
                            <ButtonDiv4>Buy Now</ButtonDiv4>
                            <ButtonDiv5>Add to Cart</ButtonDiv5>
                        </ButtonDiv>
                    </Box>
                </StyledDiv>
                <BoxDetails>
                    <Typography1>Description</Typography1>
                    <Typography2>Specification</Typography2>
                    <Typography3>Rewiews</Typography3>
                </BoxDetails>
                <BoxDetails1>
                    <DetailTypo>
                        The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all-around OLED TV we've tested. Although all OLEDs deliver similar fantastic picture quality, this one stands out for its value because it has many gaming-oriented features that are great for gamers.
                    </DetailTypo>
                    <DetailTypo1>
                        *Only 65G2 is shown in the image for example purposes. All 2022 LG OLED models feature eco-friendly packaging.
                    </DetailTypo1>
                    <DetailTypo2>
                        **65C2 Stand model is at a minimum 39% lighter than the C1 series.
                        <Link href="#" sx={{fontFamily:"Inter",fontWeight:"300",color:"red",textDecoration:"none",visibility:{xs:"visible",md:"hidden"}}}>More...</Link>
                    </DetailTypo2>
                    <DetailTypo3>
                        ***The 'Reducing CO2' footprint label applies to 65C2 only. All other C2 models feature a 'CO2 Measured' label.
                    </DetailTypo3>
                    <DetailTypo4>
                        ****UL ECV certification based on TV frame and back cover. Percentage of recycled content varies by model and size.
                        <Link href="#" style={{fontFamily:"Inter",fontWeight:"300",color:"red",textDecoration:"none"}}>More...</Link>
                    </DetailTypo4>
                </BoxDetails1>
            </>
        )

    }

    return (
        <>
            < CollectionDetail />
        </>
    )
}

export default Collection;