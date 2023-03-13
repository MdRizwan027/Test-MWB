import React from "react";
import { useSidebarPanelStyles } from "@/static/stylesheets/organisms";
import Logo from "@/static/images/mwb_bazaar_dashboard_logo.png";

interface SidebarPanelProps {
  children?: React.ReactNode;
}

const SidebarPanel: React.FC<SidebarPanelProps> = (props) => {
  const classes = useSidebarPanelStyles();

  return (
    <div className={classes.root}>
      <div className={classes.brandLogoContainer}>
        <img src={Logo} alt={"Logo"} />
      </div>

      <div className={classes.menuContainer}>
        <div className={"wrapper"}>{props?.children}</div>
      </div>
    </div>
  );
};

export { SidebarPanel };
