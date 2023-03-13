import React from "react";
import { usecityBuisnessStyle } from "@/static/stylesheets/molecules";

const CityBuisness = () => {
  const classes = usecityBuisnessStyle();
  const data = [1, 2, 3, 4, 5];

  return (
    <div className={classes.root}>
      <table>
        <tr>
          <tr>
            <th>Cities</th>
            <th>ORDERS</th>
            <th>SALES</th>
          </tr>
        </tr>

        {data.map((item: any) => (
          <tr>
            <td>Delhi</td>
            <td>12,202</td>
            <td>₹150,200</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export { CityBuisness };
