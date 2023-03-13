import React, { useState } from "react";
import { DashboardLayout } from "@/components/layouts";
import { SectionHeader } from "@/components/molecules/Bazaars";
import { useWholesellerListStyles } from "@/static/stylesheets/screens";
import { Grid } from "@mui/material";
import { AddButton } from "@/components/atoms/Button";
import { MultiSelect } from "@/components/atoms/MultiSelect";
import { SearchField } from "@/components/atoms/SearchField";
import { WholesellerList } from "@/components/molecules/WholesellerList";
import { useNavigate } from "react-router-dom";

const Wholeseller = () => {
  const classes = useWholesellerListStyles();
  const [items, setItems] = useState([1]);
  const data = [1, 2, 3, 4, 5, 6, 7];
  const navigate = useNavigate();

  return (
    <>
      <DashboardLayout>
        <div className={classes.root}>
          <SectionHeader />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <div className="headTitle">Wholesellers</div>
            </Grid>

            <Grid item xs={6}>
              <div className="actionArea">
                <div>
                  <SearchField />
                </div>
                <div className="actionButton">
                  <AddButton
                    label="Add Bazaar"
                    onClick={() => navigate("/addwholeseller")}
                  />
                </div>
              </div>
            </Grid>
          </Grid>
          <div className="wholesellerFilter">
            {data.map((item: any) => (
              <MultiSelect
                options={[
                  {
                    label: "All Bazaars",
                    value: 1,
                  },
                  {
                    label: "All States",
                    value: 2,
                  },
                ]}
                value={items}
                onChange={(items) => setItems(() => items)}
                fullWidth={true}
              />
            ))}
          </div>
          <div>
            <WholesellerList />
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Wholeseller;
