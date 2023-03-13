import React, { useEffect, useState } from "react";
import { useBazaarCounterStyles } from "@/static/stylesheets/molecules";
import { AppService } from "@/service/AllApiData.service";

const BazaarCounter = () => {
  const [getPlan, setTotalPlan] = useState("");
  const [getSubscriber, setSubscriber] = useState("");
  const [getRevenue, setRevenue] = useState("");

  const getAllLists = async () => {
    const responseJson = await AppService.getAllPlans();
    // console.log(responseJson.data.bazaar);
    setTotalPlan(responseJson.data.plan);
    setSubscriber(responseJson.data.subscriber);
    setRevenue(responseJson.data.revenue);
    
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

  const classes = useBazaarCounterStyles();

  return (
    <div className={classes.root}>
      <div className={classes.wholesellerCard}>
        <div>
          <div className="wholesellerItem">
            <p className="headTitle">Total Plans</p>
            <p className="wholesellerCount">{getPlan}</p>
          </div>
        </div>

        <div className="borderItem">
          <div className="wholesellerItem">
            <p className="headTitle">Total Subscribers</p>
            <p className="subscriberCount">{getSubscriber}</p>
          </div>
        </div>

        <div className="borderItem">
          <div className="wholesellerItem">
            <p className="headTitle">Revenue Generated</p>
            <p className="revenewCount">Rs. {getRevenue}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { BazaarCounter };
