import React, { useState } from "react";
import { DashboardLayout } from "@/components/layouts";
import { RoleSection } from "@/components/molecules/rulespermission/roleSection";
import { useNavigate } from "react-router-dom";
import { Box, Checkbox, FormControlLabel, FormGroup, TextField, Typography } from "@mui/material";
import arrow from '@/static/svg/ic_arrow.svg';
import { ActionButton } from "@/components/atoms/Button/ActionButton";

const AddRols = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <Box className="w-full addRole">
          <Box className="breadCrumb"> <img src={arrow} alt="left arrow" /> <span>Create New Role</span></Box>
          <Box className="role">
            <TextField id="standard-basic" label="Role Name" variant="standard" className=" w-[300px]" />
          </Box>
          <Typography className="title pt-8">Permissions  Group Title</Typography>
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
          <Box className="pt-8 flex items-center gap-5">
            <ActionButton variant="default" title="Cancel" />
            <ActionButton variant="primary" title="Save" />  
          </Box>                
      </Box>
    </DashboardLayout>
  );
};

export default AddRols;
