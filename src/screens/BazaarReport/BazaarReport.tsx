import React from "react";
import { DashboardLayout } from "@/components/layouts";
import {
  BazaarReportHero,
  SectionHeader,
} from "@/components/molecules/Bazaars";
import { TopWholeseler } from "@/components/molecules/Wholesellers";
import { Grid } from "@mui/material";
import LogoAdd from "@/static/icons/ic_report.png";
import LogoGo from "@/static/icons/ic_go.png";
import { useBazaarreportStyles } from "@/static/stylesheets/screens";
import { CityBuisness } from "@/components/molecules/cityBuisness";
import { NewWholeseller } from "@/components/molecules/NewWholeseller/NewWholeseller";

const BazaarReport = () => {
  const classes = useBazaarreportStyles();

  return (
    <>
      <DashboardLayout>
        <SectionHeader />
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <div className="headingTitle">Electronic Bazaar</div>
            </Grid>

            <Grid item xs={6}>
              <div className={classes.container}>
                <img src={LogoAdd} alt={"Logo"} />
                <p className="reportButton">View Report</p>
                <img src={LogoGo} alt={"Logo"} />
              </div>
            </Grid>

            <Grid item xs={12}>
              <BazaarReportHero />
            </Grid>

            <Grid item xs={4}>
              <div className="cityBuisness">
                <div className="cityTitle">
                  <p>City-Wise Business</p>
                  <p>Delhi-NCR</p>
                </div>
                <div>
                  <CityBuisness />
                </div>
              </div>
            </Grid>

            <Grid item xs={8}>
              <div className="cityBuisness">
                <div className="cityTitle">
                  <p>Top Wholesellers</p>
                  <p>View all</p>
                </div>
                <div>
                  <TopWholeseler />
                </div>
              </div>
            </Grid>

            <Grid item xs={8}>
              <div className="cityBuisness">
                <div className="cityTitle">
                  <p>Top Poducts</p>
                  <p>View all</p>
                </div>
                <div>
                  <TopWholeseler />
                </div>
              </div>
            </Grid>

            <Grid item xs={4}>
              <div className="cityBuisness">
                <div className="cityTitle">
                  <p>New Wholesellers</p>
                  <p>Delhi-NCR</p>
                </div>
                <div>
                  <NewWholeseller />
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </DashboardLayout>
    </>
  );
};

export default BazaarReport;
