import { css } from "@emotion/css";

export const useHeaderStyles = () => {
  return {
    root: css`
      display: flex;
      height: 60px;
      background: #f9f5f2;
      padding: 0 35px;
    `,

    search: css`
      display: flex;
      flex-grow: 1;
      align-items: center;
      height: 60px;

      svg {
        color: #84818a;
      }

      input {
        width: 100%;
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        outline: 0;
        border: 0;
        background: transparent;
        margin-left: 11.51px;
      }
    `,

    menuContainer: css`
      display: flex;
      align-items: center;
      gap: 20px;

      .notification-button {
        cursor: pointer;

        :hover {
          opacity: 0.8;
        }

        svg {
          color: #84818a;
        }
      }

      .profile-button {
        display: flex;
        align-items: center;
        cursor: pointer;

        :hover {
          opacity: 0.8;
        }

        .avatar {
          height: 32px;
          width: 32px;
        }

        .title {
          font-family: "Manrope", serif;
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 22px;
          color: #2e2c34;
          margin-left: 12px;
          margin-right: 9px;
        }

        .arrow-dropdown {
          svg {
            color: #84818a;
          }
        }
      }
    `,
  };
};
