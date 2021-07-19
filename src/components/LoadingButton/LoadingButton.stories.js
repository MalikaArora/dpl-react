import React from "react";
import ReactDOM from "react-dom";

import NiceButton from "./NiceButton";

import "./styles.css";

export default {
  title: 'Loading Button',    
}

function App() {
  const [isSecondButtonLoading, setIsSecondButtonLoading] = React.useState(
    false
  );
  const [loadingSpeed, setLoadingSpeed] = React.useState(1);

  React.useEffect(() => {
    if (isSecondButtonLoading) {
      setTimeout(() => {
        setIsSecondButtonLoading(false);
      }, 1000 / loadingSpeed);
    }
  }, [isSecondButtonLoading, loadingSpeed]);

  return (
    <div className="Loading">
      <div>
        <NiceButton
          isLoading={isSecondButtonLoading}
          onClick={() => setIsSecondButtonLoading(true)}
        >
          Click me to start a nicer loading button experience!
        </NiceButton>
      </div>
      Try increasing the loading speed
      <input
        type="range"
        max={10}
        min={1}
        value={loadingSpeed}
        onChange={e => setLoadingSpeed(e.target.value)}
      />
      Loading speed:{loadingSpeed}
    </div>
  );
}
export const ShowLoader = () => {
    return <App />;
}