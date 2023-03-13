import React, { useState } from "react";
import { DashboardLayout } from "@/components/layouts";
import { RoleSection } from "@/components/molecules/rulespermission/roleSection";
import { useNavigate } from "react-router-dom";
import { Box, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, FormGroup, Grid, InputAdornment, MenuItem, Pagination, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import dots from '@/static/icons/dots-1.svg';
import setting from '@/static/svg/setting.svg';
import { ActionButton } from "@/components/atoms/Button/ActionButton";
import { LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const RolesPermission = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <DashboardLayout>
      <Box className="w-full">
        <RoleSection />
        <TableContainer component={Paper} className="mt-8">
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" className="global-table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Role Type</TableCell>
                <TableCell>Members</TableCell>
                <TableCell>Permissions</TableCell>
                <TableCell> </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">   Super Admin  </TableCell>
                  <TableCell> Active</TableCell>
                  <TableCell>Default</TableCell>
                  <TableCell> 1</TableCell>
                  <TableCell onClick={handleClickOpen} className="cursor-pointer"> <Box className="text-[#4E2FA9] flex items-center gap-2"><img src={setting} alt="setting" /> <span>Modify</span></Box></TableCell>
                  <TableCell> <img src={dots} alt="Dots" /> </TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Stack spacing={2} className="pagination">
          <Pagination count={10} variant="outlined" shape="rounded" />
        </Stack>
        
        <div>
        <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" className="addRole">
              <DialogTitle id="alert-dialog-title">
               <span className="text-[#2E2C34] text-2xl leading-5 font-semibold">Zonal Manager -</span> <span className="text-[#84818A] font-normal text-2xl leading-5 ">Modify Permissions</span>
              </DialogTitle>
              <DialogContent>
                <Typography className="title">Permissions  Group Title</Typography>
                <Typography className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Permission Name" className="checkbox-addrole"/>
                    <span className="pera-text">A short description of the permissions will be displayed here</span>
                </FormGroup>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Permission Name" className="checkbox-addrole"/>
                    <span className="pera-text">A short description of the permissions will be displayed here</span>
                </FormGroup>
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Permission Name" className="checkbox-addrole"/>
                    <span className="pera-text">A short description of the permissions will be displayed here</span>
                </FormGroup>
                <Typography className="title pt-8">Permissions  Group Title</Typography>
                <Typography className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Permission Name" className="checkbox-addrole"/>
                    <span className="pera-text">A short description of the permissions will be displayed here</span>
                </FormGroup>
              </DialogContent>
              <Box className="divider"></Box>
              <DialogActions>
                <ActionButton onClick={handleClose} variant="default" title="Cancel" />
                <ActionButton onClick={handleClose} variant="primary" title="Save Changes" />                  
              </DialogActions>
            </Dialog>
        </div>
      </Box>
    </DashboardLayout>
  );
};

export default RolesPermission;
