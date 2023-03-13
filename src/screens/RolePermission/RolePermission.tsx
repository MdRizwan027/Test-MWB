import React, { useState } from "react";
import { DashboardLayout } from "@/components/layouts";
import { HeaderSection } from "@/components/molecules/rulespermission/section";
import { useNavigate } from "react-router-dom";
import { Box, Grid, Pagination, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import UserProfile from '@/static/images/User-profile.png';

const RolePermission = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <Box className="w-full">
        <HeaderSection />

        <TableContainer component={Paper} className="mt-8">
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" className="global-table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>State</TableCell>
                <TableCell>Phone number</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    ADM221-10
                  </TableCell>
                  <TableCell>
                      <Box className="flex gap-2 items-center">
                        <Box className="w-[34px] h-[34px] rounded-full"><img src={UserProfile} alt="Profile" /></Box>
                        <Box>
                          <Typography className="name">Maria Roselia</Typography>
                          <Typography className="mail">vaz@vid.io</Typography>
                        </Box>
                      </Box>
                  </TableCell>
                  <TableCell>National Manager </TableCell>
                  <TableCell> India</TableCell>
                  <TableCell> (847) 785-2310</TableCell>
                  <TableCell> <span className="contact">contact</span></TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Stack spacing={2} className="pagination">
          <Pagination count={10} variant="outlined" shape="rounded" />
        </Stack>
      </Box>
    </DashboardLayout>
  );
};

export default RolePermission;
