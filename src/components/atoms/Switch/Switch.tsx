import React, { useEffect, useState } from "react";
import { useSwitchStyles } from "@/static/stylesheets/atoms";

interface SwitchProps {}

const Switch= (props:any) => {
  const classes = useSwitchStyles();

  useEffect(() => {


  
    }, []);

  return (
    <>
      <span className={classes.root}>
        <label className={"switch"}>
          <input type="checkbox" checked={props.SwitchProps}/>
          <span className="slider round"></span>
        </label>
      </span>
    </>
  );
};

export { Switch };
