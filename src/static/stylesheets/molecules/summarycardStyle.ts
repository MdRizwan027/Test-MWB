import { css } from "@emotion/css";

export const useSummarycardStyle = () => {
  return {
    root: css`
      display: flex;
      width: 100%;
      height: auto;
    `,

    bazaarCard: css`
      font-size: 16px;
      font-family: "Manrope", serif;
      padding: 20px 40px 20px 40px;
      background: #fbfafc;
      border: 2px solid #e1e1e1;
      min-width: 162px;

      .headTitle {
        font-size: 14px;
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 600;
        color: #84818a;
      }

      .headSubtitle {
        font-size: 30px;
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 600;
      }
    `,

    wholesellerCard: css`
      display: flex;
      gap: 24px;
      padding: 20px 40px 20px 40px;
      width: 100%;
      background: #fafafa;
      border: 2px solid #e1e1e1;
      border-left: 0px;

      .wholesellerItem {
        border-right: 2px solid #e1e1e1;
        padding-right: 20px;
      }
      .headTitle {
        font-family: "Manrope";
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 18px;
        color: #84818A;
      }

      .headSubtitle {
        font-size: 30px;
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
      }
      .headTitle2 {
        font-family: "Manrope";
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.15px;
        color: #84818a;
        margin-top: 15px;
      }
      .headSubtitle2 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        color: #2e2c34;
        margin-top: 15px;
      }
    `,

    agentsCard: css`
      display: flex;
      gap: 20px;
      padding: 20px 40px 20px 40px;
      width: 100%;
      background: #f9fbff;
      border: 2px solid #e1e1e1;
      border-left: 0px;

      .agentItem {
        border-right: 2px solid #e1e1e1;
        padding-right: 20px;
      }
      .headTitle {
        font-size: 14px;
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 600;
        color: #84818a;
      }

      .headSubtitle {
        font-size: 30px;
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
      }
      .headTitle2 {
        font-family: "Manrope";
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.15px;
        color: #84818a;
        margin-top: 15px;
      }
      .headSubtitle2 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        color: #2e2c34;
        margin-top: 15px;
      }
    `,
  };
};
