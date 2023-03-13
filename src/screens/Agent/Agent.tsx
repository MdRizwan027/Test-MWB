import React, { useEffect, useState } from "react";
import { DashboardLayout } from "@/components/layouts";
import { AddButton, GridOptionButton } from "@/components/atoms/Button";
import { Switch } from "@/components/atoms/Switch";
import { useNavigate } from "react-router-dom";
import { usAgentStyles } from "@/static/stylesheets/screens/agentStyle";
import TwMultiSelect from "@/components/atoms/TwMultiSelect/TwMultiSelect";
import { ActionButton } from "@/components/atoms/Button/ActionButton";
import { Dialog } from "@mui/material";
import NidFront from "@/static/images/mwb_nid_frnt.png";
import NidBack from "@/static/images/mwb_nid_back.png";
import UserIcon from "@/static/svg/ic_contactuser.svg";
import dots from "@/static/icons/dots-1.svg";
import complete from "@/static/icons/complete.svg";
import fill from "@/static/icons/fill.svg";
import calendar from "@/static/icons/calendar.svg";
import deleteagent from "@/static/icons/delete-agent.svg";
import ShareIcon from "@/static/svg/ic_share.svg";
import { AppService } from "../../service/AllApiData.service";

const Agent = () => {
  const classes = usAgentStyles();
  const navigate = useNavigate();
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [getAllAgent, setGetAllAgent] = useState([]);
  const getAllLists = async () => {
    const responseJson = await AppService.getAllAgentList();
    setGetAllAgent(responseJson.data.results);
  };

  useEffect(() => {
    getAllLists();
  }, []);

  return (
    <>
      <DashboardLayout>
        <div className={classes.root}>
          <div>
            <div className="flex align-middle justify-between">
              <p className="commonTitle">Agents</p>
              <AddButton
                label="Create New Offer"
                onClick={() => navigate("/addagent")}
              />
            </div>
          </div>

          <div className="flex gap-5">
            <TwMultiSelect />
            <TwMultiSelect />
            <TwMultiSelect />
            <TwMultiSelect />
            <TwMultiSelect />
            <TwMultiSelect />
          </div>

          <div>
            <div className="overflow-x-auto relative pt-[40px] pb-[40px]">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-[12px] text-gray-700 bg-gray-50 font-[600]">
                  <tr className="color-[#2E2C34;]">
                    <th scope="col" className="tableTitle py-3 px-6">
                      Name
                    </th>
                    <th scope="col" className="tableTitle py-3 px-6">
                      Mobile Number
                    </th>
                    <th scope="col" className="tableTitle py-3 px-6">
                      City
                    </th>
                    <th scope="col" className="tableTitle py-3 px-6">
                      Bazaar
                    </th>
                    <th scope="col" className="tableTitle py-3 px-6">
                      Type
                    </th>
                    <th scope="col" className="tableTitle py-3 px-6">
                      Status
                    </th>
                    <th scope="col" className="tableTitle py-3 px-6">
                      Enable/Disable
                    </th>
                    <th scope="col" className="tableTitle py-3 px-6"></th>
                  </tr>
                </thead>
                <tbody>
                  {/*  onClick={() => setAddModalOpen(true)} */}
                  {getAllAgent.map((item: any) => (
                    <tr
                      className="border-b"
                     
                    >
                      <th
                        scope="row"
                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <div className="flex gap-[20px] items-center ">
                          <p className="mb-3 text-[14px] font-[600] text-gray-700 font-Manrope dark:text-gray-400 cursor-pointer">
                            <div className="flex gap-5 align-middle">
                              <div>
                                <img src={UserIcon} alt={"Logo"} />
                              </div>
                              <div>
                                <p className="tableData">{item.agent_name}</p>
                              </div>
                            </div>
                          </p>
                        </div>
                      </th>
                      <td className="py-4 px-6 ftableData">{item.agent_number}</td>
                      <td className="py-4 px-6 ftableData">{item.agent_city}</td>
                      <td className="py-4 px-6 tableData">{item.agent_bazaar.length}</td>
                      <td className="py-4 px-6 tableData">{item.agent_type}</td>
                      <td className="py-4 px-6 tableData">
                        <div className="bg-[#FFF6ED] flex justify-center rounded-md p-[10px] w-[150px]">
                          <p>{item.agent_status}</p>
                        </div>
                      </td>
                      <td className="py-4 px-6 tableData cursor-pointer">
                        <div className="text-center">
                          <Switch />
                        </div>
                      </td>
                      <td className="py-4 px-6 tableData cursor-pointer">
                        <div className="agent-dropdown">
                          <img src={dots} alt="dots" />
                          <div className="dropdown">
                            <a href="#">
                              <span className="icon"><img src={complete} alt="dots" /></span> Complete KYC
                            </a>
                            <a href="#">
                              <span className="icon"><img src={fill} alt="fill" /> </span> Edit Agent
                            </a>
                            <a href="#">
                              <span className="icon"><img src={deleteagent} alt="deleteagent" /> </span> Delete Agent
                            </a>
                            <a href="#">
                              <span className="icon"><img src={calendar} alt="calendar" /> </span> Manage Commission
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

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
            <div className={classes.addDialog}>
              <div className="modalHead">
                <p className="modalTitle">Pending Approval</p>
                <div onClick={() => setAddModalOpen(false)}>X</div>
              </div>

              <div className="headTitle">
                <div>
                  <p className="martTitle">Ashish Patel</p>
                  <p className="martDescription">Agent</p>
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
                <div className="attachmentHeader">
                  {/* <p className="attachmentHead">Doccument</p> */}
                </div>
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
      </DashboardLayout>
    </>
  );
};

export default Agent;


