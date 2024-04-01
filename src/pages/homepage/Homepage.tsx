import { Header } from "@/layout/helper-components/header/Header";
import { BoxStyled } from "./HomePage.Styled";
import Intro from "../intro/Intro";
import Brand from "../brand/Brand";
import Products from "../products/Products";
import { useQuery } from "@apollo/client";
import { QUERY } from "./query";
import Seller from "../seller/Seller";
import { Follow } from "../follow/Follow";
import { Banner } from "../banner/Banner";

const Homepage = () => {
  const { data } = useQuery(QUERY);
  const { homes } = data || {};
  const {topmain} = homes?.data?.[0]?.attributes || {};
  const homeBack= topmain?.[0]?.colors?.banner?.[0]?.colors?.background;
  const homeText= topmain?.[0]?.colors?.banner?.[0]?.colors?.text;

  return (
    <>
      <BoxStyled bgcolor={homeBack} textcolor={homeText}>
        <Intro />
      </BoxStyled>
       <Brand/>
      <Products/>
      <Banner/>
      <Seller/> 
      <Follow/> 
    </>
  );
};
export default Homepage;
