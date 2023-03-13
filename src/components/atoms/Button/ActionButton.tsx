import React from "react";
import { Button } from "@mui/material";
import { useActionButtonStyles } from "@/static/stylesheets/atoms/actionButtonStyles";
import classNames from "classnames";

interface ActionButtonProps {
  variant?: "primary" | "default";
  title?: string;
  onClick?(): void;
}

const ActionButton: React.FC<ActionButtonProps> = (props) => {
  const classes = useActionButtonStyles();

  return (
    <>
      <Button
        variant={"contained"}
        className={classNames({
          [classes.root]: true,
          [classes.default]: props?.variant === "default",
          [classes.primary]: props?.variant === "primary",
        })}
        disableElevation={true}
        onClick={props?.onClick}
      >
        {props?.title}
      </Button>
    </>
  );
};

export { ActionButton };
