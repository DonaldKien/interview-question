import React from "react";
import { SettingOutlined } from "@ant-design/icons";
import { message, Collapse } from "antd";
import styled from "styled-components";

const { Panel } = Collapse;

const ARR = [...Array(12).keys()];

/**
 * 2a: Prevent collapse when settings is clicked
 */

/**
 * 2b: Styling
 * (i) Centralize number in each box
 * (ii) Group boxes in 3 rows of 4
 * (iii) Fixed the footer at the bottom
 */

const Game2 = () => {
  return (
    <Collapse
      onChange={() => {
        message.info("Collapse Clicked!");
      }}
    >
      <Panel
        header="This is panel header 1"
        extra={
          <SettingOutlined
            onClick={(e) => {
              e.stopPropagation();
              message.info("Settings Clicked!");
            }}
          />
        }
      >
        <Content>
          <BoxGroup>
            {ARR.map((item) => (
              <BoxItem key={item}>{item + 1}</BoxItem>
            ))}
          </BoxGroup>
          <ContentFooter>This is footer</ContentFooter>
        </Content>
      </Panel>
    </Collapse>
  );
};

export default Game2;

const Content = styled.div`
  min-height: 400px;
`;

const ContentFooter = styled.div`
  height: 30px;
  width: 100%;

  background: gray;
  color: white;
`;

const BoxGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const BoxItem = styled.div`
  height: 30px;

  width: calc(100% / 3);
  margin: 1px;

  background: #e6f7ff;
  border: 1px solid #91d5ff;
`;
