import React, { useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { css } from "@emotion/css";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface FeaturesTabProps {
  items: {
    label?: string;
    content?: React.ReactElement;
  }[];
  value?: number;

  onChange?(value: number): void;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`mwb-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ padding: "24px 5px" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const FeaturesTab: React.FC<FeaturesTabProps> = (props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    if (props?.onChange) {
      props?.onChange(newValue);
    }
  };

  useEffect(() => {
    if (props?.value && value !== props?.value) {
      setValue(props?.value);
    }
  }, [props?.value]);

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            classes={{
              indicator: css`
                background: #5542f6 !important;
              `,
            }}
            sx={{
              ".MuiTabs-flexContainer": {
                border: 0,
              },
              ".MuiButtonBase-root": {
                textTransform: "capitalize",
                fontFamily: "Manrope",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "20px",
                textAlign: "center",
                color: "#84818A !important",
              },

              ".Mui-selected": {
                color: "#2E2C34 !important",
                textTransform: "capitalize",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "14px",
                lineHeight: "20px",
                textAlign: "center",
              },
            }}
          >
            {props?.items?.map((item, index) => (
              <Tab key={index} label={item?.label} {...a11yProps(index)} />
            ))}
          </Tabs>
        </Box>

        {props?.items?.map((item, index) => (
          <TabPanel key={index} value={value} index={index}>
            {item?.content}
          </TabPanel>
        ))}
      </Box>
    </>
  );
};

export { FeaturesTab };
