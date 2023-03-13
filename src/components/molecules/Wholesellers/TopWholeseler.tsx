import React from "react";
import { useTopwholesellerStyle } from "@/static/stylesheets/molecules";
import LogoEcBazaar from "@/static/images/placeholder.jpg";

const TopWholeseler = () => {
  const classes = useTopwholesellerStyle();
  const data = [1, 2, 3];

  return (
    <div className={classes.root}>
      <table>
        <tr>
          <th className="planTitle">Name</th>
          <th className="bazaarTitle">City</th>
          <th className="stateTitle">Orders</th>
          <th className="districtTitle">Sales</th>
        </tr>

        {data.map((item: any) => (
          <tr>
            <td>
              <div className="brandData">
                <img className="brandLogo" src={LogoEcBazaar} alt={"Logo"} />
                Wingreens Mart
              </div>
            </td>
            <td>₹49</td>
            <td>5,951</td>
            <td>₹15,302.00</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export { TopWholeseler };
