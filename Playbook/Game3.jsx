import React, { useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import styled from "styled-components";

/**
 * 3: Ensure Tom and Jerry has the correct number of donuts after tossing several times
 */

const mockFetch = () => {
  const delay = Math.random() * 2000 + 1000;
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

const Game3 = () => {
  const [donut, setDonut] = useState({
    tom: 0,
    jerry: 0
  });

  const addDonut = (name) => {
    mockFetch().then(() => {
      setDonut({
        ...donut,
        [name]: donut[name] + 1
      });
    });
  };

  return (
    <div>
      <DonutInfo>
        <div>Tom's Donut: {donut["tom"]}</div>
        <div>Jerry's Donut: {donut["jerry"]}</div>
      </DonutInfo>
      <Button icon={<PlusCircleOutlined />} onClick={() => addDonut("tom")}>
        Toss a donut to Tom
      </Button>
      <Button icon={<PlusCircleOutlined />} onClick={() => addDonut("jerry")}>
        Toss a donut to Jerry
      </Button>
    </div>
  );
};

export default Game3;

const DonutInfo = styled.div`
  margin-bottom: 5px;
`;
