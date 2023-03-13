import React, { useState } from "react";
import { ActionButton } from "@/components/atoms/Button/ActionButton";
import { useKycFormStyles } from "@/static/stylesheets/molecules";
import {
  Avatar,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import LogoDelete from "@/static/icons/ic_delete.png";
import LogoEdit from "@/static/icons/ic_edit.png";

const SalesManKYCForm = () => {
  const classes = useKycFormStyles();
  const [masterType, setMasterType] = useState("Regional Wholeseller");

  const handleChangeMasterType = (event: SelectChangeEvent) => {
    setMasterType(event.target.value as string);
  };

  return (
    <div className={classes.root}>
      <div className="headContainer">
        <Avatar sx={{ width: 100, height: 100 }}>Logo</Avatar>
        <div>
          <ActionButton variant="default" title="Upload new picture" />
        </div>
        Remove picture
      </div>
      <div className="field">
        <div className="bazaarField flex items-center gap-8 mt-6">
          <FormControl variant="standard" className="w-1/2">
            <InputLabel htmlFor="standard-adornment-amount">Name</InputLabel>
            <Input id="standard-adornment-amount" type="text" />
          </FormControl>
        </div>

        <div className="flex items-center gap-8 mt-6">
          <FormControl variant="standard" className="w-1/2">
            <InputLabel htmlFor="standard-adornment-amount">
              Phone number
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              startAdornment={
                <InputAdornment position="start">+91 </InputAdornment>
              }
              type="number"
            />
          </FormControl>

          <FormControl variant="standard" className="w-1/2">
            <InputLabel htmlFor="standard-adornment-amount">
              Alternative number
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              startAdornment={
                <InputAdornment position="start">+91 </InputAdornment>
              }
              type="number"
            />
          </FormControl>
        </div>

        <div className="bazaarField flex items-center gap-8 mt-6">
          <FormControl variant="standard" className="w-1/2">
            <InputLabel htmlFor="standard-adornment-amount">
              Email Address
            </InputLabel>
            <Input id="standard-adornment-amount" type="email" />
          </FormControl>
          <div className="w-1/2">
            <InputLabel id="Bazaar">Category</InputLabel>
            <Select
              label="Bazaar"
              labelId="Bazaar"
              variant={"standard"}
              fullWidth={true}
              value={masterType}
              onChange={handleChangeMasterType}
              className="w-1/2"
            >
              <MenuItem value={"Regional Wholeseller"}>
                Electronic, Computer + 1
              </MenuItem>
              <MenuItem value={"Regional Wholeseller 1"}>
                Electronic, Computer + 2
              </MenuItem>
            </Select>
          </div>
        </div>
        <div className="bazaarField flex items-center gap-8 mt-6">
          <div className="w-1/2">
            <InputLabel id="Bazaar">Gender</InputLabel>
            <Select
              label="Bazaar"
              labelId="Bazaar"
              variant={"standard"}
              fullWidth={true}
              value={masterType}
              onChange={handleChangeMasterType}
              className="w-1/2"
            >
              <MenuItem value={"Regional Wholeseller"}>Male</MenuItem>
              <MenuItem value={"Regional Wholeseller 1"}>Female</MenuItem>
            </Select>
          </div>
        </div>
        <div className="bazaarField flex items-center gap-8 mt-6">
          <FormControl variant="standard" className="w-1/2">
            <InputLabel htmlFor="standard-adornment-amount">Address</InputLabel>
            <Input id="standard-adornment-amount" type="text" />
          </FormControl>
        </div>
        <div className="flex items-center gap-8 mt-6">
          <TextField
            label="Address"
            variant="standard"
            id="fullWidth"
            className="w-1/2"
          />
          <TextField
            label="Landmark"
            variant="standard"
            id="fullWidth"
            className="w-1/2"
          />
        </div>
        <div className="flex items-center gap-8 mt-6">
          <TextField
            label="State"
            variant="standard"
            id="fullWidth"
            className="w-1/2"
          />
          <TextField
            label="City"
            variant="standard"
            id="fullWidth"
            className="w-1/2"
          />
        </div>
        <div className="flex items-center gap-8 mt-6">
          <FormControl variant="standard" className="w-1/2">
            <InputLabel htmlFor="standard-adornment-amount">Pincode</InputLabel>
            <Input id="standard-adornment-amount" type="number" />
          </FormControl>
        </div>
      </div>

      <div className="mapButton mt-8">
        <p>Set Location via Google Maps</p>
        <ActionButton variant="primary" title="Set Location" />
      </div>

      <div className="docContainer">
        <p>Documents</p>
        <div className="Attachment-file">
          <div>
            Aadhaar Card
            <Avatar
              sx={{
                width: 100,
                height: 100,
                borderRadius: 2,
              }}
              variant="square"
            >
              Card
            </Avatar>
            <div className="documentButton">
              <div className="ActionLogo">
                <img src={LogoDelete} alt={"Logo"} />
                <div className="dividor"></div>
                <img src={LogoEdit} alt={"Logo"} />
              </div>
            </div>
          </div>
          <div>
            Pan Card
            <Avatar
              sx={{
                width: 100,
                height: 100,
                borderRadius: 2,
              }}
              variant="square"
            >
              Card
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SalesManKYCForm };
