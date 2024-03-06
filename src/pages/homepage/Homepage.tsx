import { Header } from "@/layout/header/Header";
import Intro from "../intro/Intro";
import Brand from "../brand/Brand";
import Products from "../products/Products";
import { useQuery } from "@apollo/client";
import { QUERY } from "./query";
import Seller from "../seller/Seller";
import { Follow } from "../follow/Follow";
import { Footer } from "@/layout/footer/Footer";
import { Banner } from "../banner/Banner";
import { BoxStyled } from "./HomePage.styled";


const Homepage = () => {
  const { data } = useQuery(QUERY);
  const { homes } = data || {};
  const {topmain} = homes?.data?.[0]?.attributes || {};
  const homeBack= topmain?.[0]?.colors?.banner?.[0]?.colors?.background;
  const homeText= topmain?.[0]?.colors?.banner?.[0]?.colors?.text;

  return (
    <>
      <BoxStyled bgColor={homeBack} textColor={homeText}>
        <Header />  
        <Intro />
      </BoxStyled>
      <Brand />
      <Products />
      <Banner/>
      <Seller />
      <Follow />
      <Footer />
    </>
  );
};
export default Homepage;
