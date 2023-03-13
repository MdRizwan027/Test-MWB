import React from "react";
import { DashboardLayout } from "@/components/layouts";
import { FeaturesTab } from "@/components/organisms/FeaturesTab";
import { useMasterListStyles } from "@/static/stylesheets/screens";
import { MasterListGrid } from "@/components/molecules/Admin/MasterListGrid";

const MasterList = () => {
  const classes = useMasterListStyles();

  return (
    <>
      <DashboardLayout>
        <div className={classes.root}>
          <div className={classes.pageTitle}>Master List</div>

          <FeaturesTab
            items={[
              {
                label: "Wholeseller (3)",
                content: <MasterListGrid type={"WholeSeller"} />,
              },
              {
                label: "Retailer (4)",
                content: <MasterListGrid type={"Retailer"} />,
              },
            ]}
          />
        </div>
      </DashboardLayout>
    </>
  );
};

export default MasterList;
