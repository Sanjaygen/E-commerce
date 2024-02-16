import { Box, Grid, Typography } from "@mui/material";
import {
  ImageStyled,
  LogoDiv,
  MainDiv,
} from "./Brand.styled";

const Brand = () => {
  const imageFiles = [
    "brand-1.png",
    "brand-5.png",
    "brand-3.png",
    "brand-4.png",
    "brand-2.png",
  ];
  return (
    <MainDiv>
        
      <LogoDiv>
        {imageFiles.map((image, index) => (
          <ImageStyled
            key={index}
            src={`/img/${image}`}
            alt={`Image ${index}`}
          />
        ))}
      </LogoDiv>
    
      <Typography style={{ transform: 'rotate(-90deg)' ,color:'black',position:'relative',right:'535px',bottom:'200px',fontWeight:'400',fontSize:'34px',fontFamily:'roboto'}}>Explore new and popular styles</Typography>

      <Box sx={{position:'relative',bottom:'170px'}}>
        
      <Grid container spacing={0}>
        
        <Grid item xs={12} sm={6}>
        
        <img src="img/image-category-1.png" alt="category-1" style={{ width: '500px', height: '512px', marginLeft:'250px'}} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={1} >
            <Grid item xs={5}>
              <img src="img/01.png" alt="category-2" style={{ width: '250px', height: '250px'}}/>
            </Grid>
            <Grid item xs={5}>
               
            <div style={{ position: 'relative' }}>
                  <img
                    src="img/03.png"
                    alt="category-3"
                    style={{ width: '100%', maxWidth: '250px', height: 'auto' }}
                  />
                  <Typography
                    sx={{ position: 'absolute', top:20 , backgroundColor: 'black',color:'white',width:60,textAlign:'center'}}
                  >
                    SALE
                  </Typography>
                </div>
            </Grid>
            <Grid item xs={5}>
              <img src="img/02.png" alt="category-4" style={{ width: '250px', height: '250px' }}/>
            </Grid>
            <Grid item xs={5}>
              <img src="img/20.png" alt="category-5"style={{ width: '250px', height: '250px' }} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </Box>
    </MainDiv>
  );
};

export default Brand;
