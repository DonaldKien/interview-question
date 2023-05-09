import React from "react";
import { Button } from "antd";

const ButtonB = ({ count, onClick }) => {
  console.log("Button B Re-render");

  return (
    <Button type="dashed" onClick={onClick}>
      {count}
    </Button>
  );
};

export default ButtonB;
