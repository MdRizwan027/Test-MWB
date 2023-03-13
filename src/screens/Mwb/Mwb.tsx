import React from "react";
import { SectionHeader } from "@/components/molecules/Bazaars";
import { DashboardLayout } from "@/components/layouts";
import { useBazaarListStyles } from "@/static/stylesheets/molecules";
import { useNavigate } from "react-router-dom";
import { ActionButton } from "@/components/atoms/Button/ActionButton";

const Mwb = () => {
  const classes = useBazaarListStyles();
  const navigate = useNavigate();

  return (
    <>
      <DashboardLayout>
        <div className={classes.root}>
          <SectionHeader />
          {/* All Pages */}
          <p className="mwbTitle"> Screen Routes Docs (31) </p>
          <div className="mwbContainer">
            <ActionButton
              title="Login"
              variant="primary"
              onClick={() => navigate("/")}
            />
            <ActionButton
              title="Dashboard"
              variant="primary"
              onClick={() => navigate("/dashboard")}
            />

            <ActionButton
              title="Master List"
              variant="primary"
              onClick={() => navigate("/admin/master-list")}
            />

            <ActionButton
              title="Bazaars"
              variant="primary"
              onClick={() => navigate("/bazaars")}
            />

            <ActionButton
              title="New Bazaar"
              variant="primary"
              onClick={() => navigate("/newbazaars")}
            />
            <ActionButton
              title="Bulk Upload"
              variant="primary"
              onClick={() => navigate("/bulkupload")}
            />

            <ActionButton
              title="Bazaar Report"
              variant="primary"
              onClick={() => navigate("/bazaarreport")}
            />

            <ActionButton
              title="Electronics Bazaar"
              variant="primary"
              onClick={() => navigate("/electronicsbazaar")}
            />

            <ActionButton
              title="Wholeseller"
              variant="primary"
              onClick={() => navigate("/wholeseller")}
            />

            <ActionButton
              title="Wholeseller Dashboard"
              variant="primary"
              onClick={() => navigate("/wholesellerdashboard")}
            />

            <ActionButton
              title="wholeseller kyc"
              variant="primary"
              onClick={() => navigate("/wholesellerkyc")}
            />

            <ActionButton
              title="Wholeseller Mart"
              variant="primary"
              onClick={() => navigate("/wholesellermart")}
            />

            <ActionButton
              title="Renew Plan"
              variant="primary"
              onClick={() => navigate("/renewplan")}
            />
            <ActionButton
              title="Wholeseller Products"
              variant="primary"
              onClick={() => navigate("/wholesellerproducts")}
            />
            <ActionButton
              title="Add New Products"
              variant="primary"
              onClick={() => navigate("/addproduct")}
            />
            <ActionButton
              title="Wholeseller Products"
              variant="primary"
              onClick={() => navigate("/itemwiseplan")}
            />
            <ActionButton
              title="Offers"
              variant="primary"
              onClick={() => navigate("/offers")}
            />
            <ActionButton
              title="Create Offer"
              variant="primary"
              onClick={() => navigate("/createoffer")}
            />
            <ActionButton
              title="Agents"
              variant="primary"
              onClick={() => navigate("/agents")}
            />
            <ActionButton
              title="Agents KYC"
              variant="primary"
              onClick={() => navigate("/agentkyc")}
            />
            <ActionButton
              title="Add Agents"
              variant="primary"
              onClick={() => navigate("/addagent")}
            />
            <ActionButton
              title="Retailers"
              variant="primary"
              onClick={() => navigate("/retailers")}
            />
            <ActionButton
              title="Add Retailers"
              variant="primary"
              onClick={() => navigate("/addretailers")}
            />

            {/* New */}
            <ActionButton
              title="Add Advertisement"
              variant="primary"
              onClick={() => navigate("/addnewadvertisement")}
            />

            <ActionButton
              title="Add Branch"
              variant="primary"
              onClick={() => navigate("/addbranch")}
            />

            <ActionButton
              title="Advertisement"
              variant="primary"
              onClick={() => navigate("/advertisement")}
            />

            <ActionButton
              title="Branch"
              variant="primary"
              onClick={() => navigate("/branch")}
            />

            <ActionButton
              title="Branch Plan"
              variant="primary"
              onClick={() => navigate("/branchplan")}
            />

            <ActionButton
              title="Create Order"
              variant="primary"
              onClick={() => navigate("/createorder")}
            />

            <ActionButton
              title="Edit Order"
              variant="primary"
              onClick={() => navigate("/editorder")}
            />

            <ActionButton
              title="Order"
              variant="primary"
              onClick={() => navigate("/order")}
            />

            <ActionButton
              title="Photo Order"
              variant="primary"
              onClick={() => navigate("/photoorder")}
            />

            <ActionButton
              title="Track Order"
              variant="primary"
              onClick={() => navigate("/trackorder")}
            />
          </div>

          <div className="flex flex-wrap gap-5">
            {/* Wholeseller */}
            <div>
              <p className="mwbTitle"> Wholeseller (2) </p>
              <div className="mwbContainer">
                <ActionButton
                  title="Wholeseller Dashboard"
                  variant="primary"
                  onClick={() => navigate("/wholesellerdashboard")}
                />
                <ActionButton
                  title="Wholeseller Mart"
                  variant="primary"
                  onClick={() => navigate("/wholesellermart")}
                />
              </div>
            </div>

            {/* Plans */}
            <div>
              <p className="mwbTitle"> PLan (2) </p>
              <div className="mwbContainer">
                <ActionButton
                  title="Plan"
                  variant="primary"
                  onClick={() => navigate("/branchplan")}
                />
                <ActionButton
                  title="Item Wise Plan"
                  variant="primary"
                  onClick={() => navigate("/itemwiseplan")}
                />
              </div>
            </div>

            {/* Products */}
            <div>
              <p className="mwbTitle"> Products (4)</p>
              <div className="mwbContainer">
                <ActionButton
                  title="Wholeseller Products"
                  variant="primary"
                  onClick={() => navigate("/wholesellerproducts")}
                />
                <ActionButton
                  title="Add New Products"
                  variant="primary"
                  onClick={() => navigate("/addproduct")}
                />
                <ActionButton
                  title="Bulk Upload"
                  variant="primary"
                  onClick={() => navigate("/bulkupload")}
                />
              </div>
            </div>

            {/* Offer */}
            <div>
              <p className="mwbTitle"> Offer (2)</p>
              <div className="mwbContainer">
                <ActionButton
                  title="Offer"
                  variant="primary"
                  onClick={() => navigate("/offers")}
                />
                <ActionButton
                  title="Create Offer"
                  variant="primary"
                  onClick={() => navigate("/createoffer")}
                />
              </div>
            </div>

            {/* Agents */}
            <div>
              <p className="mwbTitle"> Agents (2)</p>
              <div className="mwbContainer">
                <ActionButton
                  title="Agents"
                  variant="primary"
                  onClick={() => navigate("/agents")}
                />
                <ActionButton
                  title="Add Agents"
                  variant="primary"
                  onClick={() => navigate("/addagent")}
                />
                <ActionButton
                  title="Agents KYC"
                  variant="primary"
                  onClick={() => navigate("/agentkyc")}
                />
              </div>
            </div>

            {/* Retailer */}
            <div>
              <p className="mwbTitle"> Retailer (2)</p>
              <div className="mwbContainer">
                <ActionButton
                  title="Retailer"
                  variant="primary"
                  onClick={() => navigate("/retailers")}
                />
                <ActionButton
                  title="Add Retailer"
                  variant="primary"
                  onClick={() => navigate("/addretailers")}
                />
              </div>
            </div>

            {/* Order */}
            <div>
              <p className="mwbTitle"> Order Screen (5) </p>
              <div className="mwbContainer">
                <ActionButton
                  title="Order"
                  variant="primary"
                  onClick={() => navigate("/order")}
                />
                <ActionButton
                  title="Create Order"
                  variant="primary"
                  onClick={() => navigate("/createorder")}
                />{" "}
                <ActionButton
                  title="Edit Order"
                  variant="primary"
                  onClick={() => navigate("/editorder")}
                />
                <ActionButton
                  title="Photo Order"
                  variant="primary"
                  onClick={() => navigate("/photoorder")}
                />
                <ActionButton
                  title="Track Order"
                  variant="primary"
                  onClick={() => navigate("/trackorder")}
                />
              </div>
            </div>

            {/* Branch */}
            <div>
              <p className="mwbTitle"> Branch (2) </p>
              <div className="mwbContainer">
                <ActionButton
                  title="Branch"
                  variant="primary"
                  onClick={() => navigate("/branch")}
                />
                <ActionButton
                  title="Add Branch"
                  variant="primary"
                  onClick={() => navigate("/addbranch")}
                />
              </div>
            </div>

            {/* Branch  Plan*/}
            <div>
              <p className="mwbTitle"> Branch Plan (1) </p>
              <div className="mwbContainer">
                <ActionButton
                  title="Branch Plan"
                  variant="primary"
                  onClick={() => navigate("/branchplan")}
                />
              </div>
            </div>

            {/* Advertisement*/}
            <div>
              <p className="mwbTitle"> Advertisement (2)</p>
              <div className="mwbContainer">
                <ActionButton
                  title="Advertisement"
                  variant="primary"
                  onClick={() => navigate("/advertisement")}
                />
                <ActionButton
                  title="Add Advertisement"
                  variant="primary"
                  onClick={() => navigate("/addnewadvertisement")}
                />
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Mwb;
