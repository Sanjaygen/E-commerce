import { Box, styled } from "@mui/material"
import { StyledButton, TextPara } from "./Banner.Styled"
import { useQuery } from "@apollo/client";
import { QUERY } from "../homepage/query";
import { api } from "@/service/backend-api";

const BoxContainer = styled('div')`
height:100vh;
margin-top:250px;
`;

export const Banner = () => {
    const { data } = useQuery(QUERY);
    const { homes } = data || {};
    const { brandBanner } = homes?.data?.[0].attributes || {};
    console.log(' brandBanner ',  brandBanner );

    const bannerButton = brandBanner?.[0]?.button?.[0]?.color?.brand?.[0]?.color?.background;
    const bannerText = brandBanner?.[0]?.button?.[0]?.color?.brand?.[0]?.color?.text;
    return (
        <BoxContainer>
        <Box style={{ position: 'relative'}}>
            <img src= {api+brandBanner?.[0]?.Backgroundimage?.data?.[0]?.attributes?.url} alt="no Banner" width={'100%'} height={'80%'} />
            <img src={api+brandBanner?.[0]?.image2?.data?.[0]?.attributes?.url} alt="no zara-background" width={'332px'} height={'301px'} style={{ position: 'absolute', top: '51px', left: '1170px'}}/>
            <img src={api+brandBanner?.[0]?.image?.data?.[0]?.attributes?.url} alt="no Zara" width={'141px'} height={'71px'} style={{ position: 'absolute', top: '233px', left: '1043px' }} />
            <TextPara>{brandBanner?.[0]?.description}</TextPara>
            <StyledButton variant='contained' bgColor={bannerButton} textColor={bannerText}>
                {brandBanner?.[0]?.button?.[0]?.title}
                </StyledButton>
        </Box>
        </BoxContainer>
    )
}