import React from "react";
import { DashboardLayout } from "@/components/layouts";
import { SectionHeader } from "@/components/molecules/Bazaars";
// import { useWholesellerStyles } from "@/static/stylesheets/screens";
import { NoWholeseller } from "@/components/molecules/NoWholeseller";

const Wholeseller = () => {
  // const classes = useWholesellerStyles();

  return (
    <>
      <DashboardLayout>
        <SectionHeader />
        <NoWholeseller />
      </DashboardLayout>
    </>
  );
};

export default Wholeseller;
