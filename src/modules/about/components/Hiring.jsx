import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { WhiteButton, GreenButton } from "../../../shared/components/buttons/CustomButtons";
import { GREY_BG_COLOR } from '../../../shared/config/Colors';
import { DARK_GREEN_COLOR, MEDIUM_GREEN_COLOR, WHITE_BG_COLOR, LIGHT_GREEN_COLOR } from '../../../shared/config/Colors';


const Hiring = () => {
  return (
    <Box component="section">
      <Container>
        <Box sx={{
          padding: "50px 0",
          textAlign: "center",
          background: GREY_BG_COLOR,
          margin: "8rem 0",
        }}>
          <Typography variant="h4" fontWeight="bold" color={MEDIUM_GREEN_COLOR} textAlign="center" margin="1rem 0">We’re Hiring!</Typography>
          <Typography variant="h6" fontWeight="bold" color={MEDIUM_GREEN_COLOR}>Meat Our Team</Typography>
          <Box sx={{ display: "flex", gap: "30px", justifyContent: "center", flexWrap: "wrap", margin: "28px 0" }}>
            <WhiteButton>About us</WhiteButton>
            <GreenButton>Open Positions</GreenButton>
          </Box>
          <Typography>we care about your data and privacy politics</Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Hiring