import React from "react";
import { DashboardLayout } from "@/components/layouts";
import { useaddAdvertisementStyles } from "@/static/stylesheets/screens";
import PaymentDetails from "@/components/molecules/PaymentDetails/PaymentDetails";


const AddAdvertisement = () => {
  const classes = useaddAdvertisementStyles();

  return (
    <>
      <DashboardLayout>
        <div className={classes.root}>
          <div>
            <PaymentDetails />
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default AddAdvertisement;
