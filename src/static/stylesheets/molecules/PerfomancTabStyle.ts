import { css } from "@emotion/css";

export const usePerfomancTabStyle = () => {
  return {
    root: css`
      width: 100%;
      border: 2px solid #e1e1e1;
      border-radius: 6px;

      .tabContainer {
        width: 100%;
        padding-top: 10px;
        padding-bottom: 10px;
      }
    `,
  };
};
