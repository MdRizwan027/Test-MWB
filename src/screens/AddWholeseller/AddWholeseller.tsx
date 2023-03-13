import React from "react";
import { DashboardLayout } from "@/components/layouts";
import { SectionHeader } from "@/components/molecules/Bazaars";
import { AddNewWholeseller } from "@/components/molecules/Wholesellers";

const AddWholeseller = () => {

  return (
    <>
      <DashboardLayout>
        <SectionHeader />
        <AddNewWholeseller />
      </DashboardLayout>
    </>
  );
};

export default AddWholeseller;
