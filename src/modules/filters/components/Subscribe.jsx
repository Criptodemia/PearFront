import React from "react";
import { Box, Grid, Typography, Container, TextField } from "@mui/material";
import SVGPhone from "../../../shared/assets/Home.svg";
import {
  WhiteButton,
  GreenButton,
} from "../../../shared/components/buttons/CustomButtons";
import {
  DARK_GREEN_COLOR,
  GREY_BG_COLOR,
  WHITE_BG_COLOR,
} from "../../../shared/config/Colors";
import { NavLink } from "react-router-dom";

const Subscribe = () => {
  return (
    <Box
      component="section"
      sx={{ margin: "4rem 0 6rem 0" }}
    >
      <Container>
        <Grid container alignItems="center">
          <Grid item>
            <Box
              sx={{
                padding: "40px",
                background: DARK_GREEN_COLOR,
                borderRadius: "30px",
                margin: "1.5rem auto 0 auto",
                textAlign: "center",
                maxWidth: "1200px",
              }}
            >
              <Typography color={WHITE_BG_COLOR} sx={{ margin: ".5rem 0" }}>
                Lorem ipsum dolor sit amet consectetur. Ac nec erat augue id
                enim ut. Duis ipsum laoreet suspendisse scelerisque in risus
                habitant. Pellentesque tincidunt
              </Typography>
              <Grid>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                  }}
                >
                  <TextField
                    placeholder="example@mail.com"
                    size="small"
                    sx={{
                      "& input": {
                        textAlign: "center",
                      },
                      "& .MuiInputBase-root.MuiOutlinedInput-root": {
                        background: "#F4F4F4",
                        borderRadius: "4px",
                        color: DARK_GREEN_COLOR,
                        borderColor: "#FAFAFA !important",
                        "&::placeholder": {
                          color: DARK_GREEN_COLOR,
                          fontWeight: "bold",
                          textAlign: "center",
                        },
                      },
                    }}
                  />
                  <GreenButton component={NavLink} to="/get-started">
                    Get Started
                  </GreenButton>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Subscribe;
