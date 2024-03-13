/* eslint-disable @next/next/no-img-element */
<<<<<<< HEAD
import { Box, styled } from "@mui/material";
=======
import { Box, styled } from "@mui/material"
import { BoxContainer, ContentWrapper, StyledButton, TextPara } from "./Banner.Styled"
>>>>>>> e4429499cfc1ca021d572eda57e3e815a9de0bcf
import { useQuery } from "@apollo/client";
import { QUERY } from "../homepage/query";
import { api } from "@/service/backend-api";
import { BoxContainer, ContentWrapper, StyledButton, TextPara } from "./Banner.Styled";

export const Banner = () => {
    const { data } = useQuery(QUERY);
    const { homes } = data || {};
    const { brandBanner } = homes?.data?.[0].attributes || {};
    console.log(' brandBanner ', brandBanner);
    const bannerButton = brandBanner?.[0]?.button?.[0]?.color?.brand?.[0]?.color?.background;
    const bannerText = brandBanner?.[0]?.button?.[0]?.color?.brand?.[0]?.color?.text;
    const RightContent = () => {
        return (
            <ContentWrapper>
                <img src={api + brandBanner?.[0]?.image?.data?.[0]?.attributes?.url} alt="no Zara" width={'141px'} height={'71px'} />
                <TextPara>{brandBanner?.[0]?.description}</TextPara>
                <StyledButton variant='contained' bgcolor={bannerButton} textcolor={bannerText}>
                    {brandBanner?.[0]?.button?.[0]?.title}
                </StyledButton>
            </ContentWrapper>
        )
    }
    return (
        <BoxContainer>
            <Box style={{ position: 'relative' }}>
                <img src={api + brandBanner?.[0]?.Backgroundimage?.data?.[0]?.attributes?.url} alt="no Banner" width={'100%'} height={'80%'} />
                <img src={api + brandBanner?.[0]?.image2?.data?.[0]?.attributes?.url} alt="no zara-background" width={'332px'} height={'301px'} style={{ position: 'absolute', top: '51px', left: '1170px' }} />
                {RightContent()}
            </Box>
        </BoxContainer>
    )
}