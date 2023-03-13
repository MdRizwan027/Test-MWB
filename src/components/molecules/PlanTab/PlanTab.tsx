import React from "react";
import { useElectronicsBazaarStyles } from "@/static/stylesheets/screens";
import { Grid } from "@mui/material";
import { FeaturesTab } from "@/components/organisms/FeaturesTab";
import { Planview } from "../PlanCard";

const PlanTab = () => {
  const classes = useElectronicsBazaarStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FeaturesTab
            items={[
              {
                label: "All Plans (20)",
                content: <Planview />,
              },
              {
                label: "Free (13)",
                content: <Planview />,
              },
              {
                label: "Paid(23)",
                content: <Planview />,
              },
            ]}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default PlanTab;
