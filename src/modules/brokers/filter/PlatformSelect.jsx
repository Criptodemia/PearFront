import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { DARK_GREEN_COLOR, LIGHT_GREEN_COLOR } from '../../../shared/config/Colors';

const platformOpt = [
  {
    id: "cdfs",
    name: "CDFs",
  },
  {
    id: "etfs",
    name: "ETFs",
  },
  {
    id: "crypto",
    name: "Crypto",
  },
];

const PlatformSelect = () => {
  const [wouldInvest, setWouldInvest] = useState(null);

  return (
    <Container>
      <Box sx={{ margin: "120px 0" }}>
      <Typography variant="h5" textAlign="center" color={DARK_GREEN_COLOR} margin={"1.5rem 0"}>What Type of Plataform You Select?</Typography>

        <Box
          sx={{
            display: "flex",
            gap: "30px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {platformOpt.map((item, index) => (
            <Box
              key={`platform-option__${index}`}
              className={
                wouldInvest === item.id
                  ? "invest-class invest-class--active"
                  : "invest-class"
              }
              onClick={() => setWouldInvest(item.id)}
            >
              <Typography>{item.name}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default PlatformSelect;
