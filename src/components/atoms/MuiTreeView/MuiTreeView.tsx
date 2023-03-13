import React from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import { useMuitreeViewStyles } from "@/static/stylesheets/atoms";

const MuiTreeView = () => {
  const classes = useMuitreeViewStyles();

  return (
    <div className={classes.root}>
      <TreeView
        className="treefont"
        aria-label="file system navigator"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{
          height: 300,
          flexGrow: 1,
          maxWidth: 300,
          overflowY: "auto",
          border: 2,
          padding: "30px",
          borderColor: "#E1E1E1",
          borderRadius: "6px",
        }}
      >
        <TreeItem nodeId="1" label="Beverages">
          <TreeItem nodeId="2" label="Calendar" />
        </TreeItem>
        <TreeItem nodeId="5" label="Chocolate Biscuits">
          <TreeItem nodeId="10" label="Butter Biscuits" />
          <TreeItem nodeId="6" label="Namkeens">
            <TreeItem nodeId="8" label="Chips" />
          </TreeItem>
        </TreeItem>
      </TreeView>
    </div>
  );
};

export default MuiTreeView;
