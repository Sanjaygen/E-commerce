"use client";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  AppBarStyled,
  BoxStyled,
  FirstTypography,
  FontAwesomeIconStyled,
  HeadLineStyled,
  IconBtn,
  LinkContainer,
  LinkStyled,
} from "./Header.styled";
import { Link } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBag,
  faUser,
  faMagnifyingGlass,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "@apollo/client";
import { QUERY } from "@/pages/homepage/query";
import { useState } from "react";
export const Header = () => {
  const { data } = useQuery(QUERY);
  const { homes } = data || {};
  const { header, navbar } = homes?.data?.[0].attributes || {};
  const [isClick, setClick] = useState(false);
  const toggleBar = () => {
    setClick(!isClick);
  };
  return (
    <BoxStyled>
      <AppBarStyled position="static">
        <Toolbar>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            scale={"1.25x"}
            style={{ position: "relative", right: "20px" }}
          />
          <HeadLineStyled>
            {/* <img
              src="img/logo/Group1.png"
              alt="no logo"
              width={"31px"}
              height={"15px"}
              className="logo1"
            /> */}
            <FirstTypography>{header?.[0]?.title}</FirstTypography>
            {/* <img
              src="img/logo/Group1.png"
              alt="no logo"
              width={"31px"}
              height={"15px"}
              className="logo2"
            /> */}
          </HeadLineStyled>
          <FontAwesomeIconStyled
            icon={faBars}
            scale={"1.25x"}
            style={{ position: "relative", right: "20px" }}
            onClick={toggleBar}
          />
          <IconBtn className="btn-icon" sx={{ marginLeft: "auto" }}>
            <Button variant="text" color="inherit" sx={{ gap: "8px" }}>
              <FontAwesomeIcon icon={faUser} scale={"1.25x"} />
              {header?.[0]?.headerbutton?.[0]?.title}
            </Button>
            <Button variant="text" color="inherit" sx={{ gap: "8px" }}>
              {" "}
              <FontAwesomeIcon icon={faShoppingBag} scale={"1.25x"} />
              {header?.[0]?.headerbutton?.[1]?.title}
            </Button>
          </IconBtn>
        </Toolbar>
        <hr />
        <LinkContainer
          isClick={isClick}
          sx={{
            fontSize: "16px",
            color: "black",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <LinkStyled href="#" >{navbar?.[0]?.title}</LinkStyled>
          <LinkStyled href="#" >{navbar?.[1]?.title}</LinkStyled>
          <LinkStyled href="#" >{navbar?.[2]?.title}</LinkStyled>
          <LinkStyled href="#" >{navbar?.[3]?.title}</LinkStyled>
          <LinkStyled href="#" >{navbar?.[4]?.title}</LinkStyled>
          <LinkStyled href="#" >{navbar?.[5]?.title}</LinkStyled>
          <LinkStyled href="#" >{navbar?.[6]?.title}</LinkStyled>
          {/* <Button variant="text" color="inherit" className="icon-acc">
              <FontAwesomeIcon icon={faUser} scale={"1.25x"} style={{marginRight:'10px'}}/>
              {header?.[0]?.headerbutton?.[0]?.title}
            </Button> */}
            <Button variant="text" color="inherit"   className="icon-acc1" >
              <FontAwesomeIcon icon={faShoppingBag} scale={"1.25x"} style={{marginRight:'10px'}}/>
              {header?.[0]?.headerbutton?.[1]?.title}
            </Button>
        </LinkContainer>
      </AppBarStyled>
    </BoxStyled>
  );
};  