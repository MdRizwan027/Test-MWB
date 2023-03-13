import { css } from "@emotion/css";

export const useBazaarplanListStyles = () => {
  return {
    root: css`
      overflow-x: auto;
      .activeTitle {
        color: #2e2c34;
      }
      .expiredTitle {
        color: #ffa043;
      }
      .revenueTitle {
        color: #ff6652;
      }

      .has-details {
        position: relative;
      }
      .plan-table .plan-name{
        padding-right:20px;
        white-space: nowrap;
      }
      .plan-table .state{
        padding-right:20px;
        white-space: nowrap;
      }
      .plan-table .duration{
        padding-right:30px;
        white-space: nowrap;
      }
      .plan-table .price{
        padding-right:30px;
        white-space: nowrap;
      }
      .details {
        position: absolute;
        display: inline-block;
        background: white;
        z-index: 20;
        transform: translateY(20%) scale(0);
        transition: transform 0.1s ease-in;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
          rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
        width: 100%;
        height: 120px;
        padding: 20px;
      }

      .has-details:hover span {
        transform: translateY(20%) translateX(-60%) scale(1);
      }

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
        padding-right: 30px;
        border-bottom: 1px solid #e1e1e1;
      }
      th {
        text-align: left;
        padding-top: 10px;
        padding-bottom: 10px;
      }
      .inside-table th{
        padding-right: 15px;
      }
      .inside-table th , .inside-table td{
        border: none;
        border-bottom: 0px solid #e1e1e1;
      }
      .inside-table td{
        padding: 0 20px 0px 0px;
      }
      td.pr-0 {
        padding-right: 0px;
        margin-right: -30px;
    }
    `,
  };
};
