import { GridOptionButton } from "@/components/atoms/Button";
import { ActionButton } from "@/components/atoms/Button/ActionButton";
import { DashboardLayout } from "@/components/layouts";
import { UploadArea } from "@/components/organisms/UploadArea";
import Payment_Receipt from "@/static/images/Payment_Receipt.jpg";
import productImg from "@/static/images/productImg.jpg";
import { useTrackOrderStyles } from "@/static/stylesheets/screens";
import ContactIcon from "@/static/svg/ic_contactuser.svg";
import information from "@/static/svg/ic_information.svg";
import { Dialog } from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const TrackOrder = () => {
  const classes = useTrackOrderStyles();
  const [orderStatusMaodal, setOrderStatusMaodal] = useState(false);
  const [paymentDetailsModal, setPaymentDetailsModal] = useState(false);

  const [updateStatusModal, setUpdateStatusModal] = useState(false);
  const [quantity, setQuantity] = useState(10);

  const [outOfDelModal, setOutOfDelModal] = useState(false);
  const [checked, setChecked] = useState(true);

  return (
    <>
      <DashboardLayout>
        <div className={classes.root}>
          <div className={classes.section}>
            <div>
              <div className="flex gap-5 align-center">
                <div className="flex gap-5">
                  <p className="commonTitle">#Order ID-21214589</p>
                  <div className="flex gap-4 items-center">
                    <p>Order Status: In Progress</p>
                    <img src={information} alt="information" />
                  </div>
                </div>
              </div>

              <div className="bg-[#f8f8f8] p-[20px] my-5 firmDetails">
                <div className="flex gap-5">
                  <div className="px-5">
                    <p className="head">Date</p>
                    <p className="firmData">12/07/22</p>
                  </div>
                  <div className="px-5">
                    <p className="head">Firm Name</p>
                    <p className="firmData">India Mart</p>
                  </div>
                  <div className="px-5">
                    <p className="head">Contact Person Name</p>
                    <p className="firmData">Mr. Satish Hari</p>
                  </div>
                  <div className="px-5">
                    <p className="head">Contact Number</p>
                    <p className="firmData">9685741236</p>
                  </div>
                  <div className="px-5">
                    <p className="head">City</p>
                    <p className="firmData">Rajkot</p>
                  </div>
                  <div className="px-5">
                    <p className="head">Order Type</p>
                    <p className="firmData">Cash</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="overflow-x-auto relative pt-[40px] pb-[40px]">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-[12px] text-gray-700 bg-gray-50 font-[600] ">
                      <tr className=" color-[#2E2C34;]">
                        <th scope="col" className="py-3 px-6">
                          Name
                        </th>
                        <th scope="col" className="py-3 px-6">
                          Contact Person
                        </th>
                        <th scope="col" className="py-3 px-6">
                          City
                        </th>
                        <th scope="col" className="py-3 px-6">
                          Type
                        </th>
                        <th scope="col" className="py-3 px-6">
                          Plan
                        </th>
                        <th scope="col" className="py-3 px-6">
                          Agent
                        </th>
                        <th scope="col" className="py-3 px-6"></th>
                        <th scope="col" className="py-3 px-6"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3, 4, 5].map((item: any) => (
                        <tr className="border-b">
                          <th
                            scope="row"
                            className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            <div className="flex gap-[20px] items-center ">
                              <p
                                onClick={() => setOrderStatusMaodal(true)}
                                className="mb-3 text-[14px] font-[600] text-gray-700 font-Manrope dark:text-gray-400 cursor-pointer"
                              >
                                Laxmi Traders
                              </p>
                            </div>
                          </th>
                          <td className="py-4 px-6  color-[#2E2C34;]">
                            <div className="flex gap-5 items-center">
                              <div>
                                <img src={ContactIcon} alt={"Logo"} />
                              </div>
                              <div>
                                <p
                                  onClick={() => setPaymentDetailsModal(true)}
                                  className="font-[14px] color-[#4E2FA9] cursor-pointer"
                                >
                                  Sachin Yadav
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-6  color-[#2E2C34;]">
                            Rajkot
                          </td>
                          <td className="py-4 px-6  color-[#2E2C34;]">
                            Re-seller
                          </td>
                          <td className="py-4 px-6  color-[#2E2C34;] cursor-pointer">
                            Diamond
                          </td>
                          <td className="py-4 px-6  color-[#2E2C34;] cursor-pointer">
                            <div className="flex gap-5 items-center">
                              <div>
                                <img src={ContactIcon} alt={"Logo"} />
                              </div>
                              <div>
                                <p className="font-[14px] color-[#4E2FA9]">
                                  Sachin Yadav
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-6  color-[#2E2C34;] cursor-pointer">
                            <div className="bg-[#FFF6ED] flex justify-center rounded-md p-[10px] w-[150px]">
                              <p className="cursor-pointer">Pending Approval</p>
                            </div>
                          </td>
                          <td
                            onClick={() => setPaymentDetailsModal(true)}
                            className="py-4 px-6  color-[#2E2C34;] cursor-pointer"
                          >
                            <GridOptionButton icon={"vertical-options"} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <ActionButton title="Update Status" />
              </div>
            </div>
          </div>

          {/* Order Status Modal */}
          <div>
            <Dialog
              open={orderStatusMaodal}
              maxWidth={"lg"}
              sx={{
                ".MuiPaper-root": {
                  borderRadius: "20px",
                },
              }}
              onClose={() => setOrderStatusMaodal(false)}
            >
              <div className={classes.orderStatusModal}>
                <h6 className="title">Order Status</h6>
                <span
                  className="closeBtn"
                  onClick={() => setOrderStatusMaodal(false)}
                >
                  x
                </span>

                <div className="modalContent">
                  <div className="orderTrack">
                    <p className="orderID">#Order ID-21214589</p>
                    <p className="ordererName">Mr. Satish Hari</p>
                  </div>

                  <div className="orderStatusWrapper">
                    {[1, 2, 3, 4, 5, 6].map((item, index) => (
                      <div className="orderStatus" key={index}>
                        <div className={`progressLine ${item === 1 && "done"}`}>
                          <div className="circle"></div>
                          <div
                            className="line"
                            style={{
                              display: item === 6 ? "none" : "",
                            }}
                          ></div>
                        </div>

                        <div className="status">
                          <p>Order Pending</p>
                          <img src={information} alt="information" />
                        </div>
                        <p className="dateAndTime">12/12/22 at 02:24 PM</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Dialog>
          </div>

          {/* Payment Details Modal */}
          <div>
            <Dialog
              open={paymentDetailsModal}
              maxWidth={"lg"}
              sx={{
                ".MuiPaper-root": {
                  borderRadius: "20px",
                },
              }}
              onClose={() => setPaymentDetailsModal(false)}
            >
              <div className={classes.paymentDetailsModal}>
                <p className="title">Payment Details- Cash Order</p>
                <span
                  className="closeBtn"
                  onClick={() => setPaymentDetailsModal(false)}
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="13"
                      cy="13"
                      r="12.5"
                      fill="white"
                      stroke="#FF6652"
                    />
                    <path
                      d="M17.0977 9.74414L9.74375 17.0981"
                      stroke="#FF6652"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M9.74609 9.74414L17.1 17.0981"
                      stroke="#FF6652"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>

                <div className="modalContent">
                  <div className="amountBoxWrapper">
                    {["#2F365020", "#6AFFB820", "#F3292920"].map(
                      (box, index) => (
                        <div className="amountBox" style={{ background: box }}>
                          <div className="boxTitle">Total Amount</div>
                          <div className="amount">8,962 ₹</div>
                        </div>
                      )
                    )}
                  </div>

                  <div className="tableContent">
                    <table className="w-full">
                      <thead className="text-[14px] font-[600] ">
                        <tr>
                          <th>Date</th>
                          <th>Order ID</th>
                          <th>Transaction ID</th>
                          <th>Mode of Payment</th>
                          <th>Amount Paid</th>
                          <th>Payment Receipt</th>
                          <th>Confirm</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[1, 2].map((item: any) => (
                          <tr>
                            <td>09/07/22</td>
                            <td>HDGWTYH83</td>
                            <td>KKLSDG54621</td>
                            <td>Bank Transfer</td>
                            <td>2000</td>
                            <td>
                              <img
                                src={Payment_Receipt}
                                alt="Payment_Receipt_Image"
                              />
                            </td>
                            <td>
                              <button>Payment Received</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Dialog>
          </div>

          {/* Out of Delivery Modal */}
          <div>
            <Dialog
              open={outOfDelModal}
              maxWidth={"lg"}
              sx={{
                ".MuiPaper-root": {
                  borderRadius: "20px",
                },
              }}
              onClose={() => setOutOfDelModal(false)}
            >
              <div className={classes.outOfDelModal}>
                <p className="title">Update the status</p>
                <span
                  className="closeBtn"
                  onClick={() => setOutOfDelModal(false)}
                >
                  x
                </span>

                <form action="#" method="post" className="modalContent form">
                  <div className="uploadPicute">
                    <h6 className="InputHeading">Upload Picture</h6>
                    <UploadArea label={"Upload Image"} />
                  </div>

                  <div className="billDetails">
                    <h6 className="InputHeading">Bill Details</h6>
                    <div className="billForm subForm">
                      <div className="formControl">
                        <TextField
                          sx={{ width: 250 }}
                          label="Bill Date"
                          multiline
                          type="number"
                          variant="standard"
                        />
                      </div>

                      <div className="formControl">
                        <TextField
                          sx={{ width: 250 }}
                          label="Bill Amouunt"
                          multiline
                          type="number"
                          variant="standard"
                        />
                      </div>
                      <div className="formControl">
                        <TextField
                          sx={{ width: 250 }}
                          label="Bill Amouunt"
                          multiline
                          type="number"
                          variant="standard"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="driverDetails">
                    <h6 className="InputHeading">Driver Details</h6>
                    <div className="driverForm subForm">
                      <div className="formControl">
                        <TextField
                          sx={{ width: 250 }}
                          label="Driver Date"
                          multiline
                          type="number"
                          variant="standard"
                        />
                      </div>
                      <div className="formControl">
                        <TextField
                          sx={{ width: 250 }}
                          label="Driver Amouunt"
                          multiline
                          type="number"
                          variant="standard"
                        />
                      </div>
                      <div className="formControl">
                        <TextField
                          sx={{ width: 250 }}
                          label="Driver Amouunt"
                          multiline
                          type="number"
                          variant="standard"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="addressDetails">
                    <h6 className="InputHeading">Address Details</h6>
                    <div className="addressForm subForm">
                      <div className="formControl">
                        <TextField
                          sx={{ width: 250 }}
                          label="Current Address"
                          multiline
                          type="number"
                          variant="standard"
                        />
                      </div>

                      <button className="newAddressBtn">
                        <span>+</span>
                        Add New Address
                      </button>
                    </div>
                  </div>

                  <div className="submitButton">
                    <div
                      className="formControl"
                      onClick={() => setChecked(!checked)}
                    >
                      <input type="checkbox" checked={checked} />
                      <p>Delivery address is same as current address</p>
                    </div>

                    <button type="submit">Send for Delivery</button>
                  </div>
                </form>
              </div>
            </Dialog>
          </div>

          {/* Update Status Modal */}
          <div>
            <Dialog
              open={updateStatusModal}
              maxWidth={"lg"}
              sx={{
                ".MuiPaper-root": {
                  borderRadius: "20px",
                },
              }}
              onClose={() => setUpdateStatusModal(false)}
            >
              <div className={classes.updateStatusModal}>
                <p className="title">Update the status</p>
                <span
                  className="closeBtn"
                  onClick={() => setUpdateStatusModal(false)}
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="13"
                      cy="13"
                      r="12.5"
                      fill="white"
                      stroke="#FF6652"
                    />
                    <path
                      d="M17.0977 9.74414L9.74375 17.0981"
                      stroke="#FF6652"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M9.74609 9.74414L17.1 17.0981"
                      stroke="#FF6652"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>

                <div className="modalContent">
                  <div className="selectStatus">
                    <Box sx={{ minWidth: 120, width: 300 }}>
                      <FormControl fullWidth>
                        <InputLabel
                          variant="standard"
                          htmlFor="uncontrolled-native"
                        >
                          Order Status
                        </InputLabel>
                        <NativeSelect
                          defaultValue={"delivery"}
                          inputProps={{
                            name: "age",
                            id: "uncontrolled-native",
                          }}
                        >
                          <option value={"delivery"}>Out for delivery</option>
                          <option value={"canceled"}>Order canceled</option>
                          <option value={"received"}>Order received</option>
                        </NativeSelect>
                      </FormControl>
                    </Box>
                  </div>

                  <div className="amountBoxWrapper">
                    {[1, 2].map((item, index) => (
                      <div className="products">
                        <img src={productImg} alt="productImg" />
                        <div className="productName">
                          Amazon Echo Plus - 3nd Gen…
                        </div>

                        <div className="amountBtns">
                          <button
                            onClick={() => setQuantity((prev) => prev - 1)}
                          >
                            -
                          </button>
                          <p>{quantity}</p>
                          <button
                            onClick={() => setQuantity((prev) => prev + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="nextButton">
                    <button>Next</button>
                  </div>
                </div>
              </div>
            </Dialog>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default TrackOrder;
