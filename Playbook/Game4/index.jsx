import React, { useState } from "react";
import { Alert } from "antd";

import ButtonA from "./ButtonA";
import ButtonB from "./ButtonB";

/**
 * 4: Prevent rerendering of ButtonA or ButtonB when only 1 button is clicked
 */

const styles = {
  alert: {
    marginTop: 5,
    width: 150
  }
};

const Game4 = () => {
  const [buttonACount, setButtonACount] = useState(0);
  const [buttonBCount, setButtonBCount] = useState(0);

  const onButtonAClick = () => {
    setButtonACount((buttonACount) => buttonACount + 1);
  };

  const onButtonBClick = () => {
    setButtonBCount((buttonBCount) => buttonBCount + 1);
  };

  return (
    <div>
      <ButtonA count={buttonACount} onClick={onButtonAClick} />
      <ButtonB count={buttonBCount} onClick={onButtonBClick} />
      <Alert
        showIcon
        message={`Total Click: ${buttonACount + buttonBCount}`}
        style={styles.alert}
      />
    </div>
  );
};

export default Game4;
