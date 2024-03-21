/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import { Box, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { CardButton, CardButton1, CardDiv, CardTypo, CardTypo1, CardTypo2, CardTypo3, CarouselBox, StyleTypo, StyleTypo1, TypoProducts, TypographyAmt, TypographyAmt1 } from './Relatedproducts.styled'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { PRODUCTSQUERY } from '../collection/query';
import { useQuery } from '@apollo/client';

const Relatedproducts = () => {
    const { data } = useQuery(PRODUCTSQUERY);
    const { products } = data || {};
    const { cards} = products?.data?.[0]?.attributes || {};
    console.log( cards,'cards');
    const cardButton = cards?.[0]?.cardbutton?.[0]?.color?.button?.[0]?.color?.background;
    const cardText = cards?.[0]?.cardbutton?.[0]?.color?.button?.[0]?.color?.text;
    const Carousel = () => {
        return (
            <>
                <TypoProducts variant="h4">{products?.data?.[0]?.attributes?.title}</TypoProducts>
                <Box>
                    <CarouselBox>
                        <Card sx={{width:{xs:"232px",md:"300px"},height:{xs:"305px",md:"361px"},background:"#F1F1F1",boxShadow:"none"}}>
                            <CardDiv>
                                <CardTypo>{cards?.[0]?.text}</CardTypo>
                                <img src={cards?.[0]?.subimage?.data?.[0]?.attributes?.url}/>
                            </CardDiv>
                            <CardMedia
                                sx={{ height:{xs:"136px",sm:"180px",md:"200px"},width:{xs:"132px",sm:"200px",md:"200px"},marginLeft:{xs:"20px",sm:"6px",md:"10px",lg:"40px"},marginTop:{xs:"20px",md:"0px"}}}
                                image={cards?.[0]?.image?.data?.[0]?.attributes?.url}
                            />
                            <CardContent>
                                <CardButton bgcolor={cardButton} textcolor= {cardText}><ShoppingCartOutlinedIcon sx={{color:"#6F6F6F",fontSize:"15px"}}/> {cards?.[0]?.cardbutton?.[0].title}</CardButton>
                            </CardContent>
                            <StyleTypo>{cards?.[0]?.content}</StyleTypo>
                            <TypographyAmt>{cards?.[0]?.prize1}</TypographyAmt>
                        </Card>
                        <Card sx={{width:{xs:"232px",md:"300px"},height:{xs:"305px",md:"361px"},background:"#F1F1F1",boxShadow:"none"}}>
                            <CardDiv>
                                <CardTypo1>{cards?.[1]?.text}</CardTypo1>
                                <img src={cards?.[1]?.subimage?.data?.[0]?.attributes?.url}/>
                            </CardDiv>
                            <CardMedia
                                sx={{ height:{xs:"136px",sm:"180px",md:"200px"},width:{xs:"132px",sm:"200px",md:"200px"},marginLeft:{xs:"20px",sm:"6px",md:"10px",lg:"40px"},marginTop:{xs:"20px",md:"0px"}}}
                                image={cards?.[1]?.image?.data?.[0]?.attributes?.url}
                            />
                            <CardContent>
                                <CardButton bgcolor={cardButton} textcolor= {cardText}><ShoppingCartOutlinedIcon sx={{color:"#6F6F6F",fontSize:"15px"}}/> {cards?.[1]?.cardbutton?.[0].title}</CardButton>
                            </CardContent>
                            <StyleTypo>{cards?.[1]?.content}</StyleTypo>
                            <TypographyAmt>{cards?.[1]?.prize1}</TypographyAmt>
                        </Card>
                        <Card sx={{width:{sm:"232px",md:"300px"},height:{sm:"305px",md:"361px"},background:"#F1F1F1",boxShadow:"none",display:{xs:"none",sm:"block"}}}>
                            <CardDiv>
                                <CardTypo2>{cards?.[2]?.text}</CardTypo2>
                                <img src={cards?.[2]?.subimage?.data?.[0]?.attributes?.url}/>
                            </CardDiv>
                            <CardMedia
                                sx={{ height:{xs:"136px",sm:"180px",md:"200px"},width:{xs:"132px",sm:"200px",md:"200px"},marginLeft:{xs:"20px",sm:"6px",md:"10px",lg:"40px"},marginTop:{xs:"20px",md:"0px"}}}
                                image={cards?.[2]?.image?.data?.[0]?.attributes?.url}
                            />
                            <CardContent>
                                <CardButton bgcolor={cardButton} textcolor= {cardText}><ShoppingCartOutlinedIcon sx={{color:"#6F6F6F",fontSize:"15px"}}/> {cards?.[2]?.cardbutton?.[0].title}</CardButton>
                            </CardContent>
                            <StyleTypo1>{cards?.[2]?.content}</StyleTypo1>
                            <TypographyAmt1>{cards?.[2]?.prize1}</TypographyAmt1>
                        </Card>
                        <Card sx={{width:"300px",height:"361px",background:"#F1F1F1",boxShadow:"none",display:{xs:"none",md:"block"}}}>
                            <CardDiv>
                                <CardTypo3>{cards?.[3]?.text}</CardTypo3>
                                <img src={cards?.[3]?.subimage?.data?.[0]?.attributes?.url}/>
                            </CardDiv>
                            <CardMedia
                                sx={{ height: "120px",width:"180px",marginLeft:{xs:"20px",sm:"6px",md:"20px",lg:"40px"},marginTop:"45px"}}
                                image={cards?.[3]?.image?.data?.[0]?.attributes?.url}
                            />
                            <CardContent>
                                <CardButton1><ShoppingCartOutlinedIcon sx={{color:"#E73C17",fontSize:"15px"}}/> {cards?.[3]?.cardbutton?.[0].title}</CardButton1>
                            </CardContent>
                            <StyleTypo1>{cards?.[3]?.content}</StyleTypo1>
                            <TypographyAmt1>{cards?.[3]?.prize1}</TypographyAmt1>
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
