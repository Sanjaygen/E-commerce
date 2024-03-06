import { appColors } from '@/theme/color.Config';
import { Box } from '@mui/material';
import styled from 'styled-components';

export const BoxStyled = styled(Box)<{bgcolor: string, textcolor: string}>`
// background: ${({bgcolor}) => bgcolor || appColors['white']};
color: ${({textcolor}) => textcolor || appColors['black']};

`;
