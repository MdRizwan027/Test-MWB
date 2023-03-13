import React from "react";
import { DashboardLayout } from "@/components/layouts";
import { useAdvertisementStyles } from "@/static/stylesheets/screens";
import { SectionHeader } from "@/components/molecules/Bazaars";
import { ColorCard } from "@/components/molecules/Color Card";
import { PlanLogDataTable } from "@/components/molecules/PlanLogDataTable";

const Advertisement = () => {
  const classes = useAdvertisementStyles();

  return (
    <>
      <DashboardLayout>
        <div className={classes.root}>
          <SectionHeader />
          <div className="container">
            <div className="commonTitle">Advertisement</div>
            <div className="flex gap-5">
              <ColorCard
                title="4 Pending orders"
                prize="You have 4 pending orders for approval"
              />
              <ColorCard
                title="4 Pending orders"
                prize="You have 4 pending orders for approval"
              />
            </div>
            <p className="commonTitle">Bazaar Report</p>
            <div className="bazaarFilters pt-[20px] pb-[20px]">
              <PlanLogDataTable />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Advertisement;
