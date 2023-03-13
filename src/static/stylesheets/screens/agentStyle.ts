import { css } from "@emotion/css";

export const usAgentStyles = () => ({
  root: css`
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;

    .commonTitle {
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 20px;
      color: #2e2c34;
    }

    .tableTitle {
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
      letter-spacing: 0.2px;
      text-transform: uppercase;
      color: #1b4670;
      mix-blend-mode: normal;
    }

    .tableData {
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #000000;
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
            display:flex;
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
      right:-20px;
      z-index: 999;
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
