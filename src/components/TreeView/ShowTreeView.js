import React from "react";
import TreeView from './TreeView';
import Folder from './Folder';
import File from './File'

function ShowTreeView() {
  return (
      <TreeView>
        <Folder name="src">
            <Folder name="Components">
            <File name="Modal.js" />
            <File name="Modal.css" />
            </Folder>
            <File name="index.js" />
            <File name="index.html" />
        </Folder>
        <File name="package.json" />
      </TreeView>
  );
}

export default ShowTreeView;