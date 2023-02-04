import React from "react";
import { Box, Rating, Typography } from "@mui/material";
import { DARK_GREEN_COLOR, GREY_BG_COLOR } from "../../../shared/config/Colors";

const ThisRating = ({ credibility, cvs, reviews, quality, price }) => {
  return (
    <Box>
      <Box>
        <Typography
          fontWeight="bold"
          sx={{
            color: DARK_GREEN_COLOR,
          }}
        >
          How did we arrive at this rating?
        </Typography>
      </Box>

      <Box
        sx={{
          margin: "45px 0",
          background: GREY_BG_COLOR,
          borderRadius: "17px",
          padding: "20px 15px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "40px",
          }}
        >
          <Typography fontWeight="bold">Credibility</Typography>
          <Rating name="simple-controlled" value={credibility} />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "40px",
          }}
        >
          <Typography fontWeight="bold">CVs</Typography>
          <Rating name="simple-controlled" value={cvs} />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "40px",
          }}
        >
          <Typography fontWeight="bold">Reviews</Typography>
          <Rating name="simple-controlled" value={reviews} />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "40px",
          }}
        >
          <Typography fontWeight="bold">Quality of content:</Typography>
          <Rating name="simple-controlled" value={quality} />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "40px",
          }}
        >
          <Typography fontWeight="bold">Price</Typography>
          <Rating name="simple-controlled" value={price} />
        </Box>
      </Box>
    </Box>
  );
};

export default ThisRating;
