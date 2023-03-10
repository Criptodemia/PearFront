import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import SVGPhone from '../../../shared/assets/Phone.svg';
import { LIGHT_GREEN_COLOR } from '../../../shared/config/Colors';

const HeroBannerFilters = () => {
  return (
    <Box
      component="section"
      sx={{
        margin:"6rem 0",
        display: "flex",
        placeItems: "center"
      }}
    >
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item md={7}>
            <Typography variant="h3" fontWeight="bold" textAlign="center" color={LIGHT_GREEN_COLOR}>Welcome to Pear</Typography>
            <Typography variant="body1" component="span" display="flex" justifyContent="center" textAlign="center" margin={"1rem auto 0 auto"} maxWidth="510px" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis in quam lectus non euismod lacus tortor, viverra pharetra. Morbi morbi egestas morbi pharetra tempor, eget pellentesque posuere. Nulla faucibus faucibus mauris aliquet feugiat. Pellentesque adipiscing nulla ipsum 
            </Typography>
          </Grid>
          
          <Grid item md={5}>
          <Box sx={{ width: "100%", height: "100%" }}>
              <img
                src={SVGPhone}
                alt="PhonePear"
                className="landing-herobanner__image"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HeroBannerFilters