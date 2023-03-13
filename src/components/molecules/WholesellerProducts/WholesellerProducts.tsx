import React, { useState } from "react";
import { usewholesellerListStyles } from "@/static/stylesheets/molecules";
import { GridOptionButton } from "@/components/atoms/Button";
import { Switch } from "@/components/atoms/Switch";

interface WholesellerProductsProps {
  type?: "WholeSeller" | "Retailer";
}

const WholesellerProducts: React.FC<WholesellerProductsProps> = (props) => {
  const classes = usewholesellerListStyles();
  const data = [1, 2, 3, 4, 5, 6];
  const { type } = props;

  return (
    <div className={classes.root}>
      <table>
        <tr>
          <th>Name</th>
          <th>Contact Person</th>
          <th>City</th>
          <th>Bazaar</th>
          <th>Type</th>
          <th>Agent</th>
          <th>Status</th>
          <th>Enable/Disable</th>
          <th></th>
        </tr>

        {data.map((item: any) => (
          <tr>
            <td>Firm-ABC</td>
            <td>Ashish Patel</td>
            <td>Rajkot</td>
            <td>Electronic Baz..</td>
            <td>Wholeseller</td>
            <td>Ashish Patel</td>
            <td>Pending Approval</td>
            <td>
              <div>
                <Switch />
              </div>
            </td>
            <td>
              <GridOptionButton icon={"vertical-options"} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export { WholesellerProducts };
