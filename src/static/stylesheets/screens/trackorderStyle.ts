import { css } from "@emotion/css";

export const useTrackOrderStyles = () => ({
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
  `,
  section: css`
    .firmDetails {
      .head {
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
        color: #84818a;
      }
      .firmData {
        font-weight: 600;
        font-size: 13px;
        line-height: 20px;
      }
    }
  `,
  orderStatusModal: css`
    padding: 40px;
    position: relative;

    .title {
      font-weight: 600;
      font-size: 24px;
      line-height: 34px;
      margin-bottom: 30px;
    }

    .closeBtn {
      position: absolute;
      top: 20px;
      right: 30px;
      cursor: pointer;
      width: 26px;
      height: 26px;
    }

    .orderTrack {
      margin-bottom: 50px;

      .orderID {
        font-weight: 700;
        font-size: 18px;
        line-height: 20px;
      }

      .ordererName {
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
      }
    }

    .orderStatusWrapper {
      display: flex;

      .orderStatus {
        width: 200px;

        .progressLine {
          display: flex;
          align-items: center;

          .circle {
            height: 30px;
            width: 40px;
            border-radius: 50%;
            background: #a8b6c3;
            position: relative;
            z-index: 1;
          }
          .circle::before {
            content: "";
            position: absolute;
            width: 50%;
            height: 50%;
            border-radius: 50%;
            background: #fff;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }

          .line {
            width: 100%;
            height: 4px;
            background: #a8b6c3;
          }
        }
        .done {
          .circle {
            background: #fd6b09;
          }
          .line {
            background: #fd6b09;
          }
        }
      }
      .status p {
        font-weight: 700;
        font-size: 14px;
        line-height: 22px;
        letter-spacing: 0.05em;
      }
      .status {
        margin-top: 10px;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .status img {
        width: 18px;
      }

      .dateAndTime {
        font-weight: 400;
        font-size: 13px;
        line-height: 20px;
      }
    }
  `,

  paymentDetailsModal: css`
    padding: 40px;
    position: relative;

    .title {
      font-weight: 600;
      font-size: 24px;
      line-height: 34px;
      margin-bottom: 30px;
    }

    .closeBtn {
      cursor: pointer;
      position: absolute;
      top: 20px;
      right: 30px;
      width: 26px;
      height: 26px;
    }

    .amountBoxWrapper {
      margin-bottom: 50px;
      display: flex;
      gap: 20px;

      .amountBox {
        width: 200px;
        height: 110px;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .boxTitle {
          font-weight: 600;
          font-size: 16px;
          line-height: 22px;
          color: #84818a;
        }

        .amount {
          font-weight: 800;
          font-size: 18px;
          line-height: 34px;
          text-align: right;
          color: #2f3650;
        }
      }
    }
    .tableContent {
      thead {
        th {
          font-weight: 600;
          font-size: 14px;
          line-height: 20px;
          color: #84818a;
          text-align: left;
          padding: 20px;
        }
      }
      tbody {
        td {
          padding: 20px;
          font-weight: 500;
          font-size: 14px;
          line-height: 20px;
          color: #2e2c34;
          border-top: 2px solid #ebeaed;

          img {
            width: 25px;
          }

          button {
            font-weight: 600;
            font-size: 12px;
            line-height: 20px;
            color: #ffffff;
            background: #4e2fa9;
            border-radius: 5px;
            padding: 8px 20px;
          }
        }
      }
    }
  `,
  updateStatusModal: css`
    padding: 40px;
    position: relative;
    min-width: 700px;

    .title {
      font-weight: 600;
      font-size: 24px;
      line-height: 34px;
      margin-bottom: 30px;
    }

    .closeBtn {
      cursor: pointer;
      position: absolute;
      top: 20px;
      right: 30px;
      width: 26px;
      height: 26px;
    }

    .selectStatus {
      margin-bottom: 60px;
    }

    .products {
      display: flex;
      gap: 20px;
      align-items: center;
      margin-bottom: 30px;

      img {
        width: 36px;
        height: 36px;
      }

      .productName {
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #2e2c34;
      }

      .amountBtns {
        display: flex;
        gap: 10px;
        align-items: center;
        border: 1px solid #e1e1e1;
        border-radius: 4px;
        padding: 2px 10px;

        button {
          color: #ff6652;
          font-weight: 900;
        }

        p {
          font-weight: 600;
          font-size: 14px;
          line-height: 20px;
          text-align: center;
          color: #2e2c34;
        }
      }
    }
    .amountBoxWrapper {
      margin-bottom: 50px;
    }

    .nextButton {
      button {
        background: #ff6652;
        border-radius: 8px;
        padding: 12px 32px;
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
        text-align: center;
        color: #ffffff;
      }
    }
  `,

  outOfDelModal: css`
    padding: 40px;
    position: relative;
    min-width: 700px;

    .title {
      font-weight: 600;
      font-size: 24px;
      line-height: 34px;
      margin-bottom: 30px;
    }

    .closeBtn {
      cursor: pointer;
      position: absolute;
      top: 20px;
      right: 30px;
      width: 26px;
      height: 26px;
    }
    .InputHeading {
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      color: #4e2fa9;
      margin-bottom: 5px;
    }

    .modalContent {
      display: flex;
      flex-direction: column;
      gap: 50px;
    }

    // ================
    .uploadPicute {
      max-width: 300px;
    }

    // ================

    .subForm {
      display: flex;
      gap: 20px;
    }

    .addressForm {
      align-items: center;

      .newAddressBtn {
        font-size: 16px;
        font-weight: 700;
        line-height: 22px;
        text-align: center;
        color: #ff6652;
        padding: 12px 32px;
        border: 1px solid #ff6652;
        border-radius: 8px;

        span {
          margin-right: 10px;
        }
      }
    }
    // ================
    .submitButton {
      .formControl {
        margin-bottom: 30px;
        display: flex;
        gap: 10px;
        align-items: center;

        input {
          width: 20px;
          height: 20px;
          accent-color: #ff6652;
          color: #fff;
          backgrround: #fff;
        }
      }

      button {
        background: #ff6652;
        border-radius: 8px;
        padding: 12px 32px;
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
        text-align: center;
        color: #ffffff;
      }
    }
  `,
});

// background: #000;
