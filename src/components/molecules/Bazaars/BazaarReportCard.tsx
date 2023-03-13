import React from "react";
import { useBazaarReportCardStyles } from "@/static/stylesheets/molecules/bazaarReportcardStyles";

interface BazaarReportCardProps {
  title?: string;
  count?: string;
  revenue?: string;
  prize?: string;
  bills?: string;
  billsNumber?: string;
}

const BazaarReportCard: React.FC<BazaarReportCardProps> = (props) => {
  const classes = useBazaarReportCardStyles();

  return (
      <div className={classes.root}>
          <div className={classes.wholesellerCard}>
              <div>
                  <div className="wholesellerItem">
                      <p className="headTitle">{props?.title}</p>
                      <p className="totalcount">{props?.count}</p>
                  </div>
              </div>

              <div className="revenewItem">
                  <div className="wholesellerItem">
                      <p className="subHeadTitle">{props?.revenue}</p>
                      <p className="headSubtitle">{props?.prize}</p>
                  </div>
                  <div className="wholesellerItem">
                      <p className="subHeadTitle">{props?.bills}</p>
                      <p className="headSubtitle">{props?.billsNumber}</p>
                  </div>
              </div>
          </div>
      </div>
  );
};

export { BazaarReportCard };
