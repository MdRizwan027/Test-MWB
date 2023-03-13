import React, { useState } from "react";
import { usePlanLogDataTableStyles } from "@/static/stylesheets/molecules/planlogdataTableStyle";
import { Dialog } from "@mui/material";

interface PlanLogDataTableProps {
  type?: "WholeSeller" | "Retailer";
}

const PlanLogDataTable: React.FC<PlanLogDataTableProps> = (props) => {
  const classes = usePlanLogDataTableStyles();
  const data = [1, 2, 3, 4, 5];
  const [addModalOpen, setAddModalOpen] = useState(false);

  return (
    <div className={classes.root}>
      <div className="overflow-x-auto relative pt-[4px] pb-[4px]">
        <table className="w-full text-sm text-left text-gray-5 ">
          <thead className="bg-[#F9F5F2]">
            <tr className="color-[#2E2C34;]">
              <th
                scope="col"
                className="py-3  text-[14px] font-[Manrope] text-[#1B467;]"
              >
                Category
              </th>
              <th
                scope="col"
                className="py-3  text-[14px] font-[Manrope] text-[#1B467;]"
              >
                Cash
              </th>
              <th
                scope="col"
                className="py-3  text-[14px] font-[Manrope] text-[#1B467;]"
              >
                Platinum
              </th>
              <th
                scope="col"
                className="py-3  text-[14px] font-[Manrope] text-[#1B467;]"
              >
                DiAmond
              </th>
              <th
                scope="col"
                className="py-3  text-[14px] font-[Manrope] text-[#1B467;]"
              >
                Gold
              </th>
              <th
                scope="col"
                className="py-3  text-[14px] font-[Manrope] text-[#1B467;]"
              >
                Bronze
              </th>
              <th
                scope="col"
                className="py-3  text-[14px] font-[Manrope] text-[#1B467;]"
              >
                LAST UPDATED
              </th>
              <th
                scope="col"
                className="py-3  text-[14px] font-[Manrope] text-[#1B467;]"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: any) => (
              <tr
                onClick={() => setAddModalOpen(true)}
                className="border-b cursor-pointer"
              >
                <th
                  scope="row"
                  className="py-4  font-medium text-gray-9 whitespace-nowrap "
                >
                  <div className="flex gap-[2px] items-center ">
                    <p className="mb-3 text-[14px] font-[6] text-[ #;] font-Manrope ">
                      Basmati
                    </p>
                  </div>
                </th>
                <td className="py-4   color-[#2E2C34;]">
                  <div className="planCard">
                    <div className="flex gap-2 justify-center items-center">
                      <div className="planCardChild">
                        <p>-25%</p>
                      </div>
                      <p>or</p>
                      <div className="planCardChild">
                        <p>-25%</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-4   color-[#2E2C34;]">
                  <div className="planCard">
                    <div className="flex gap-2 justify-center items-center">
                      <div className="planCardChild">
                        <p>-25%</p>
                      </div>
                      <p>or</p>
                      <div className="planCardChild">
                        <p>-25%</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-4   color-[#2E2C34;]">
                  <div className="planCard">
                    <div className="flex gap-2 justify-center items-center">
                      <div className="planCardChild">
                        <p>-25%</p>
                      </div>
                      <p>or</p>
                      <div className="planCardChild">
                        <p>-25%</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-4 color-[#2E2C34;]">
                  <div className="planCard">
                    <div className="flex gap-2 justify-center items-center">
                      <div className="planCardChild">
                        <p>-25%</p>
                      </div>
                      <p>or</p>
                      <div className="planCardChild">
                        <p>-25%</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-4 color-[#2E2C34;]">
                  <div className="planCard">
                    <div className="flex gap-2 justify-center items-center">
                      <div className="planCardChild">
                        <p>-25%</p>
                      </div>
                      <p>or</p>
                      <div className="planCardChild">
                        <p>-25%</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-4  color-[#2E2C34;]">
                  <p>24 Jun,221</p>
                  <p>1:3pm</p>
                </td>
                <td className="py-4  color-[#2E2C34;]">
                  <div className="flex gap-4 text-center items-center">
                    <button className="bg-transparent hover:bg-[#FD6B09] text-[#FD6B09] font-semibold hover:text-white py-2 px-4 border border-[#FD6B09] hover:border-transparent rounded">
                      APPLY
                    </button>
                    Log
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
          <div className="modalHead pb-[30px] align-middle items-center">
            <p className="modalTitle text-[24px] font-[600] leading-[20px]">
              Log
            </p>
            <div onClick={() => setAddModalOpen(false)}>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="18" cy="18" r="18" fill="#E1E1E1" />
                <line
                  x1="24.7305"
                  y1="12.423"
                  x2="12.4268"
                  y2="24.7266"
                  stroke="#84818A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <line
                  x1="24.3104"
                  y1="24.7266"
                  x2="12.0068"
                  y2="12.4229"
                  stroke="#84818A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>

          <div className="overflow-x-auto relative pt-[4px] pb-[4px]">
            <table className="w-full text-sm text-left text-gray-5 ">
              <thead className="text-[12px] text-gray-7 bg-[#F9F5F2] font-[6] ">
                <tr className=" color-[#2E2C34;]">
                  <th
                    scope="col"
                    className="py-3  text-[14px] font-[Manrope] text-[#1B467;]"
                  >
                    Category
                  </th>
                  <th
                    scope="col"
                    className="py-3  text-[14px] font-[Manrope] text-[#1B467;]"
                  >
                    Cash
                  </th>
                  <th
                    scope="col"
                    className="py-3  text-[14px] font-[Manrope] text-[#1B467;]"
                  >
                    Platinum
                  </th>
                  <th
                    scope="col"
                    className="py-3  text-[14px] font-[Manrope] text-[#1B467;]"
                  >
                    DiAmond
                  </th>
                  <th
                    scope="col"
                    className="py-3  text-[14px] font-[Manrope] text-[#1B467;]"
                  >
                    Gold
                  </th>
                  <th
                    scope="col"
                    className="py-3  text-[14px] font-[Manrope] text-[#1B467;]"
                  >
                    Bronze
                  </th>
                  <th
                    scope="col"
                    className="py-3  text-[14px] font-[Manrope] text-[#1B467;]"
                  >
                    LAST UPDATED
                  </th>
                  <th
                    scope="col"
                    className="py-3  text-[14px] font-[Manrope] text-[#1B467;]"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item: any) => (
                  <tr
                    onClick={() => setAddModalOpen(true)}
                    className="border-b cursor-pointer"
                  >
                    <th
                      scope="row"
                      className="py-4  font-medium text-gray-9 whitespace-nowrap "
                    >
                      <div className="flex gap-[2px] items-center ">
                        <p className="mb-3 text-[14px] font-[6] text-[ #;] font-Manrope ">
                          Basmati
                        </p>
                      </div>
                    </th>
                    <td className="py-4   color-[#2E2C34;]">
                      <div className="planCard">
                        <div className="flex gap-2 justify-center items-center">
                          <div className="planCardChild">
                            <p>-25%</p>
                          </div>
                          <p>or</p>
                          <div className="planCardChild">
                            <p>-25%</p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4   color-[#2E2C34;]">
                      <div className="planCard">
                        <div className="flex gap-2 justify-center items-center">
                          <div className="planCardChild">
                            <p>-25%</p>
                          </div>
                          <p>or</p>
                          <div className="planCardChild">
                            <p>-25%</p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4   color-[#2E2C34;]">
                      <div className="planCard">
                        <div className="flex gap-2 justify-center items-center">
                          <div className="planCardChild">
                            <p>-25%</p>
                          </div>
                          <p>or</p>
                          <div className="planCardChild">
                            <p>-25%</p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 color-[#2E2C34;]">
                      <div className="planCard">
                        <div className="flex gap-2 justify-center items-center">
                          <div className="planCardChild">
                            <p>-25%</p>
                          </div>
                          <p>or</p>
                          <div className="planCardChild">
                            <p>-25%</p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 color-[#2E2C34;]">
                      <div className="planCard">
                        <div className="flex gap-2 justify-center items-center">
                          <div className="planCardChild">
                            <p>-25%</p>
                          </div>
                          <p>or</p>
                          <div className="planCardChild">
                            <p>-25%</p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4  color-[#2E2C34;]">
                      <p>24 Jun,221</p>
                      <p>1:3pm</p>
                    </td>
                    <td className="py-4  color-[#2E2C34;]">
                      <div className="flex gap-4 text-center items-center">
                        <button className="bg-transparent hover:bg-[#FD6B09] text-[#FD6B09] font-semibold hover:text-white py-2 px-4 border border-[#FD6B09] hover:border-transparent rounded">
                          APPLY
                        </button>
                        Log
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export { PlanLogDataTable };
