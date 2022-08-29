import React from "react";
import  CounterWithReducer from "./CounterWithReduser";

interface AppProps {
  message?: string;
  // description: string;
}

const App = ({ message }: AppProps) => {
  return (
    <div>
      <CounterWithReducer />
    </div>
  );
};

App.defaultProps = {
  message: 123,
  description: "This is App Componet",
};

export default App;
