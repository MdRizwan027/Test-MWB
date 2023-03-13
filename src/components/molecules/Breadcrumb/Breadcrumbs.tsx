import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import { useBreadcrumbStyles } from "@/static/stylesheets/molecules/";
import { AddButton } from "@/components/atoms/Button";
import LogoViewGrid from "@/static/icons/ic_grid.png";
import LogoViewTable from "@/static/icons/ic_column.png";
import { SearchField } from "@/components/atoms/SearchField";


// interface BreadcrumbsProps {
//   setItemView(item: any): void;
//   itemType: string;
// }

const Breadcrumbs= (props:any) => {
  const classes = useBreadcrumbStyles();
  const navigate = useNavigate();
  const [searchK, setSearchK] = useState("");
  const handleCallback = (e:any) =>{
    console.log(e);
    setSearchK(e);
}

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div className="headTitle">All Bazaars</div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.container}>
            <div className="brandData">
              {props?.itemType === "Grid" ? (
                <img
                  className="brandLogo"
                  src={LogoViewGrid}
                  alt={"Logo"}
                  onClick={() => props?.setItemView("Table")}
                />
              ) : (
                <img
                  className="brandLogo"
                  src={LogoViewTable}
                  alt={"Logo"}
                  onClick={() => props?.setItemView("Grid")}
                />
              )}
            </div>
            <div className="flex items-center px-[10px]">
              <SearchField parentCallback = {handleCallback} />
            </div>
            <div>
              <AddButton
                label="Add Bazaar"
                onClick={() => navigate("/newbazaars")}
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export { Breadcrumbs };
