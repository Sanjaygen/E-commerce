"use client";
import { Box, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { CardButton, CardButton1, CardDiv, CardTypo, CardTypo1, CardTypo2, CardTypo3, CarouselBox, StyleTypo, StyleTypo1, TypoProducts, TypographyAmt, TypographyAmt1 } from './Relatedproducts.styled'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Relatedproducts = () => {
    const Carousel = () => {
        return (
            <>
                <TypoProducts variant="h4">Related Products</TypoProducts>
                <Box>
                    <CarouselBox>
                        <Card sx={{width:{xs:"232px",md:"300px"},height:{xs:"305px",md:"361px"},background:"#F1F1F1",boxShadow:"none"}}>
                            <CardDiv>
                                <CardTypo>NEW</CardTypo>
                                <img src="/img/ant-design_heart-filled (1).png"/>
                            </CardDiv>
                            <CardMedia
                                sx={{ height:{xs:"136px",sm:"180px",md:"200px"},width:{xs:"132px",sm:"200px",md:"200px"},marginLeft:{xs:"20px",sm:"6px",md:"10px",lg:"40px"},marginTop:{xs:"20px",md:"0px"}}}
                                image="/img/image 7.png"
                            />
                            <CardContent>
                                <CardButton><ShoppingCartOutlinedIcon sx={{color:"#6F6F6F",fontSize:"15px"}}/> Add to Cart</CardButton>
                            </CardContent>
                            <StyleTypo>Sony BRAVIA XR Android Tv</StyleTypo>
                            <TypographyAmt>$800.22</TypographyAmt>
                        </Card>
                        <Card sx={{width:{xs:"232px",md:"300px"},height:{xs:"305px",md:"361px"},background:"#F1F1F1",boxShadow:"none"}}>
                            <CardDiv>
                                <CardTypo1>-10%</CardTypo1>
                                <img src="/img/ant-design_heart-filled.png"/>
                            </CardDiv>
                            <CardMedia
                                sx={{ height:{xs:"136px",sm:"180px",md:"200px"},width:{xs:"132px",sm:"200px",md:"200px"},marginLeft:{xs:"20px",sm:"6px",md:"10px",lg:"40px"},marginTop:{xs:"20px",md:"0px"}}}
                                image="/img/image 8.png"
                            />
                            <CardContent>
                                <CardButton><ShoppingCartOutlinedIcon sx={{color:"#6F6F6F",fontSize:"15px"}}/> Add to Cart</CardButton>
                            </CardContent>
                            <StyleTypo>Mi P1 Smart Android HD TV</StyleTypo>
                            <TypographyAmt>$400.00</TypographyAmt>
                        </Card>
                        <Card sx={{width:{sm:"232px",md:"300px"},height:{sm:"305px",md:"361px"},background:"#F1F1F1",boxShadow:"none",display:{xs:"none",sm:"block"}}}>
                            <CardDiv>
                                <CardTypo2>HOT</CardTypo2>
                                <img src="/img/ant-design_heart-filled.png"/>
                            </CardDiv>
                            <CardMedia
                                sx={{ height:{xs:"136px",sm:"180px",md:"200px"},width:{xs:"132px",sm:"200px",md:"200px"},marginLeft:{xs:"20px",sm:"6px",md:"10px",lg:"40px"},marginTop:{xs:"20px",md:"0px"}}}
                                image="/img/image 9.png"
                            />
                            <CardContent>
                                <CardButton><ShoppingCartOutlinedIcon sx={{color:"#6F6F6F",fontSize:"15px"}}/> Add to Cart</CardButton>
                            </CardContent>
                            <StyleTypo1>Konka OLED Android Tv</StyleTypo1>
                            <TypographyAmt1>$700.00</TypographyAmt1>
                        </Card>
                        <Card sx={{width:"300px",height:"361px",background:"#F1F1F1",boxShadow:"none",display:{xs:"none",md:"block"}}}>
                            <CardDiv>
                                <CardTypo3>2 Years Warranty</CardTypo3>
                                <img src="/img/ant-design_heart-filled.png"/>
                            </CardDiv>
                            <CardMedia
                                sx={{ height: "120px",width:"180px",marginLeft:{xs:"20px",sm:"6px",md:"20px",lg:"40px"},marginTop:"45px"}}
                                image="/img/image 10.png"
                            />
                            <CardContent>
                                <CardButton1><ShoppingCartOutlinedIcon sx={{color:"#E73C17",fontSize:"15px"}}/> Out of Stock</CardButton1>
                            </CardContent>
                            <StyleTypo1>TCL Roku Android Tv</StyleTypo1>
                            <TypographyAmt1>$800.00</TypographyAmt1>
                        </Card>
                    </CarouselBox>
                </Box>
            </>
        )
    }
    return (
        <>
            <Carousel />
        </>
    )
}

export default Relatedproducts;
