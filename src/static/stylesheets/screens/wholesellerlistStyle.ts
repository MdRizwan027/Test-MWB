import { css } from "@emotion/css";

export const useWholesellerListStyles = () => ({
  root: css`
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;

    .headTitle {
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 33px;
      letter-spacing: 0.2px;
      color: #000000;
    }

    .actionArea {
      display: flex;
      justify-content: end;
      gap: 20px;
    }

    .wholesellerFilter {
      display: flex;
      gap: 20px;
      padding-top: 20px;
      padding-bottom: 20px;
    }
  `,

  addDialog: css`
    padding: 44px;
    width: 600px;

    .modalHead {
      display: flex;
      justify-content: space-between;
      cursor: pointer;
    }

    .modalTitle {
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 18px;
      color: #ffa043;
      background: #fff6ed;
      padding: 10px;
      border-radius: 6px;
      cursor: pointer;
    }

    .datContainer {
      display: flex;
      border-top: 1px solid #ebeaed;
      border-bottom: 1px solid #ebeaed;
      justify-content: space-between;
      padding-top: 20px;
      padding-bottom: 20px;

      .dataTitle {
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #84818a;
      }

      .metaData {
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        text-align: right;
        color: #2e2c34;
      }

      .dataDescription {
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        text-align: right;
        color: #ff6652;
      }
    }

    .attachment {
      display: flex;
      gap: 15px;

      img {
        width: 250px;
        padding-top: 30px;
        padding-bottom: 20px;
      }

      .attachmentHead {
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        text-align: right;
        color: #ff6652;
        padding-top: 20px;
      }
    }

    .headTitle {
      display: flex;
      justify-content: space-between;
      padding-top: 20px;

      .martTitle {
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 36px;
        color: #2e2c34;
      }

      .martDescription {
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 18px;
        color: #4e2fa9;
        padding-top: 20px;
        padding-bottom: 20px;
      }
    }

    .title {
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 20px;
      color: #2e2c34;
      margin-bottom: 27px;
    }

    .select-master {
      margin-top: 26px;

      .input-label {
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
        color: #84818a;
      }
    }

    .action-bar {
      margin-top: 41px;
      display: flex;
      gap: 12px;
    }
  `,
});
