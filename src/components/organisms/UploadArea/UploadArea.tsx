import React from "react";
import UploaderFrame from "@/static/icons/uploader-frame.png";
import { useUploadAreaStyles } from "@/static/stylesheets/organisms/uploadAreadStyles";

interface UploadAreaProps {
  label?: string;
}

const UploadArea: React.FC<UploadAreaProps> = (props) => {
  const classes = useUploadAreaStyles();

  return (
    <div className={classes.root}>
      <div className={"uploader"}>
        <div className={"icon"}>
          <img src={UploaderFrame} alt={"Uploader"} />
        </div>
        <div className={"content"}>
          <div className={"title"}>{props?.label}</div>
          <div className={"subtitle"}>
            Image can be size of 512 PX by 512 PX Only
          </div>
        </div>
      </div>
    </div>
  );
};

export { UploadArea };
