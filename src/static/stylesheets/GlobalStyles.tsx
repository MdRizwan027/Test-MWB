import React from "react";
import { Global, css } from "@emotion/react";
import "@/static/css/tailwaind.css";
import "@/static/css/fonts.css";

const styles = () => css`
  body {
    margin: 0;
    padding: 0;
    font-family: "Manrope", serif;
    line-height: 1.5;
    font-weight: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .manrope {
    font-family: "Manrope", serif !important;
  }

  //Color CSS
  .orange {
    color: #ff6652 !important;
  }
  .primary-orange {
    color: #ff6652;
  }
  .text-gray {
    color: #84818a;
  }
  .text-dark {
    color: #222120;
  }
  .bg-purple {
    background: #4e2fa9;
  }
  .text-purple {
    color: #4e2fa9;
  }
  .green {
    color: #20c9ac;
  }
  .bg-button {
    background: #f6f6f6;
  }
  // select css
  .agent-dropdown {
    position: relative;
    .dropdown {
      position: absolute;
      right: 0;
      top: 100%;
      background: #ffffff;
      box-shadow: 0px 6px 20px rgb(0 0 0 / 10%);
      border-radius: 8px;
      display: none;
      flex-direction: column;
      width: 285px;
      a {
        padding: 12px 25px;
        border-bottom: 1px solid #f0f0f3;
        display: flex;
        gap: 15px;
        align-items: center;
        span.icon {
          background: #f6f6f6;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 36px;
          width: 36px;
        }
      }
    }
  }
  .agent-dropdown:hover img + .dropdown {
    display: flex !important;
    right: -20px;
    z-index: 999;
  }
  // select css

  //person odel css
  .person-type{
    max-width:260px;
    overflow:hidden;
    text-overflow: ellipsis;
  }
  td.person-details {
    position: relative;
    .person-model {
      position: absolute;
      padding: 15px;
      background: #ffffff;
      box-shadow: 0px 6px 20px rgb(0 0 0 / 10%);
      border-radius: 8px;
      width: 195px;
      z-index: 9999;
      display: none;
      .job-title {
        background: rgba(0, 165, 255, 0.1);
        border-radius: 4px;
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        font-family: "Manrope";
        color: #00a5ff;
        padding: 4px 10px;
      }
    }
  }
  td.person-details:hover .person-model {
    display: flex;
  }

  //Label CSS

  .bazaarField label {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #84818a;
  }
  //Tabs CSS
  .MuiTabs-indicator {
    background: #5542f6 !important;
  }
  .rulesPage .tabs button..Mui-selected {
    color: #2e2c34 !important;
  }
  .pdf-link {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.2px;
    color: #cc4b4c;
    border: 1px solid #e1e1e1;
    border-radius: 4px;
    display: flex;
    gap: 12px;
    padding: 9px 15px;
    align-items: center;
    height: 100%;
  }
  .excel-link {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.2px;
    color: #2e7d32;
    border: 1px solid #e1e1e1;
    border-radius: 4px;
    display: flex;
    gap: 12px;
    padding: 9px 15px;
    align-items: center;
    height: 100%;
  }
  .add-rules {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
    background: #ff6652;
    border-radius: 4px;
    display: flex;
    gap: 12px;
    padding: 12px 26px;
    align-items: center;
  }
  div:has(.global-table) {
    box-shadow: none !important;
  }
  .global-table thead th {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #84818a;
  }
  .global-table td {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 500;
    font-size: 14px !important;
    line-height: 20px;
    color: #2e2c34;
  } 
`;

export const GlobalStyles = () => {
  return <Global styles={styles()} />;
};
