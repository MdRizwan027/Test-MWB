import React from "react";
import { useAuthenticationLayoutStyles } from "@/static/stylesheets/layouts";
import MwbLogo from "@/static/images/mwb_bazar_logo.png";

interface AuthenticationLayoutProps {
  children?: React.ReactNode;
}

const AuthenticationLayout: React.FC<AuthenticationLayoutProps> = (props) => {
  const classes = useAuthenticationLayoutStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.containerCard}>
          <div className={classes.logoContainer}>
            <img src={MwbLogo} alt={"Mwb Bazaar"} />
          </div>
          {props?.children}
        </div>
      </div>
    </div>
  );
};

export { AuthenticationLayout };
