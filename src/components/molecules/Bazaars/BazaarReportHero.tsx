import React from "react";
import { useBazaarreportHeroStyles } from "@/static/stylesheets/molecules";
import LogoGo from "@/static/icons/ic_go_blue.png";

const BazaarReportHero = () => {
  const classes = useBazaarreportHeroStyles();

  return (
    <div className={classes.root}>
      <div className={classes.wholesellerCard}>
        <div className="totalCard">
          <div className="wholesellerItem">
            <p className="headTitle">Total Orders</p>
            <div className="detailsButton">
              <p className="totalcount">910</p>
              <div className="btn">
                <p className="reportButton">View Details</p>
                <img src={LogoGo} alt={"Logo"} />
              </div>
            </div>
          </div>
        </div>

        <div className="totaoItem">
          <div className="wholesellerItem">
            <p className="headTitle">Total Income</p>
            <div className="detailsButton">
              <p className="totalcount">₹5,56,690</p>
              <div className="btn">
                <p className="reportButton">View Details</p>
                <img src={LogoGo} alt={"Logo"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { BazaarReportHero };
