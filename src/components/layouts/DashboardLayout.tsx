import React from "react";
import { useDashboardLayoutStyles } from "@/static/stylesheets/layouts";
import { AdminSidebar } from "@/components/molecules/AdminSidebar";
import { Header } from "@/components/molecules/Header";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = (props) => {
  const classes = useDashboardLayoutStyles();

  return (
    <div className={classes.root}>
      <AdminSidebar />
      <div className={classes.mainContainer}>
        <Header />
        <div className={classes.contentContainer}>{props?.children}</div>
      </div>
    </div>
  );
};

export { DashboardLayout };
