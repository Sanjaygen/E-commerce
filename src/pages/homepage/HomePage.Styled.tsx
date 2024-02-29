import { appColors } from '@/theme/color.Config';
import { Box } from '@mui/material';
import styled from 'styled-components';

export const BoxStyled = styled(Box)<{bgColor: string, textColor: string}>`
// background: ${({bgColor}) => bgColor || appColors['white']};
color: ${({textColor}) => textColor || appColors['black']};
`;
