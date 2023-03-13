import { css } from "@emotion/css";

export const usewholesellerListStyles = () => {
  return {
    root: css`
      table {
        width: 100%;
        font-size: 14px;
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 600;
        cursor: pointer;
      }
      th {
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 18px;
        color: #84818a;
        width: auto;
        padding-top: 30px;
        padding-bottom: 30px;
        text-align: left;
        border-bottom: 1px solid #e1e1e1;
      }
      td {
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        text-align: left;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-right: 20px;
        border-bottom: 1px solid #e1e1e1;
        white-space: nowrap;
      }
      th {
        text-align: left;
        padding-top: 10px;
        padding-bottom: 10px;
      }
      td.overlap {
        max-width: 160px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .brandData {
        display: flex;
        gap: 20px;
        align-items: center;
      }

      .brandLogo {
        width: 25px;
      }

      .status {
        color: #ffa043;
        background: #fff6ed;
        border-radius: 5px;
        padding: 10px;
        width: 150px;
      }
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
    `,
  };
};
