import React, { useEffect, useState } from "react";
import { DashboardLayout } from "@/components/layouts";
import { SectionHeader } from "@/components/molecules/Bazaars";
import { useElectronicsBazaarStyles } from "@/static/stylesheets/screens";
import LogoAdd from "@/static/icons/ic_report.png";
import LogoGo from "@/static/icons/ic_go.png";
import { Grid } from "@mui/material";
import { BazaarReportCard } from "@/components/molecules/Bazaars/BazaarReportCard";
import { FeaturesTab } from "@/components/organisms/FeaturesTab";
import { ActionButton } from "@/components/atoms/Button/ActionButton";
import { AddButton } from "@/components/atoms/Button";
import { useNavigate } from "react-router-dom";
import { WholesellerList } from "@/components/molecules/WholesellerList";
import { ProductsList } from "@/components/molecules/ProductsList";
import { AgentList } from "@/components/molecules/AgentList";
import { SearchField } from "@/components/atoms/SearchField";
import { AppService } from "@/service/AllApiData.service";


const ElectronicsBazaar = (props:any) => {
  const classes = useElectronicsBazaarStyles();
  const navigate = useNavigate();
  const [getAllBazarWholes, setGetAllBazarWholes] = useState([]);
  const [iDS, setIDS] = useState(localStorage.getItem("IDS"));
  const [getAllWholesellers, setGetAllWholesellers] = useState([]);
  const [getAllAgentList, setGetAllAgentList] = useState([]);
  const [getAllPrdList, setGetAllPrdList] = useState([]);
  const [count1, setCount1] = useState("");
  const [count2, setCount2] = useState("");
  const [count3, setCount3] = useState("");
  const [searchK, setSearchK] = useState("");
  // const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const getAllListss = async (iDS:any) => {
    const responseJson = await AppService.getAllBazarListwholeseller(iDS);
    setGetAllWholesellers(responseJson.data.results);
    // console.log("ecomprd", responseJson.data.results.length);
    setCount1(responseJson.data.results.length);
  };
  const getAllListss2 = async (iDS:any) => {
    const responseJson = await AppService.getAllBazarListwholeseller(iDS);
    setGetAllAgentList(responseJson.data.results);
    setCount2(responseJson.data.results.length);
    // console.log("ecomprd", responseJson.data.results);
  };
  const getAllListss3 = async (iDS:any) => {
    const responseJson = await AppService.getAllBazarProductList(iDS);
    setGetAllPrdList(responseJson.data.results);
    setCount3(responseJson.data.results.length);
    // console.log("ecomprd", responseJson.data.results);
  };

  const handleCallback = (e:any) =>{
    console.log(e);
    setSearchK(e);
}
 
  useEffect(() => {
    getAllListss(iDS);
    getAllListss2(iDS);
    getAllListss3(iDS);
    
    // console.log(count);
  }, []);
  return (
    <>
      <DashboardLayout>
        <SectionHeader />
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <div className="headingTitle">Electronic Bazaar</div>
            </Grid>

            <Grid item xs={6}>
              <div className={classes.container}>
                <img src={LogoAdd} alt={"Logo"} />
                <p
                  className="reportButton"
                  onClick={() => navigate("/bazaarreport")}
                >
                  View Report
                </p>
                <img src={LogoGo} alt={"Logo"} />
              </div>
            </Grid>

            <Grid item xs={6}>
              <BazaarReportCard
                title="Total Retailers"
                count="53"
                revenue="Total revenue Earned"
                prize="Rz. 1,54,00"
                bills="No of Bills"
                billsNumber="52"
              />
            </Grid>

            <Grid item xs={6}>
              <BazaarReportCard
                title="Total Retailers"
                count="53"
                revenue="Total revenue Earned"
                prize="Rz. 1,54,00"
                bills="No of Bills"
                billsNumber="52"
              />
            </Grid>

            <Grid item xs={6}>
              <div className="bazaarButtons add-bazar">
                <ActionButton variant={"primary"} title={"Today"} />
                <ActionButton variant={"default"} title={"This Week"} />
                <ActionButton variant={"default"} title={"Last Week"} />
                <ActionButton variant={"default"} title={"This Month"} />
                <ActionButton variant={"default"} title={"Last Month"} />
                <ActionButton variant={"default"} title={"Add"} />
              </div>
            </Grid>

            <Grid item xs={6}>
              <div className="leftContent">
                <form className="max-w-sm px-4">
                  <div className="relative">
                    <SearchField parentCallback = {handleCallback}/>
                  </div>
                </form>

                <div>
                  <AddButton label="Add Bazaar" />
                </div>
              </div>
            </Grid>

            <Grid item xs={12}>
              <FeaturesTab
                items={[
                  {
                    label: "Wholeseller ("+count1+")",
                    content: <WholesellerList keys={searchK}  />,
                  },
                  {
                    label: "Agents ("+count2+")",
                    content: <AgentList keys={searchK}/>,
                  },
                  {
                    label: "Products ("+count3+")",
                    content: <ProductsList keys={searchK}/>,
                  },
                ]}
              />
            </Grid>
          </Grid>
        </div>
      </DashboardLayout>
    </>
  );
};

export default ElectronicsBazaar;
