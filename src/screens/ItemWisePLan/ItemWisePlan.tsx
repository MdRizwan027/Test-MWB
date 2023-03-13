import { ActionButton } from "@/components/atoms/Button/ActionButton";
import { SearchField } from "@/components/atoms/SearchField";
import TwMultiSelect from "@/components/atoms/TwMultiSelect/TwMultiSelect";
import { DashboardLayout } from "@/components/layouts";
import { SectionHeader } from "@/components/molecules/Bazaars";
import { useItemwisePlanStyles } from "@/static/stylesheets/molecules/itemwiseplanStyle";

const ItemWisePlan = () => {
  const classes = useItemwisePlanStyles();
  const data = [1, 2, 3, 4];

  return (
    <>
      <DashboardLayout>
        <div className={classes.root}>
          <SectionHeader />
          <div>
            <p className="headTitle">Item Wise Plans</p>
            <div className="flex gap-5 py-[20px]">
              <ActionButton title="Retailer" variant="primary" />
              <ActionButton title="Retailer" variant="default" />
              <ActionButton title="Retailer" variant="default" />
            </div>

            <div className="flex justify-between">
              <div className="flex gap-5">
                <TwMultiSelect />
                <TwMultiSelect />
              </div>
              <div>
                <SearchField />
              </div>
            </div>

            <div>
              <div className="overflow-x-auto relative pt-[40px] pb-[40px]">
                <table className="w-full text-sm text-left text-gray-500 ">
                  <thead className="text-[12px] text-gray-700 bg-gray-50 font-[600] ">
                    <tr className="tableTitle color-[#2E2C34;]">
                      <th scope="col" className="py-3 px-6">
                        Item Name
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Base price
                      </th>
                      <th scope="col" className="py-3 px-6">
                        update price
                      </th>
                      <th scope="col" className="py-3 px-6">
                        customer type
                      </th>
                      <th scope="col" className="py-3 px-6">
                        plans
                      </th>
                      <th scope="col" className="py-3 px-6">
                        LAST UPDATED
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item: any) => (
                      <tr className="border-b align-baseline">
                        <th
                          scope="row"
                          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                        >
                          <div className="flex gap-[20px] items-center ">
                            <p className="mb-3 text-[14px] font-[600] text-gray-700 font-Manrope cursor-pointer">
                              Rice
                            </p>
                          </div>
                        </th>
                        <td className="py-4 px-6  color-[#2E2C34;]">
                          <div className="priceTitle">Rs. 500</div>
                        </td>
                        <td className="py-4 px-6  color-[#2E2C34;]">
                          <div>
                            <div className="bg-[#FFF0EE] p-[10px] flex justify-center rounded-md w-[160px]">
                              <p className="updatePrice">Rs. 480</p>
                            </div>
                            <div className="flex gap-2 items-center py-[10px]">
                              <div className="unitArea">-Rs.20</div>
                              <p>or</p>
                              <div className="unitArea">-Rs.20</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6  color-[#2E2C34;]">
                          <div>
                            <div className="w-[170px] h-[120px] border border-gray py-[5px] px-[5px] rounded-md">
                              <div className="formControl flex gap-[10px] items-center mb-2">
                                <input type="checkbox" />
                                <p>Retailer</p>
                              </div>
                              <div className="formControl flex gap-[10px] items-center mb-2">
                                <input type="checkbox" />
                                <p>Semi-Wholeseller</p>
                              </div>
                              <div className="formControl flex gap-[10px] items-center mb-2">
                                <input type="checkbox" />
                                <p>Hotellier</p>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6  color-[#2E2C34;]">
                          <div>
                            <div className="w-[170px] h-[120px] border border-gray py-[5px] px-[5px] rounded-md">
                              <div className="formControl flex gap-[10px] items-center mb-2">
                                <input type="checkbox" />
                                <p>Diamond</p>
                              </div>
                              <div className="formControl flex gap-[10px] items-center mb-2">
                                <input type="checkbox" />
                                <p>Gold</p>
                              </div>
                              <div className="formControl flex gap-[10px] items-center mb-2">
                                <input type="checkbox" />
                                <p>Silver</p>
                              </div>
                              <div className="formControl flex gap-[10px] items-center mb-2">
                                <input type="checkbox" />
                                <p>Bronze</p>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6  color-[#2E2C34;]">
                          <div className="tag">
                            <p className="tagTitle">24 Jun,2021 10:30pm</p>
                            <div>
                              <p>Log</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6 color-[#2E2C34;]">
                          <div className="text-center">
                            <button className="bg-transparent hover:bg-[#FD6B09] text-[#FD6B09] font-semibold hover:text-white py-2 px-4 border border-[#FD6B09] hover:border-transparent rounded">
                              APPLY
                            </button>
                            <p className="py-2 text-center cursor-pointer">
                              Reset
                            </p>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default ItemWisePlan;
