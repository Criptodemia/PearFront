import React from "react";
import { Box, Container, Grid } from "@mui/material";
import TeamCard from "../items/TeamCard";

const Team = () => {
  return (
    <Box component="section">
      <Container>
        <Grid container spacing={3}>
          {Array(8).fill(
            <Grid item xs={12} md={3}>
              <TeamCard
                position="Product Designer"
                name="Product Designer"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ut corrupti voluptatum maiores, assumenda veritatis, voluptatem totam cupiditate deserunt quia officiis ea amet iure iusto architecto eveniet aspernatur quae maxime."
              />
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Team;
