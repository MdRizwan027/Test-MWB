import React from "react";
import { usePlancardStyles } from "@/static/stylesheets/molecules/plancardStyle";
import LogoGo from "@/static/icons/ic_arrow_go.png";

const FreePLanCard = () => {
  const classes = usePlancardStyles();

  return (
    <div className={classes.root}>
      <div className="container">
        <div className="plancard">
          <div className="content-area">
            <p className="headTitle">Plan Name</p>
            <p className="headSubtitle">Free</p>
            <p className="headDescription">Available for all locations</p>
          </div>
          <div className="actionButton">
            <p>View Features</p>
            <img src={LogoGo} alt={"Logo"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { FreePLanCard };
