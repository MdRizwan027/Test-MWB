import React from "react";
import { useHeaderStyles } from "@/static/stylesheets/molecules";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { Avatar } from "@mui/material";

const Header = () => {
  const classes = useHeaderStyles();

  return (
    <div className={classes.root}>
      <div className={classes.search}>
        <span>
          <SearchIcon />
        </span>
        <input type={"text"} placeholder={"Search"} />
      </div>
      <div className={classes.menuContainer}>
        <span className={"notification-button"}>
          <NotificationsNoneOutlinedIcon />
        </span>

        <span className={"profile-button"}>
          <Avatar
            className={"avatar"}
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
            }
          />
          <span className={"title"}>Ajay Sharma</span>
          <span className={"arrow-dropdown"}>
            <ArrowDropDownOutlinedIcon />
          </span>
        </span>
      </div>
    </div>
  );
};

export { Header };
