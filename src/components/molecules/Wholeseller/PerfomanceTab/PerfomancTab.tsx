import React from "react";
import { FeaturesTab } from "@/components/organisms/FeaturesTab";
import RetailerChart from "../DataChart/RetailerChart";
import RevenueChart from "../DataChart/RevenueChart";
import { usePerfomancTabStyle } from "@/static/stylesheets/molecules";

const PerfomancTab = () => {
  const classes = usePerfomancTabStyle();

  return (
    <div className={classes.root}>
      <div className="tabContainer">
        <FeaturesTab
          items={[
            {
              label: "Revenue",
              content: <RevenueChart />,
            },
            {
              label: "Retailers",
              content: <RetailerChart />,
            },
          ]}
        />
      </div>
    </div>
  );
};

export { PerfomancTab };
