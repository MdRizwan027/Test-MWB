import React from "react";
import { PlanCard } from "./PlanCard";
import { Grid } from "@mui/material";

const Planview = () => {
  const data = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <Grid container rowSpacing={1} columnSpacing={5}>
        {data.map((item: any) => (
          <Grid item xs={4}>
            <PlanCard />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export { Planview };
