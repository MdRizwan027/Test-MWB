import React from "react";
import classNames from "classnames";
import { useNavigate } from "react-router";
import { useMatch } from "react-router-dom";

interface MenuItemProps {
  active?: boolean;
  label: string;
  icon: React.ReactNode;
  href: string;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const navigate = useNavigate();
  const routeMatched = useMatch(props?.href);

  const handleClick = () => {
    if (props?.href) {
      navigate(props?.href);
    }
  };

  return (
    <div
      className={classNames({
        "menu-item": true,
        active: props?.active || routeMatched,
      })}
      onClick={handleClick}
    >
      <div className={"icon"}>{props?.icon}</div>
      <div className={"label"}>{props?.label}</div>
    </div>
  );
};

export { MenuItem };
