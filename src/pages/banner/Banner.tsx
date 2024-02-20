import { Box, styled } from "@mui/material"
import { StyledButton, TextPara } from "./Banner.Styled"

const BoxContainer = styled('div')`
height:100vh;
margin-top:250px;
`;

export const Banner = () => {
    return (
        <BoxContainer>
        <Box style={{ position: 'relative'}}>
            <img src="img/banner/bannerAkka.png" alt="no Banner" width={'100%'} height={'80%'} />
            <img src="img/banner/zara-background.png" alt="no zara-background" width={'332px'} height={'301px'} style={{ position: 'absolute', top: '51px', left: '1170px'}}/>
            <img src="img/banner/zara.png" alt="no Zara" width={'141px'} height={'71px'} style={{ position: 'absolute', top: '233px', left: '1043px' }} />
            <TextPara>
                Lustrous Yet Understated. The New Evening
                Wear Collection Exclusively Offered At The
                Reopened Giorgio Armani boutique in Los
                Angeles.
            </TextPara>
            <StyledButton variant='contained'>
            See Collection</StyledButton>
        </Box>
        </BoxContainer>
    )
}