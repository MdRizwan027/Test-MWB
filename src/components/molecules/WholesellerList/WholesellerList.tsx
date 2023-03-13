import React, { useEffect, useState } from "react";
import { usewholesellerListStyles } from "@/static/stylesheets/molecules";
import { GridOptionButton } from "@/components/atoms/Button";
import { Dialog } from "@mui/material";
import { Switch } from "@/components/atoms/Switch";
import LogoContract from "@/static/icons/uploader-frame.png";
import NidFront from "@/static/images/mwb_nid_frnt.png";
import NidBack from "@/static/images/mwb_nid_back.png";
import { ActionButton } from "@/components/atoms/Button/ActionButton";
import { useWholesellerListStyles } from "@/static/stylesheets/screens";
import dots from "@/static/icons/dots-1.svg";
import complete from "@/static/icons/complete.svg";
import fill from "@/static/icons/fill.svg";
import phone from "@/static/icons/phone.svg";
import contact from "@/static/icons/contact-phone.svg";
import calendar from "@/static/icons/calendar.svg";
import deleteagent from "@/static/icons/delete-agent.svg";
import { AppService } from "../../../service/AllApiData.service";
import { useLocation } from "react-router-dom";


// interface WholesellerProps {
//   type?: "WholeSeller" | "Retailer";
// }


const WholesellerList = (props:any) => {
  const location = useLocation()
  //  console.log(location.pathname);
  const classes = usewholesellerListStyles();
  const wholeSellerListStyles = useWholesellerListStyles();
  const [getAllWholeseller, setGetAllWholeseller] = useState([]);
  const [getAllWholesellers, setGetAllWholesellers] = useState([]);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [iDS, setIDS] = useState(localStorage.getItem("IDS"));
  // const iDS = localStorage.getItem("IDS");
  const getAllLists = async () => {
    const responseJson = await AppService.getAllwholesellerList();
    setGetAllWholeseller(responseJson.data.results);
    // console.log("ecomprd", responseJson.data.results);
  };
  const getAllListss = async (iDS:any) => {
    const responseJson = await AppService.getAllBazarListwholeseller(iDS);
    setGetAllWholesellers(responseJson.data.results);
    // console.log("ecomprd", responseJson.data.results);
  };
  const getAllListssSearch = async () => {
    if(props.keys === ""){
    
    }else{
      const responseJson = await AppService.getAllBazarListwholesellerSearch(iDS, props.keys);
    // setGetAllWholesellers(responseJson.data.results);
    console.log("ecomprdserd", responseJson.data);
    if(location.pathname==='/wholesellerlist'){
      setGetAllWholeseller(responseJson.data.results);
    }else{
      setGetAllWholesellers(responseJson.data.results);
    }
    }
  };



  

 
 
  
  useEffect(() => {
   console.log("ddd", props.keys);
   getAllListssSearch();
    getAllLists();
    getAllListss(iDS);
  }, [props.keys]);

  if(location.pathname==='/wholesellerlist'){
  return (
    <div className={classes.root}>
      <table>
        <tr>
          <th>Name</th>
          <th>Contact Person</th>
          <th>City</th>
          <th>Bazaar</th>
          <th>Type</th>
          <th>Agent</th>
          <th>Status</th>
          <th>Plan Expiry</th>
          <th>Enable/Disable</th>
          <th></th>
        </tr>
{/* onClick={() => setAddModalOpen(true)} */}
        {getAllWholeseller.map((item: any) => (
          <tr >
            <td>{item.wholeseller_name}</td>
            <td className="person-details">
              <div className="flex items-center gap-2 text-[#4E2FA9]">
                <img className="brandLogo" src={contact} alt={"Logo"} />
                {item.wholeseller_number}
              </div>
              <div className="flex flex-col items-start gap-2 person-model">
              <span className="job-title">Firm Manager</span>
              <span className="text-sm text-[#2E2C34] font-medium">{item.wholeseller_name}</span>
              <span className="text-[13px] text-[#84818A] font-medium leading-5">{item.wholeseller_city}, {item.wholeseller_state}</span>
              <span className="flex items-center gap-2 text-sm text-[#2E2C34] font-medium"><img src={phone} alt="phone" /> {item.wholeseller_number}</span>
            </div>
            </td>
            <td>{item.wholeseller_city}</td>
            <td className="overlap">{item.wholeseller_type}</td>
            <td className="person-type">{item.wholeseller_agent}</td>
            <td className="person-details">
              <div className="flex items-center gap-2 text-[#4E2FA9]">
                <img className="brandLogo" src={contact} alt={"Logo"} />
                {item.wholeseller_number}
              </div>
              <div className="flex flex-col items-start gap-2 person-model">
              <span className="job-title">Firm Manager</span>
              <span className="text-sm text-[#2E2C34] font-medium">{item.wholeseller_name}</span>
              <span className="text-[13px] text-[#84818A] font-medium leading-5">{item.wholeseller_city}, {item.wholeseller_state}</span>
              <span className="flex items-center gap-2 text-sm text-[#2E2C34] font-medium"><img src={phone} alt="phone" /> {item.wholeseller_number}</span>
            </div>
            </td>
            <td>
              <div className="status"> {item.wholeseller_status}</div>
            </td>
            <td>
              <div className="text-[#FFA043] text-sm font-medium">25 Jul, 2022</div>
            </td>
            <td>
              <div>
                <Switch  />
              </div>
            </td>
            <td>
            <div className="agent-dropdown">
                          <img src={dots} alt="dots" />
                          <div className="dropdown">
                            <a href="/wholesellerkyc">
                              <span className="icon"><img src={complete} alt="dots" /></span> Complete KYC
                            </a>
                            <a href="/wholesellerkyc">
                              <span className="icon"><img src={fill} alt="fill" /> </span> Edit Agent
                            </a>
                            <a href="#">
                              <span className="icon"><img src={deleteagent} alt="deleteagent" /> </span> Delete Agent
                            </a>
                            <a href="/renewplan">
                              <span className="icon"><img src={calendar} alt="calendar" /> </span> Manage Commission
                            </a>
                          </div>
                        </div>
            </td>
          </tr>
        ))}
      </table>

      <Dialog
        open={addModalOpen}
        maxWidth={"lg"}
        sx={{
          ".MuiPaper-root": {
            borderRadius: "6px",
          },
        }}
        onClose={() => setAddModalOpen(false)}
      >
        <div className={wholeSellerListStyles.addDialog}>
          <div className="modalHead">
            <p className="modalTitle">Pending Approval</p>
            <div onClick={() => setAddModalOpen(false)}>X</div>
          </div>

          <div className="headTitle">
            <div>
              <p className="martTitle">Global Mart</p>
              <p className="martDescription">Wholeseller</p>
            </div>

            <div>
              <Switch />
            </div>
          </div>

          <div className="datContainer">
            <p className="dataTitle">Firm Address</p>
            <div>
              <p className="metaData">W 107b,Ahmadabad, Gujarat</p>
              <p className="dataDescription">Show Directions</p>
            </div>
          </div>

          <div className="datContainer">
            <p className="dataTitle">Firm Address</p>
            <div>
              <p className="metaData">W 107b,Ahmadabad, Gujarat</p>
              <p className="dataDescription">Show Directions</p>
            </div>
          </div>

          <div className="datContainer">
            <p className="dataTitle">Firm Address</p>
            <div>
              <p className="metaData">W 107b,Ahmadabad, Gujarat</p>
              <p className="dataDescription">Show Directions</p>
            </div>
          </div>

          <div className="attachment">
            <div className="attachmentHeader"></div>
            <img className="brandLogo" src={NidFront} alt={"Logo"} />
            <img className="brandLogo" src={NidBack} alt={"Logo"} />
          </div>

          <div>
            <div className={"action-bar"}>
              <ActionButton
                variant={"default"}
                title={"Cancel"}
                onClick={() => setAddModalOpen(false)}
              />

              <ActionButton
                variant={"primary"}
                title={"Approve"}
                onClick={() => setAddModalOpen(false)}
              />

              <ActionButton
                variant={"primary"}
                title={"Reject"}
                onClick={() => setAddModalOpen(false)}
              />
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );}else{
    return (
      <div className={classes.root}>
        <table>
          <tr>
            <th>Name</th>
            <th>Contact Person</th>
            <th>City</th>
            <th>Bazaar</th>
            <th>Type</th>
            <th>Agent</th>
            <th>Status</th>
            <th>Plan Expiry</th>
            <th>Enable/Disable</th>
            <th></th>
          </tr>
  {/* onClick={() => setAddModalOpen(true)} */}
          {getAllWholesellers.map((item: any) => (
            <tr >
              <td>{item.name}</td>
              <td className="person-details">
                <div className="flex items-center gap-2 text-[#4E2FA9]">
                  <img className="brandLogo" src={contact} alt={"Logo"} />
                  {item.contact_person}
                </div>
                <div className="flex flex-col items-start gap-2 person-model">
                <span className="job-title">Firm Manager</span>
                <span className="text-sm text-[#2E2C34] font-medium">{item.name}</span>
                <span className="text-[13px] text-[#84818A] font-medium leading-5">{item.city}</span>
                <span className="flex items-center gap-2 text-sm text-[#2E2C34] font-medium"><img src={phone} alt="phone" /> {item.contact_person}</span>
              </div>
              </td>
              <td>{item.city}</td>
              <td className="overlap">{item.type}</td>
              <td className="person-type">{item.agent}</td>
              <td className="person-details">
                <div className="flex items-center gap-2 text-[#4E2FA9]">
                  <img className="brandLogo" src={contact} alt={"Logo"} />
                  {item.contact_person}
                </div>
                <div className="flex flex-col items-start gap-2 person-model">
                <span className="job-title">Firm Manager</span>
                <span className="text-sm text-[#2E2C34] font-medium">{item.name}</span>
                <span className="text-[13px] text-[#84818A] font-medium leading-5">{item.city}</span>
                <span className="flex items-center gap-2 text-sm text-[#2E2C34] font-medium"><img src={phone} alt="phone" /> {item.contact_person}</span>
              </div>
              </td>
              <td>
                <div className="status"> {item.status}</div>
              </td>
              <td>
                <div className="text-[#FFA043] text-sm font-medium">25 Jul, 2022</div>
              </td>
              <td>
                <div>
                  <Switch  SwitchProps={item.enable}/>
                </div>
              </td>
              <td>
              <div className="agent-dropdown">
                            <img src={dots} alt="dots" />
                            <div className="dropdown">
                              <a href="/wholesellerkyc">
                                <span className="icon"><img src={complete} alt="dots" /></span> Complete KYC
                              </a>
                              <a href="/wholesellerkyc">
                                <span className="icon"><img src={fill} alt="fill" /> </span> Edit Agent
                              </a>
                              <a href="#">
                                <span className="icon"><img src={deleteagent} alt="deleteagent" /> </span> Delete Agent
                              </a>
                              <a href="/renewplan">
                                <span className="icon"><img src={calendar} alt="calendar" /> </span> Manage Commission
                              </a>
                            </div>
                          </div>
              </td>
            </tr>
          ))}
        </table>
  
        <Dialog
          open={addModalOpen}
          maxWidth={"lg"}
          sx={{
            ".MuiPaper-root": {
              borderRadius: "6px",
            },
          }}
          onClose={() => setAddModalOpen(false)}
        >
          <div className={wholeSellerListStyles.addDialog}>
            <div className="modalHead">
              <p className="modalTitle">Pending Approval</p>
              <div onClick={() => setAddModalOpen(false)}>X</div>
            </div>
  
            <div className="headTitle">
              <div>
                <p className="martTitle">Global Mart</p>
                <p className="martDescription">Wholeseller</p>
              </div>
  
              <div>
                <Switch />
              </div>
            </div>
  
            <div className="datContainer">
              <p className="dataTitle">Firm Address</p>
              <div>
                <p className="metaData">W 107b,Ahmadabad, Gujarat</p>
                <p className="dataDescription">Show Directions</p>
              </div>
            </div>
  
            <div className="datContainer">
              <p className="dataTitle">Firm Address</p>
              <div>
                <p className="metaData">W 107b,Ahmadabad, Gujarat</p>
                <p className="dataDescription">Show Directions</p>
              </div>
            </div>
  
            <div className="datContainer">
              <p className="dataTitle">Firm Address</p>
              <div>
                <p className="metaData">W 107b,Ahmadabad, Gujarat</p>
                <p className="dataDescription">Show Directions</p>
              </div>
            </div>
  
            <div className="attachment">
              <div className="attachmentHeader"></div>
              <img className="brandLogo" src={NidFront} alt={"Logo"} />
              <img className="brandLogo" src={NidBack} alt={"Logo"} />
            </div>
  
            <div>
              <div className={"action-bar"}>
                <ActionButton
                  variant={"default"}
                  title={"Cancel"}
                  onClick={() => setAddModalOpen(false)}
                />
  
                <ActionButton
                  variant={"primary"}
                  title={"Approve"}
                  onClick={() => setAddModalOpen(false)}
                />
  
                <ActionButton
                  variant={"primary"}
                  title={"Reject"}
                  onClick={() => setAddModalOpen(false)}
                />
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
};

export { WholesellerList };