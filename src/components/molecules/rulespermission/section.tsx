import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, InputAdornment, MenuItem, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import pdf from '@/static/icons/pdf.svg';
import excel from '@/static/icons/excel.svg';
import plus from '@/static/icons/plus.svg';
import { Typography } from "@material-tailwind/react";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs, { Dayjs } from "dayjs";
import { ActionButton } from "@/components/atoms/Button/ActionButton";

const HeaderSection = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs('2014-08-18T21:11:54'),
  );

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  return (
   <Box className="flex items-center justify-between">
        <Box className="flex items-center gap-6">
            <a className="text-sm font-semibold text-[#2E2C34] pb-3 px-3 border-b-[2px] border-[#5542F6] inline-block" onClick={() => navigate("/rolepermission")}>Users</a>
            <a className="text-sm font-normal text-[#84818A] pb-3 px-3 inline-block border-b-[2px] border-transparent" onClick={() => navigate("/rolespermissions")}>Roles and Permissions</a>
        </Box>
        <Box className="flex items-center gap-[10px]">
            <a className="pdf-link"> <img src={pdf} alt="PDF" /> Export to PDF</a>
            <a className="excel-link"> <img src={excel} alt="pdf" /> Export to Excel</a>
            
            <div className="inline-block">
            <a className="add-rules" onClick={handleClickOpen}><img src={plus} alt="Plus"/> Add New User</a>
            <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" className="rolePOPUP">
              <DialogTitle id="alert-dialog-title">
                {"Add New User"}
              </DialogTitle>
              <DialogContent>
                <Typography className="form-name">General Details</Typography>
                <form>
                  <Box className="flex items-center gap-4 mt-4 w-full">
                    <TextField id="standard-basic" label="First Name" variant="standard" className=" w-full" />
                    <TextField id="standard-basic" label="Last Name" variant="standard" className=" w-full"  />
                  </Box>
                  <Box className="flex items-end gap-4 mt-4 w-full">
                    <TextField id="standard-basic" label="Email ID" variant="standard" className=" w-full" />
                    <TextField className=" w-full"  id="filled-start-adornment" InputProps={{   startAdornment: <InputAdornment position="start">kg</InputAdornment>, }}  variant="standard"  />
                  </Box>
                  <Box className="flex items-end gap-4 mt-6 w-full">
                    <TextField className="w-full max-w-[207px]" id="standard-select-currency"  select label="Select" defaultValue="EUR"  variant="standard" >
                        <MenuItem> Male</MenuItem>
                        <MenuItem> Female</MenuItem>
                    </TextField>
                    <LocalizationProvider dateAdapter={AdapterDayjs} className=" w-full">
                        <Stack spacing={3}>
                        <DesktopDatePicker
                          label="Date desktop"
                          inputFormat="MM/DD/YYYY"
                          value={value}
                          onChange={handleChange}
                          renderInput={(params) => <TextField {...params} />} />
                        </Stack>
                      </LocalizationProvider>
                  </Box>
                  <Box className="flex justify-between items-center mt-10">
                    <Typography className="text-[#4E2FA9] text-base font-semibold">Role and Regions</Typography>
                    <Typography className="text-[#FF6652] text-base font-semibold">Add New Role</Typography>
                  </Box>
                  <Box className="flex items-end gap-4 mt-6 w-full">
                    <TextField className="w-full max-w-[207px]" id="standard-select-currency"  select label="Role" defaultValue="Area Sales Manager"  variant="standard" >
                        <MenuItem> Area Sales Manager</MenuItem>
                        <MenuItem> Area Sales Manager 2</MenuItem>
                    </TextField>
                    <TextField className="w-full max-w-[207px]" id="standard-select-currency"  select label="Select Zonal Manager" defaultValue="Manager"  variant="standard" >
                        <MenuItem> Select Zonal Manager</MenuItem>
                        <MenuItem> Select Zonal Manager4</MenuItem>
                    </TextField>
                  </Box>
                  <Box className="flex items-end gap-4 mt-6 w-full">
                    <TextField className="w-full max-w-[207px]" id="standard-select-currency"  select label="District" defaultValue="EUR"  variant="standard" >
                        <MenuItem> District</MenuItem>
                        <MenuItem> District</MenuItem>
                    </TextField>
                    <TextField className="w-full max-w-[207px]" id="standard-select-currency"  select label="Select" defaultValue="EUR"  variant="standard" >
                        <MenuItem> Male</MenuItem>
                        <MenuItem> Female</MenuItem>
                    </TextField>
                  </Box>
                  <Box className="flex items-end gap-4 mt-6 w-full">
                    <TextField className="w-full max-w-[207px]" id="standard-select-currency"  select label="Select" defaultValue="EUR"  variant="standard" >
                        <MenuItem> Male</MenuItem>
                        <MenuItem> Female</MenuItem>
                    </TextField>
                  </Box>
                </form>
              </DialogContent>
              <DialogActions>
                <ActionButton onClick={handleClose} variant="default" title="Cancel" />
                <ActionButton onClick={handleClose} variant="primary" title="Save Changes" />                  
              </DialogActions>
            </Dialog>
          </div>
        </Box>
   </Box>
  );
};

export {HeaderSection};
