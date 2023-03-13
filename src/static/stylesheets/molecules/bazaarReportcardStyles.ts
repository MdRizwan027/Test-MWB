import { css } from "@emotion/css";

export const useBazaarReportCardStyles = () => {
    return {
        root: css`
            display: flex;
            width: 100%;
        `,

        wholesellerCard: css`
            display: flex;
            gap: 65px;
            padding: 20px 40px 20px 40px;
            width: 100%;
            align-items: center;
            height: 170px;
            background: #fafafa;
            border: 2px solid #e1e1e1;

            .revenewItem {
                border-left: 3px solid #e1e1e1;
            }

            .wholesellerItem {
                padding-left: 40px;
                padding-right: 40px;
            }
            .totalcount {
                padding-top: 10px;
                padding-bottom: 10px;
                font-family: "Manrope", serif;
                font-style: normal;
                font-weight: 700;
                font-size: 30px;
                line-height: 32px;
                color: #4e2fa9;
            }

            .headTitle {
                padding-top: 10px;
                font-family: "Manrope", serif;
                font-style: normal;
                font-weight: 600;
                font-size: 14px;
                line-height: 18px;
                color: #84818a;
            }
            .subHeadTitle {
                padding-top: 10px;
                font-family: "Manrope", serif;
                font-style: normal;
                font-weight: 600;
                font-size: 12px;
                line-height: 18px;
                color: #84818a;
            }

            .headSubtitle {
                padding-bottom: 10px;
                font-family: "Manrope", serif;
                font-style: normal;
                font-weight: 700;
                font-size: 18px;
                line-height: 22px;
                color: #2e2c34;
            }
        `,
    };
};
