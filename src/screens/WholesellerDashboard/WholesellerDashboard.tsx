import React from "react";
import { DashboardLayout } from "@/components/layouts";
import { BazaarCard } from "@/components/molecules/Bazaars";
import { WholesellerCard } from "@/components/molecules/Wholeseller";
import { usewholesellerDashboardStyle } from "@/static/stylesheets/screens";
import { PerfomancTab } from "@/components/molecules/Wholeseller/PerfomanceTab";
import { Grid } from "@mui/material";
import { RetailersTable } from "@/components/molecules/Wholeseller/RetailersTable";

const WholesellerDashboard = () => {
  const classes = usewholesellerDashboardStyle();
  const data = [1, 2, 3];

  return (
    <>
      <DashboardLayout>
        <div className={classes.root}>
          <div>
            <div className="pageTitle">Dashboard</div>
            <div className="flex gap-5">
              <WholesellerCard title="Total Products" prize="13,596" />
              <WholesellerCard title="Total Products" prize="13,596" />
              <WholesellerCard title="Total Products" prize="13,596" />
              <WholesellerCard title="Total Products" prize="13,596" />
            </div>

            <div>
              <p className="performanceTitle">Compare Bazaar Performance</p>
              <PerfomancTab />
            </div>

            <div className="bazaarContainer">
              <p className="performanceTitle">Bazaar Performance</p>
              <Grid container spacing={2}>
                {data.map((item: any) => (
                  <Grid item xs={4}>
                    <BazaarCard />
                  </Grid>
                ))}
              </Grid>
            </div>

            <div>
              <RetailersTable />
              <RetailersTable />
              <RetailersTable />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default WholesellerDashboard;
