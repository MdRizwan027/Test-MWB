import { css } from "@emotion/css";

export const useBazaarListStyles = () => {
  return {
    root: css`
      width: 100%;
      padding-top: 20px;
      padding-bottom: 20px;
      .mwbContainer {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
      }
      .mwbTitle {
        font-family: "Manrope", serif;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        padding-top: 40px;
        padding-bottom: 40px;
      }
      .nameTitle {
        width: 350px;
      }

      .categoryTitle {
        width: 350px;
      }

      .wholesellerTitle {
        width: 150px;
      }

      .agentTitle {
        width: 150px;
      }

      .statesTitle {
        width: 150px;
      }

      .revenewEarned {
        width: 250px;
      }

      .billsTitle {
        width: 150px;
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
        font-size: 12px;
        line-height: 18px;
        color: #84818a;
        width: 200px;
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
        border-bottom: 1px solid #e1e1e1;

        img {
          width: 30px;
        }
      }
      th {
        text-align: left;
        padding-top: 10px;
        padding-bottom: 10px;
      }

      .brandData {
        display: flex;
        gap: 40px;
      }

      .brandLogo {
        width: 25px;
      }
    `,

    tempTitle: css`
      width: 100%;
      margin: 20px 0px 20px 0px;
      height: 50px;
      background: #ff6652;
      color: #ffffff;
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      text-align: center;
      padding: 10px;
    `,
  };
};
