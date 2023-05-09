import React from "react";
import { Button } from "antd";

const ButtonA = ({ count, onClick }) => {
  console.log("Button A Re-render");

  return (
    <Button type="primary" onClick={onClick}>
      {count}
    </Button>
  );
};

export default ButtonA;
