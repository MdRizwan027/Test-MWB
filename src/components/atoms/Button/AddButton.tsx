import React from "react";
import { Button } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useActionButtonStyles } from "@/static/stylesheets/atoms/actionButtonStyles";
import classNames from "classnames";

interface AddButtonProps {
  variant?: "primary" | "default";
  label?: string;
  onClick?(): void;
}

const AddButton: React.FC<AddButtonProps> = (props) => {
  const classes = useActionButtonStyles();

  return (
    <>
      <Button
      className={classNames({
        [classes.root]: true,
        [classes.default]: props?.variant === "default",
        [classes.primary]: props?.variant === "primary",
      })}

        sx={{
          color: "#ffffff",
          background: "#FF6652",
          textTransform: "capitalize",
          fontFamily: "Manrope",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "20px",
          height: "48px",
          paddingLeft: "20px",
          paddingRight: "20px",

          ".title": {
            marginLeft: "12.5px",
          },
        }}
        
        variant={"contained"}
        disableElevation={true}
        onClick={props?.onClick}
      >
        <AddOutlinedIcon />
        <span className={"title"}>{props?.label}</span>
      </Button>
    </>
  );
};

export { AddButton };
