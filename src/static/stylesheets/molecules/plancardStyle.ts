import { css } from "@emotion/css";
import backgroundClipArt from "@/static/images/mwb_planbg.png";

export const usePlancardStyles = () => ({
  root: css`
    .container {
      cursor: pointer;
    }

    .plancard {
      margin-top: 20px;
      margin-bottom: 20px;
    }

    .plancard {
      width: 100%;
      background: #ffffff;
      border: 1px solid #e1e1e1;
      border-radius: 12px;
      background: url("${backgroundClipArt}");
    }
    .content-area {
      padding: 20px;
    }

    .actionButton {
      display: flex;
      justify-content: space-between;
      cursor: pointer;
      border-top: 1px solid #e1e1e1;
      padding-top: 20px;
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 500;
      font-size: 17px;
      line-height: 19px;
      color: #ff6652;
      padding: 20px;

      img {
        width: 10px;
      }
    }

    .headTitle {
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: 0.2px;
      color: #4e2fa9;
    }

    .headSubtitle {
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 33px;
      letter-spacing: 0.2px;
      color: #20c9ac;
    }

    .headDescription {
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 500;
      font-size: 17px;
      line-height: 19px;
      color: #121127;
      padding-top: 30px;
    }

    .plan-area {
      display: flex;
      justify-content: space-between;
      padding: 20px 20px 0px 20px;
    }

    .planTitle {
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: 0.2px;
      color: #4e2fa9;
    }

    .planSubtitle {
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 33px;
      letter-spacing: 0.2px;
      color: #20c9ac;
    }

    .planDescription {
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 500;
      font-size: 17px;
      line-height: 19px;
      color: #121127;
      padding: 20px;
    }

    .circle {
      border-radius: 50%;
      background: #4e2fa9;
      width: 50px;
      height: 50px;
      justify-content: center;
      align-items: center;
      display: flex;

      p {
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 20px;
        text-align: center;
        color: #ffffff;
      }
    }

    .circle-label {
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      color: #4e2fa9;
    }
  `,

  addDialog: css`
    padding: 44px;
    width: 461px;

    .modalContainer {
    }

    .modalHead {
      display: flex;
      justify-content: space-between;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 25px;
      color: #4e2fa9;
      cursor: pointer;
    }

    .planHead {
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 33px;
      letter-spacing: 0.2px;
      color: #121127;
      display: flex;
      gap: 80px;
      justify-content: center;
      align-items: center;
      padding-top: 20px;
      padding-bottom: 20px;

      .circlePlan {
        border-radius: 50%;
        background: #f9f5f2;
        width: 100px;
        height: 100px;
        justify-content: center;
        display: flex;
        flex-direction: column;
        align-items: center;

        .circleTitle {
          font-family: "Manrope", serif;
          font-style: normal;
          font-weight: 700;
          font-size: 30px;
          line-height: 140%;
          text-align: center;
          color: #ff6652;
        }

        .circleDescription {
          font-family: "Manrope", serif;
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: 0.2px;
          text-align: center;
          color: #7a7a86;
        }
      }

      span {
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 33px;
        letter-spacing: 0.2px;
        color: #7a7a86;
      }

      .planDescription {
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 180%;
        color: #121127;
        padding-top: 10px;
        padding-bottom: 10px;
      }
    }

    .FeatureHead {
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 180%;
      color: #121127;

      img {
        width: 25px;
      }
    }

    .projectTitle {
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 180%;
      color: #121127;
    }

    .featureList {
      display: flex;
      gap: 10px;
      padding-top: 10px;
      padding-bottom: 10px;
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
