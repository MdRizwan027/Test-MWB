import React, { useEffect, useState } from "react";
import { useSummarycardStyle } from "@/static/stylesheets/molecules/summarycardStyle";
import { AppService } from "../../../../service/AllApiData.service";

const SummaryCard = () => {
  const [getTotalBazaar, setTotalBazaar] = useState("");
  const [getWholesellers, setWholesellers] = useState("");
  const [getRevenue, setRevenue] = useState("");
  const [getBill, setBill] = useState("");
  const [getAgent, setAgent] = useState("");
  const [getCommission, setCommission] = useState("");
   const [getCustomer, setCustomer] = useState("");
  const getAllLists = async () => {
    const responseJson = await AppService.getAllSummerys();
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

  useEffect(() => {
    getAllLists();
  }, []);
  const classes = useSummarycardStyle();

  return (
    <div className={classes.root}>
      <div className={classes.bazaarCard}>
        <p className="headTitle">Total Bazar</p>
        <p className="headSubtitle">{getTotalBazaar}</p>
      </div>

      <div className={classes.wholesellerCard}>
        <div className="wholesellerItem">
          <p className="headTitle">Total Wholesellers</p>
          <p className="headSubtitle">{getWholesellers}</p>
        </div>
        <div>
          <p className="headTitle2">Total Revenue Earned</p>
          <p className="headSubtitle2">Rs. {getRevenue}</p>
        </div>
        <div>
          <p className="headTitle2">No. of Bills</p>
          <p className="headSubtitle2">{getBill}</p>
        </div>
      </div>

      <div className={classes.agentsCard}>
        <div className="agentItem">
          <p className="headTitle">Total Agents</p>
          <p className="headSubtitle">{getAgent}</p>
        </div>
        <div>
          <p className="headTitle2">Commission Paid</p>
          <p className="headSubtitle2">Rs. {getCommission}</p>
        </div>
        <div>
          <p className="headTitle2">Customers Generated</p>
          <p className="headSubtitle2">{getCommission}</p>
        </div>
      </div>
    </div>
  );
};

export { SummaryCard };
