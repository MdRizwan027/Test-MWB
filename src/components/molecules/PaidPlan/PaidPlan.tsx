import React, { useState } from "react";
import { useKycFormStyles } from "@/static/stylesheets/molecules";
import {
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import LogoDelete from "@/static/icons/ic_delete.png";
import LogoEdit from "@/static/icons/ic_edit.png";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const PaidPlan = () => {
  const classes = useKycFormStyles();
  const [masterType, setMasterType] = useState("Regional Wholeseller");
  const [value, setValue] = useState<Dayjs | null>(null);

  const handleChangeMasterType = (event: SelectChangeEvent) => {
    setMasterType(event.target.value as string);
  };

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={classes.root}>
        <div className="field">
          <div className="bazaarField flex items-center gap-8 mt-6">
            <FormControl variant="standard" className="w-1/2">
              <InputLabel htmlFor="standard-adornment-amount">Name</InputLabel>
              <Input id="standard-adornment-amount" type="text" />
            </FormControl>
          </div>

          <div className="bazaarField flex items-center gap-8 mt-6">
            <FormControl variant="standard" className="w-1/2">
              <DesktopDatePicker
                label="Start Date"
                inputFormat="MM/DD/YYYY"
                value={value}
                onChange={handleChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant={"standard"}
                  />
                )}
              />
            </FormControl>
            <div className="w-1/2">
              <InputLabel id="Bazaar">Start Times</InputLabel>
              <Select
                label="Bazaar"
                labelId="Bazaar"
                variant={"standard"}
                fullWidth={true}
                value={masterType}
                onChange={handleChangeMasterType}
                className="w-1/2"
              >
                <MenuItem value={"Regional Wholeseller"}>4 PM</MenuItem>
                <MenuItem value={"Regional Wholeseller 1"}>4 PM</MenuItem>
              </Select>
            </div>
          </div>

          <div className="bazaarField flex items-center gap-8 mt-6">
            <FormControl variant="standard" className="w-1/2">
              <DesktopDatePicker
                label="End Date"
                inputFormat="MM/DD/YYYY"
                value={value}
                onChange={handleChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant={"standard"}
                  />
                )}
              />
            </FormControl>
            <div className="w-1/2">
              <InputLabel id="Bazaar">Start Time</InputLabel>
              <Select
                label="Bazaar"
                labelId="Bazaar"
                variant={"standard"}
                fullWidth={true}
                value={masterType}
                onChange={handleChangeMasterType}
                className="w-1/2"
              >
                <MenuItem value={"Regional Wholeseller"}>4 PM</MenuItem>
                <MenuItem value={"Regional Wholeseller 1"}>4 PM</MenuItem>
              </Select>
            </div>
          </div>
        </div>

        <div className="mt-[30px] items-center">
          <p className="text-[#4E2FA9] font-bold text-[20px]	">Plan Features</p>
        </div>

        <div className="docContainer flex gap-4">
          <div>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          </div>

          <div className="ActionLogo">
            <img src={LogoDelete} alt={"Logo"} />
            <div className="dividor"></div>
            <img src={LogoEdit} alt={"Logo"} />
          </div>
        </div>

        <div className="docContainer flex gap-4">
          <div>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          </div>

          <div className="ActionLogo">
            <img src={LogoDelete} alt={"Logo"} />
            <div className="dividor"></div>
            <img src={LogoEdit} alt={"Logo"} />
          </div>
        </div>
        <div className="mt=[10px] mb-[10px]">
          <div
            className="border-2 border-dashed border-[#5542F6] w-[250px] p-[10px] items-center text-center rounded-lg cursor-pointer">
            <p>+ Add More</p>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export { PaidPlan };
