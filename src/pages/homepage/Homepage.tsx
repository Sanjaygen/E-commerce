import { Header } from "@/layout/header/Header";
import { BoxStyled } from "./HomePage.Styled";
import Intro from "../intro/Intro";
import Brand from "../brand/Brand";

const Homepage = () => {
    return(
        <>
            <BoxStyled>
                  <Header/>
                  <Intro/>
             </BoxStyled>
             <Brand/>
             </>
    );
};
export default Homepage;