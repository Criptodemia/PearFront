import React from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { GreenButton } from "../../../shared/components/buttons/CustomButtons";
import SVGPhones from '../../../shared/assets/Phones.svg';
import { DARK_GREEN_COLOR, MEDIUM_GREEN_COLOR, WHITE_BG_COLOR, LIGHT_GREEN_COLOR , GREY_BG_COLOR} from '../../../shared/config/Colors';

const WhatIsPear = () => {
  return (
    <Box component="section" sx={{ margin: "4rem 0 4rem 0" }} >
      <Grid container alignItems={"center"}>
        <Grid item md={7}>
          <Typography variant="h3" fontWeight="bold" textAlign="center" margin={"0rem auto .5rem auto"} color={LIGHT_GREEN_COLOR}>What is Pear?</Typography>
          <Typography variant="h5" fontWeight="bold" textAlign="center" color={DARK_GREEN_COLOR} margin={"1rem auto 0 auto"}>Lorem ipsum dolor sit amet, consectetur </Typography>
          <Typography variant="body1" component="span" display="flex" justifyContent="center" textAlign="center" margin={"2rem auto 2rem auto"} maxWidth="480px">
          Lorem ipsum dolor sit amet consectetur. Elit facilisi sed lobortis suspendisse dignissim. Posuere ultrices fringilla sapien ac mattis enim sed. Vestibulum bibendum praesent tellus est tellus sem. Id non lectus ac sit. Vitae nulla in 
          </Typography>
        </Grid>
        <Grid item md={4}>
        <Box sx={{ width: "100%", height: "100%" }}>
              <img
                src={SVGPhones}
                alt="Phones"
                className="landing-herobanner__image"
              />
            </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhatIsPear;
