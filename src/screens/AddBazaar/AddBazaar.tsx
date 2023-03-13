import React from "react";
import NewBazaars from "@/components/molecules/Bazaars/NewBazaars";
import { DashboardLayout } from "@/components/layouts";
import { SectionHeader } from "@/components/molecules/Bazaars";

const AddBazaar = () => {
  return (
    <>
      <DashboardLayout>
        <SectionHeader />
        <NewBazaars />
      </DashboardLayout>
    </>
  );
};

export default AddBazaar;
