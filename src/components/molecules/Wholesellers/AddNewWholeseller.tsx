import React, { useState } from "react";
import { useNewWholesellerStyles } from "@/static/stylesheets/molecules";
import LogoPrev from "@/static/icons/ic_previous.png";
import { FormControl, Input, InputAdornment, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { ActionButton } from "@/components/atoms/Button/ActionButton";

const AddNewWholeseller = () => {
  const classes = useNewWholesellerStyles();
  const [masterType, setMasterType] = useState("Regional Wholeseller");

  const handleChangeMasterType = (event: SelectChangeEvent) => {
    setMasterType(event.target.value as string);
  };

  return (
    <div className={classes.root}>
      <div className="headContainer">
        <div className="icon">
          <img src={LogoPrev} alt={"Logo"} />
        </div>
        <div className="headTitle">Add New Wholeseller</div>
      </div>

      <div className="field">
        <div className="w-full">
          <TextField label="Firm Name" variant="standard" id="fullWidth" className="w-full" />
        </div>
        <div className="flex items-center gap-8 mt-6">
         <TextField label="Contact Person" variant="standard" id="fullWidth" className="w-1/2" />
       
        <FormControl variant="standard" className="w-1/2">
          <InputLabel htmlFor="standard-adornment-amount">Phone number</InputLabel>
          <Input id="standard-adornment-amount" startAdornment={<InputAdornment position="start">+91 </InputAdornment>} type="number" />
        </FormControl>
        </div>
        <div className="flex items-center gap-8 mt-6">
          <div className="bazaarField w-1/2">
            <InputLabel id="Customer-Type">Customer Type</InputLabel>
            <Select labelId="Customer-Type" label="Customer Type" variant={"standard"} fullWidth={true}  value={masterType} onChange={handleChangeMasterType} >
              <MenuItem value={"Regional Wholeseller"}>Wholeseller</MenuItem>
              <MenuItem value={"Regional Wholeseller 1"}>Wholeseller 1</MenuItem>
            </Select>
          </div>
          <a href="#" className="text-purple text-[15px] leading-5 font-semibold">Create New Type</a>
        </div>
        
        <div className="flex items-center gap-8 mt-6">
          <TextField label="State" variant="standard" id="fullWidth" className="w-1/2" />
          <TextField label="District" variant="standard" id="fullWidth" className="w-1/2" />
        </div>
        <div className="flex items-center gap-8 mt-6">
          <TextField label="City" variant="standard" id="fullWidth" className="w-1/2" />
        </div>
        <div className="bazaarField flex items-center gap-8 mt-6">
         <div className="w-1/2">
            <InputLabel id="Bazaar">Bazaar</InputLabel>
            <Select label="Bazaar" labelId="Bazaar" variant={"standard"} fullWidth={true} value={masterType} onChange={handleChangeMasterType} className="w-1/2">
              <MenuItem value={"Regional Wholeseller"}>Electronic, Computer + 1</MenuItem>
              <MenuItem value={"Regional Wholeseller 1"}>Electronic, Computer + 2</MenuItem>
            </Select>
         </div>
        </div>
      </div>

      <div className="actionButton">
        <ActionButton variant="default" title="cancel" />
        <ActionButton variant="primary" title="save" />
      </div>
    </div>
  );
};

export { AddNewWholeseller };
