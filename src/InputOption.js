import React from "react";
import { Icon } from "@material-ui/core";
import "./InputOption.css";
function InputOption(props) {
  return (
    <div className="inputOption">
      <props.Icon style={{ color: props.color }} />
      <h4>{props.title}</h4>
    </div>
  );
}

export default InputOption;
