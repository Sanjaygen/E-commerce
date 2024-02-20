import { Header } from "@/layout/header/Header";
import { BoxStyled } from "./HomePage.Styled";
import Intro from "../intro/Intro";
import Brand from "../brand/Brand";
import Products from "../products/Products";
import { useQuery } from "@apollo/client";
import { QUERY } from "./query";
import Seller from "../seller/Seller";
import { Follow } from "../follow/Follow";
import { Footer } from "@/layout/footer/Footer";
import { Banner } from "../banner/Banner";

const Homepage = () => {
  const { data } = useQuery(QUERY);
  console.log("data", data);

  return (
    <>
      <BoxStyled>
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
