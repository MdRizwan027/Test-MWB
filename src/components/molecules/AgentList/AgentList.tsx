import React, { useEffect, useState } from "react";
import { GridOptionButton } from "@/components/atoms/Button";
import { Switch } from "@/components/atoms/Switch";
import { useAgentStyles } from "@/static/stylesheets/molecules";
import LogoContract from "@/static/icons/uploader-frame.png";
import { AppService } from "../../../service/AllApiData.service";
import { useLocation } from "react-router-dom";

// interface MasterListGridProps {
//   type?: "WholeSeller" | "Retailer";
// }

const AgentList = (props:any) => {
  const classes = useAgentStyles();
  // const data = [1, 2, 3, 4, 5, 6];
  const [getAllAgentList, setGetAllAgentList] = useState([]);
  const [iDS, setIDS] = useState(localStorage.getItem("IDS"));


  const getAllListss = async (iDS:any) => {
    const responseJson = await AppService.getAllBazarListwholeseller(iDS);
    setGetAllAgentList(responseJson.data.results);
    // console.log("ecomprd", responseJson.data.results);
  };

  const getAllListssSearch = async () => {
    if(props.keys === ""){
    
    }else{
      const responseJson = await AppService.getAllBazarAgentListSearch(iDS, props.keys);
    // setGetAllWholesellers(responseJson.data.results);
    console.log("ecomprdserd", responseJson.data);
    setGetAllAgentList(responseJson.data.results);
    
    }
  };


  useEffect(() => {
     console.log(props.keys);
     getAllListssSearch();
      getAllListss(iDS);
  
    }, [props.keys]);
  
  return (
    <div className={classes.root}>
      <table>
        <tr>
          <th>Name</th>
          <th>Mobile Number</th>
          <th>City</th>
          <th>Bazaar</th>
          <th>Type</th>
          <th>Status</th>
          <th>Enable/Disable</th>
          <th></th>
          <th></th>
        </tr>
        {getAllAgentList.map((item: any) => (
          <tr>
            <td>{item.name}</td>
            <td>{"+91-8477852310"}</td>
            <td>{item.city}</td>
            <td>{item.bazaar}</td>
            <td>{item.type}</td>
            <td>
              <div className="status">{item.status}</div>
            </td>
            <td>
              <div>
                <Switch SwitchProps={item.enable} />
              </div>
            </td>
            <td>
              <GridOptionButton icon={"vertical-options"} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export { AgentList };
