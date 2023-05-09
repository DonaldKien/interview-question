import { Divider } from "antd";

import Game1 from "../Playbook/Game1";
import Game2 from "../Playbook/Game2";
import Game3 from "../Playbook/Game3";
import Game4 from "../Playbook/Game4";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Game1 />
      <Game2 />
      <Divider />
      <Game3 />
      <Divider />
      <Game4 />
    </div>
  );
}
