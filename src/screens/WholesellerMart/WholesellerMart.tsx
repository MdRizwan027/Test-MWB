import { ActionButton } from "@/components/atoms/Button/ActionButton";
import { DashboardLayout } from "@/components/layouts";
import { SectionHeader } from "@/components/molecules/Bazaars";
import { BazaarReportCard } from "@/components/molecules/Bazaars/BazaarReportCard";
import { ColorCard } from "@/components/molecules/Color Card";
import { WholesellerCard } from "@/components/molecules/Wholeseller";
import { PerfomancTab } from "@/components/molecules/Wholeseller/PerfomanceTab";
import { RetailersTable } from "@/components/molecules/Wholeseller/RetailersTable";
import { TopBranch } from "@/components/molecules/Wholeseller/TopBranch/TopBranch";
import { TopProduct } from "@/components/molecules/Wholeseller/TopProduct";
import { usewholesellerMartStyle } from "@/static/stylesheets/screens";

const WholesellerMart = () => {
  const classes = usewholesellerMartStyle();

  return (
    <>
      <DashboardLayout>
        <div className={classes.root}>
          <SectionHeader />
          <div>
            <div className="pageTitle">Dashboard</div>

            <div className="flex gap-5">
              <WholesellerCard title="Total Products" prize="13,596" />
              <WholesellerCard title="Total Products" prize="13,596" />
              <WholesellerCard title="Total Products" prize="13,596" />
              <WholesellerCard title="Total Products" prize="13,596" />
              <WholesellerCard title="Total Products" prize="13,596" />
            </div>

            <div className="flex gap-5">
              <ColorCard
                title="4 Pending orders"
                prize="You have 4 pending orders for approval"
              />
              <ColorCard
                title="3 Payment Requests"
                prize="You have 3 payment request"
              />
            </div>

            <p className="commonTitle">Bazaar Report</p>

            <div className="bazaarFilters pt-[20px] pb-[20px]">
              <ActionButton title="Today" variant="primary" />
              <ActionButton title="This Week" variant="default" />
              <ActionButton title="Last Week" variant="default" />
              <ActionButton title="This Month" variant="default" />
              <ActionButton title="Last Month" variant="default" />
            </div>

            <div className="bazaarReport">
              <BazaarReportCard
                title="Total Retailers"
                count="53"
                revenue="Total revenue Earned"
                prize="Rz. 1,54,00"
                bills="No of Bills"
                billsNumber="52"
              />
              <BazaarReportCard
                title="Total Retailers"
                count="53"
                revenue="Total revenue Earned"
                prize="Rz. 1,54,00"
                bills="No of Bills"
                billsNumber="52"
              />
            </div>

            <div>
              <p className="commonTitle">Compare Bazaar Performance</p>
              <PerfomancTab />
            </div>

            <div>
              <RetailersTable />
              <RetailersTable />
              <TopProduct />
              <div className="flex gap-4">
                <TopBranch/>
                <TopBranch/>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default WholesellerMart;
