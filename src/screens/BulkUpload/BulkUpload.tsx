import React from "react";
import { useBulkuploadStyles } from "@/static/stylesheets/screens";
import { DashboardLayout } from "@/components/layouts";
import UploadLogo from "@/static/svg/ic_upload.svg";
import DownloadLogo from "@/static/svg/ic_download.svg";

const BulkUpload = () => {
  const classes = useBulkuploadStyles();

  return (
    <>
      <DashboardLayout>
        <div className={classes.root}>
          <div className="flex gap-4 items-center">
            <div className="cursor-pointer">
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z"
                  fill="#84818A"
                />
              </svg>
            </div>
            <div>
              <p className="mainTitle">Bulk Upload</p>
            </div>
          </div>
          <div className="container">
            <div className="uploadArea">
              <div className="placeholder">
                <img className="w-[50px]" src={UploadLogo} alt={"Logo"} />
              </div>
              <div className="contentContainer">
                <p className="headTitle">Upload Excel here</p>
                <p className="headDescription py-4">
                  Image can be size of 512 PX by 512 PX Only
                </p>
              </div>
              <div className="gap-5 actonButton py-[50px]">
                <img src={DownloadLogo} alt={"Logo"} />
                <p className="downloadTitle cursor-pointer">
                  Download Template
                </p>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export { BulkUpload };
