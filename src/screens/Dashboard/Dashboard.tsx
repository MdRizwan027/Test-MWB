
import React, { useEffect, useState } from "react";
import {  Dialog, Grid, TextField, TextFieldProps } from "@mui/material";
import { DashboardLayout } from "@/components/layouts";
import Box from '@mui/material/Box';
import { SummaryCard } from "@/components/molecules/Dashboard/SummaryCard";
import { useDashboardStyles } from "@/static/stylesheets/screens";
import { BazaarReportCard } from "@/components/molecules/Bazaars/BazaarReportCard";
import { BazaarCard,BazaarCounter,BazaarsPlanList,} from "@/components/molecules/Bazaars";
import { ActionButton } from "@/components/atoms/Button/ActionButton";
import TwMultiSelect from "@/components/atoms/TwMultiSelect/TwMultiSelect";
import { AppService } from "../../service/AllApiData.service";
import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { YearPicker } from '@mui/x-date-pickers';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { DateRangePicker, DesktopDateRangePicker, MobileDateRangePicker } from "@mui/lab";
import { Navigate, useNavigate } from "react-router-dom";
import { number } from "prop-types";

const Dashboard = () => {
  const [getAllBazar, setGetAllBazar] = useState([]);
  const [getTotalBazaar, setTotalBazaar] = useState("");
  const [getWholesellers, setWholesellers] = useState("");
  const [getRevenue, setRevenue] = useState("");
  const [getBill, setBill] = useState("");
  const [getAgent, setAgent] = useState("");
  const [getCommission, setCommission] = useState("");
   const [getCustomer, setCustomer] = useState("");
   const [activeTab, setActiveTab] = useState("")
   const [active, setActive] = useState(null)
  const getAllLists = async () => {
    const responseJson = await AppService.getAllDashBazaarLists();
    // console.log(responseJson.data.bazaar);
    setTotalBazaar(responseJson.data.bazaar);
    setWholesellers(responseJson.data.wholeseller);
    setRevenue(responseJson.data.revenue);
    setBill(responseJson.data.bill);
    setAgent(responseJson.data.agent);
    setCommission(responseJson.data.commission);
    setCustomer(responseJson.data.customer);
    
    // totalWholesellers(responseJson);
   
  };
 
  // const totalBazaar = (responseJson:any) =>{
  //   let sum = responseJson.data = (datas:any)=> {
  //     return datas.bazaars
  //   };
  //   console.log(sum);
  //   setTotalBazaar(sum);
  // }

  // const totalWholesellers = (responseJson:any) =>{
  //   let sum = responseJson.data.results.reduce(function(prev: number, current:any) {
  //     return prev + +current.wholesellers
  //   }, 0);
  //   console.log(sum);
  //   setWholesellers(sum);
  // }

  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs('2021-08-18T21:11:54'),
  );

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };
  const getAllListsMain = async () => {
    const responseJson = await AppService.getAllBazarList(1);
    setGetAllBazar(responseJson.data.results.slice(0, 9));
    // console.log("ecomprd", responseJson.data.results);
  };

  useEffect(() => {
    getAllLists();
    getAllListsMain();
  }, []);

  const classes = useDashboardStyles();


  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  const handleClick = () => navigate('/bazaars');


    const handleToggle = (e:any) => {
      setActiveTab(e)
    };

  return (
    <>
      <DashboardLayout>
        <div className={classes.root}>
          <div className={classes.summaryTitle}>
            <p>Summary  </p>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DesktopDatePicker
        views={["year"]}
          label="Year"
          inputFormat="2021"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
       
       
        
      </Stack>
    </LocalizationProvider>
          </div>

          <div>
            <SummaryCard />
          </div>

          <div className={classes.commonTitle}>
            <p>Bazar Report</p>
          </div>

          <div className="bazaarButtons">
            <div onClick={() => {
          handleToggle('one');
        }} ><ActionButton variant={activeTab === 'one' ? "primary" : "default"}   title={"Today"} /> </div>
            <div  onClick={() => {
          handleToggle('two');
        }} ><ActionButton variant={activeTab === 'two' ? "primary" : "default"}    title={"This Week"} /></div>
            <div onClick={() => {
          handleToggle('three');
        }}><ActionButton variant={activeTab === 'three' ? "primary" : "default"} title={"Last Week"} /></div>
            <div onClick={() => {
          handleToggle('four');
        }}><ActionButton variant={activeTab === 'four' ? "primary" : "default"} title={"This Month"} /></div>
            <div onClick={() => {
          handleToggle('five');
        }}><ActionButton variant={activeTab === 'five' ? "primary" : "default"} title={"Last Month"} /></div>
            <div onClick={() => {
          handleToggle('six');
        }}><ActionButton variant={activeTab === 'six' ? "primary" : "default"} title={"Add"} /></div>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DateRangePicker
          label="Year"
          value={value}
          onChange={handleChange}
          renderInput={(startProps:any, endProps:any) => (
            <React.Fragment>
              <TextField {...startProps} />
              <Box sx={{ mx: 2 }}> to </Box>
              <TextField {...endProps} />
            </React.Fragment>
          )}
        />
       
       
        
      </Stack>
    </LocalizationProvider>
          </div>
          
          
    
          <div className="bazaarFilters pt-[20px]">
            <TwMultiSelect />
            <TwMultiSelect />
            <TwMultiSelect />
            <TwMultiSelect />
          </div>

          <div className="bazaarReport">
            <BazaarReportCard
              title="Total Retailers"
              count={getWholesellers}
              revenue="Total revenue Earned"
              prize={"Rs- "+getRevenue} 
              bills="No of Bills"
              billsNumber={getBill}
            />
            <BazaarReportCard
              title="Total Agents"
              count={getAgent}
              revenue="Commission Paid"
              prize={"Rs- "+getCommission}
              bills="Customers Generated"
              billsNumber={getCustomer}
            />
          </div>

          <div className={classes.commonTitle}>
            <p>Plan Sold</p>
            <p className="moreButton" onClick={handleClickOpen}>See all</p>
          </div>

          <div className="bazaarButtons">
            <div onClick={() => {
          handleToggle('seven');
        }} ><ActionButton variant={activeTab === 'seven' ? "primary" : "default"}   title={"Today"} /> </div>
            <div  onClick={() => {
          handleToggle('eight');
        }} ><ActionButton variant={activeTab === 'eight' ? "primary" : "default"}    title={"This Week"} /></div>
            <div onClick={() => {
          handleToggle('nine');
        }}><ActionButton variant={activeTab === 'nine' ? "primary" : "default"} title={"Last Week"} /></div>
            <div onClick={() => {
          handleToggle('ten');
        }}><ActionButton variant={activeTab === 'ten' ? "primary" : "default"} title={"This Month"} /></div>
            <div onClick={() => {
          handleToggle('five');
        }}><ActionButton variant={activeTab === 'five' ? "primary" : "default"} title={"Last Month"} /></div>
            <div onClick={() => {
          handleToggle('eleven');
        }}><ActionButton variant={activeTab === 'eleven' ? "primary" : "default"} title={"Add"} /></div>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DateRangePicker
          label="Year"
          value={value}
          onChange={handleChange}
          renderInput={(startProps:any, endProps:any) => (
            <React.Fragment>
              <TextField {...startProps} />
              <Box sx={{ mx: 2 }}> to </Box>
              <TextField {...endProps} />
            </React.Fragment>
          )}
        />
       
       
        
      </Stack>
    </LocalizationProvider>
          </div>

          <div className="bazaarFilters pt-[20px]">
            <TwMultiSelect />
            <TwMultiSelect />
            <TwMultiSelect />
            <TwMultiSelect />
          </div>

          <div className="counterCard">
            <BazaarCounter />
          </div>

          <div className="planList">
            <BazaarsPlanList />
          </div>

          <div className={classes.commonTitle}>
            <p>All Bazars</p>
            <p className="moreButton" onClick={handleClick}>See all</p>
          </div>

          <div className="bazaarCard">
            <Grid container spacing={2}>
              <BazaarCard getAllBazars={getAllBazar}/>
            </Grid>
          </div>
        </div>
          {/* All Plans Details */}
          <Dialog open={open} className="planPopUP" onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
          <div className="flex items-center justify-between">
            <p className="text-[ #2E2C34] text-[18px] font-semibold pb-3">All Plan3 Sold</p>
            <p className="closeBtn" onClick={handleClose}> </p>
          </div>
          <div className="bazaarButtons">
            <ActionButton variant={"primary"} title={"Today"} />
            <ActionButton variant={"default"} title={"This Week"} />
            <ActionButton variant={"default"} title={"Last Week"} />
            <ActionButton variant={"default"} title={"This Month"} />
            <ActionButton variant={"default"} title={"Last Month"} />
            <ActionButton variant={"default"} title={"Add"} />
          </div>

          <div className="bazaarFilters pt-[20px]">
            <TwMultiSelect />
            <TwMultiSelect />
            <TwMultiSelect />
            <TwMultiSelect />
          </div>

          <div className="counterCard pt-5">
            <BazaarCounter />
          </div>

          <div className="planList">
            <BazaarsPlanList />
          </div>
         
          </Dialog>
          {/* All Plans Details */}

      </DashboardLayout>
    </>
  );
};

export default Dashboard;
