/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import { Box, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { BoxStyled, CardButton, CardButton1, CardDiv, CardTypo, CardTypo1, CardTypo2, CardTypo3, CarouselBox, StyleTypo, StyleTypo1, TypoProducts, TypographyAmt, TypographyAmt1 } from './Greentoprelate.styled'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useQuery } from '@apollo/client';
import { TOPSQUERY } from '../greentop/query';

const Greentoprelated = () => {
    const { data } = useQuery(TOPSQUERY);
    const { greentops } = data || {};
    const { cards} = greentops?.data?.[0]?.attributes || {};
    console.log( cards,'cards');
    const cardButton = cards?.[0]?.cardbutton?.[0]?.color?.button?.[0]?.color?.background;
    const cardText = cards?.[0]?.cardbutton?.[0]?.color?.button?.[0]?.color?.text;
    const Carousel = () => {
        return (
            <>
            <BoxStyled>
                <TypoProducts variant="h4">{greentops?.data?.[0]?.attributes?.heading}</TypoProducts> 
                    <CarouselBox>
                        <Card sx={{width:{xs:"232px",md:"300px"},height:{xs:"310px",md:"361px"},background:"#F1F1F1",boxShadow:"none"}}>
                            <CardDiv>
                                <CardTypo>{cards?.[0]?.title}</CardTypo>
                                <img src={cards?.[0]?.subimage?.data?.[0]?.attributes?.url}/>
                            </CardDiv>
                            <CardMedia
                                sx={{ height:{xs:"136px",sm:"170px",md:"200px"},width:{xs:"132px",sm:"190px",md:"200px"},marginLeft:{xs:"20px",sm:"12px",md:"10px",lg:"40px"},marginTop:{xs:"20px",md:"10px"}}}
                                image={cards?.[0]?.image?.data?.[0]?.attributes?.url}
                            />
                            <CardContent>
                                <CardButton bgcolor={cardButton} textcolor= {cardText}><ShoppingCartOutlinedIcon sx={{color:"#6F6F6F",fontSize:"15px"}}/> {cards?.[0]?.cardcontnet?.[0].title}</CardButton>
                            </CardContent>
                            <StyleTypo>{cards?.[0]?.text}</StyleTypo>
                            <TypographyAmt>{cards?.[0]?.prize}</TypographyAmt>
                        </Card>
                        <Card sx={{width:{xs:"232px",md:"300px"},height:{xs:"310px",md:"361px"},background:"#F1F1F1",boxShadow:"none"}}>
                            <CardDiv>
                                <CardTypo1>{cards?.[1]?.title}</CardTypo1>
                                <img src={cards?.[1]?.subimage?.data?.[0]?.attributes?.url}/>
                            </CardDiv>
                            <CardMedia
                                sx={{ height:{xs:"136px",sm:"170px",md:"200px"},width:{xs:"132px",sm:"190px",md:"200px"},marginLeft:{xs:"20px",sm:"12px",md:"10px",lg:"40px"},marginTop:{xs:"20px",md:"10px"}}}
                                image={cards?.[1]?.image?.data?.[0]?.attributes?.url}
                            />
                            <CardContent>
                                <CardButton bgcolor={cardButton} textcolor= {cardText}><ShoppingCartOutlinedIcon sx={{color:"#6F6F6F",fontSize:"15px"}}/> {cards?.[1]?.cardcontnet?.[0].title}</CardButton>
                            </CardContent>
                            <StyleTypo>{cards?.[1]?.text}</StyleTypo>
                            <TypographyAmt>{cards?.[1]?.prize}</TypographyAmt>
                        </Card>
                        <Card sx={{width:{sm:"232px",md:"300px"},height:{sm:"310px",md:"361px"},background:"#F1F1F1",boxShadow:"none",display:{xs:"none",sm:"block"}}}>
                            <CardDiv>
                                <CardTypo2>{cards?.[2]?.title}</CardTypo2>
                                <img src={cards?.[2]?.subimage?.data?.[0]?.attributes?.url}/>
                            </CardDiv>
                            <CardMedia
                                sx={{ height:{xs:"136px",sm:"170px",md:"200px"},width:{xs:"132px",sm:"190px",md:"200px"},marginLeft:{xs:"20px",sm:"12px",md:"10px",lg:"40px"},marginTop:{xs:"20px",md:"10px"}}}
                                image={cards?.[2]?.image?.data?.[0]?.attributes?.url}
                            />
                            <CardContent>
                                <CardButton bgcolor={cardButton} textcolor= {cardText}><ShoppingCartOutlinedIcon sx={{color:"#6F6F6F",fontSize:"15px"}}/> {cards?.[2]?.cardcontnet?.[0].title}</CardButton>
                            </CardContent>
                            <StyleTypo1>{cards?.[2]?.text}</StyleTypo1>
                            <TypographyAmt1>{cards?.[2]?.prize}</TypographyAmt1>
                        </Card>
                        <Card sx={{width:"300px",height:"361px",background:"#F1F1F1",boxShadow:"none",display:{xs:"none",md:"block"}}}>
                            <CardDiv>
                                <CardTypo3>{cards?.[3]?.title}</CardTypo3>
                                <img src={cards?.[3]?.subimage?.data?.[0]?.attributes?.url}/>
                            </CardDiv>
                            <CardMedia
                                sx={{ height: "200px",width:"200px",marginLeft:{xs:"20px",sm:"6px",md:"10px",lg:"40px"},marginTop:"10px"}}
                                image={cards?.[3]?.image?.data?.[0]?.attributes?.url}
                            />
                            <CardContent>
                                <CardButton1><ShoppingCartOutlinedIcon sx={{color:"#E73C17",fontSize:"15px"}}/> {cards?.[3]?.cardcontnet?.[0].title}</CardButton1>
                            </CardContent>
                            <StyleTypo1 style={{marginLeft:"10px"}}>{cards?.[3]?.text}</StyleTypo1>
                            <TypographyAmt1>{cards?.[3]?.prize}</TypographyAmt1>
                        </Card>
                    </CarouselBox>
                </BoxStyled>
            </>
        )
    }
    return (
        <>
            <Carousel />
        </>
    )
}

export default Greentoprelated;
