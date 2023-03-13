import { css } from "@emotion/css";

export const useDashboardLayoutStyles = () => {
  return {
    root: css`
      display: flex;
      height: 100vh;
    `,

    mainContainer: css`
      display: flex;
      flex-grow: 1;
      flex-direction: column;
      width: 100%;
    `,

    contentContainer: css`
      display: flex;
      flex-grow: 1;
      overflow: auto;
      padding: 25px 49px;
    `,
  };
};
