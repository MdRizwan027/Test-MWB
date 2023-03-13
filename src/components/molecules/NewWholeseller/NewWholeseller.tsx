import React from "react";
import LogoEcBazaar from "@/static/images/placeholder.jpg";
import { usenewWholesellerStyles } from "@/static/stylesheets/molecules";

const NewWholeseller = () => {
  const classes = usenewWholesellerStyles();
  const data = [1, 2, 3];

  return (
    <div className={classes.root}>
      {data.map((item: any) => (
        <div className="container">
          <div className="brandData">
            <img className="brandLogo" src={LogoEcBazaar} alt={"Logo"} />
          </div>
          <div>
            <p>Aiden Murray</p>
            <p>Customer ID#00224</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export { NewWholeseller };
