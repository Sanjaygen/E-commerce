
import { appColors } from "@/theme/color.Config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box,  } from "@mui/material";
import { styled } from "@mui/system";

export const DivWrapper = styled("div")`
  cursor: pointer;
`;

export const BottomContainer = styled(Box)<{ bgColor: string , textColor:string}>`
border: 1px solid black;
background: ${({bgColor}) => bgColor || appColors['white']};
color: ${({textColor}) => textColor || appColors['black']};
display: flex;
height: 52px;
`;
export const StyledIcon = styled(FontAwesomeIcon)`
margin-left: 20px;
font-size: 28px;
border: 1px solid #fff;
border-radius: 50%;
padding: 5px;
`;