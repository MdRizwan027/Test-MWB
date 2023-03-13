import { css } from "@emotion/css";

export const useBazaarreportStyles = () => ({
  root: css`
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;

    .Wholesellers {
      border: 1px solid #ebeaed;
      padding: 20px;
    }

    .cityBuisness {
      width: 100%;
      border: 1px solid #ebeaed;
      padding: 20px;

      .cityTitle {
        display: flex;
        gap: 20px;
        justify-content: space-between;

        p {
          font-family: "Manrope", serif;
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 22px;
          color: #2e2c34;
        }
      }
    }

    table {
      width: 500px;
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
      padding-top: 40px;
      padding-bottom: 10px;
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
      padding-top: 10px;
      padding-bottom: 10px;
      padding-right: 40px;
    }

    .bazaarButtons {
      display: flex;
      gap: 10px;
      padding-top: 20px;
      padding-bottom: 20px;
    }

    .leftContent {
      display: flex;
      gap: 10px;
      padding-top: 20px;
      padding-bottom: 20px;
      justify-content: end;
    }

    .headingTitle {
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 33px;
      letter-spacing: 0.2px;
      color: #000000;
    }
  `,

  container: css`
    display: flex;
    justify-content: end;
    gap: 10px;

    img {
      width: 20px;
      height: 20px;
    }

    .reportButton {
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      text-align: right;
      color: #ff6652;
      cursor: pointer;
    }
  `,
});
