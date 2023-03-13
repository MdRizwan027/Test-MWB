import { css } from "@emotion/css";

export const useBazaarCardStyles = () => {
  return {
    root: css`
      cursor: pointer;
    `,

    container: css`
      width: 100%;
      height: auto;
      border: 2px solid #e1e1e1;
      border-radius: 4px;
    `,

    // BazaarContainer
    bazaarContainer: css`
      display: flex;
      gap: 24px;
    `,

    // BazaarCard
    bazaarCard: css`
      padding: 20px 0px 5px 20px;
      max-width:50%;
      .brandLogo {
        width: 40px;
        padding: 15px 0 25px 0;
      }

      .headTitle {
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
        color: #2e2c34;
      }

      .headSubtitle {
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #84818a;
      }
    `,

    // wholeSeller Container
    wholeSellerContainer: css`
      display: flex;
      gap: 24px;

      .headTitle {
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
        letter-spacing: 0.2px;
        color: #2e2c34;
        mix-blend-mode: normal;
      }

      .headSubtitle {
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        color: #888887;
        mix-blend-mode: normal;
      }
    `,

    // WholeSellerCard
    wholesellerCard: css`
      border-left: 2px solid #e1e1e1;
      padding: 30px 20px 30px 20px;

      .container {
        display: flex;
        gap: 12px;
        padding: 5px;
      }
    `,

    // RevinewContainer
    revinerContainer: css`
      border-top: 2px solid #e1e1e1;
      display: flex;
      gap: 24px;
    `,

    // RevinewCard
    reveniewCard: css`
      .container {
        display: flex;
        gap: 40px;
        padding: 10px 20px 10px 20px;
      }

      .headTitle {
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
        color: #84818a;
        padding: 5px 0px 5px 0px;
      }

      .headSubtitle {
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        color: #2e2c34;
        padding: 5px 0px 5px 0px;
      }
    `,
  };
};
