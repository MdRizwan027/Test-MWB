import { css } from "@emotion/css";

export const useBazaarCounterStyles = () => {
  return {
    root: css`
      display: flex;
      width: 100%;
    `,

    wholesellerCard: css`
      display: flex;
      gap: 65px;
      width: auto;
      align-items: center;
      height: 150px;
      background: #fafafa;
      border: 2px solid #e1e1e1;

      .borderItem {
        border-left: 3px solid #e1e1e1;
      }

      .wholesellerItem {
        padding-left: 40px;
        padding-right: 40px;
      }

      .headTitle {
        padding-top: 10px;
        padding-bottom: 10px;
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 20px;
        color: #84818a;
      }

      .wholesellerCount {
        padding-top: 10px;
        padding-bottom: 10px;
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 22px;
        color: #5542f6;
      }

      .subscriberCount {
        padding-top: 10px;
        padding-bottom: 10px;
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 22px;
        color: #00a5ff;
      }

      .revenewCount {
        padding-top: 10px;
        padding-bottom: 10px;
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 22px;
        color: #20c9ac;
      }
    `,
  };
};
