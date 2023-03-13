import React from "react";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { useGridOptionButtonStyles } from "@/static/stylesheets/atoms/gridOptionButtonStyles";

interface GridOptionButtonProps {
  icon: "vertical-options";
}

const GridOptionButton: React.FC<GridOptionButtonProps> = (props) => {
  const classes = useGridOptionButtonStyles();
  const Icon =
    props?.icon === "vertical-options" ? <MoreVertOutlinedIcon /> : null;

  return (
    <>
      <span>
        <div className={classes.root}>{Icon}</div>
      </span>
    </>
  );
};

export { GridOptionButton };
