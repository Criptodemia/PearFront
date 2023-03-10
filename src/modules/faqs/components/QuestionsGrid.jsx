import React from "react";
import { Container, Grid } from "@mui/material";
import QuestionCard from "./QuestionCard";

const QuestionsGrid = () => {
  return (
    <Container>
      <Grid container spacing={3} justifyContent="center">
        {Array(9).fill(
          <Grid item xs={12} sm={6} md={4}>
            <QuestionCard />
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default QuestionsGrid;
