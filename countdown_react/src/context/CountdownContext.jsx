import React, { Children, useState } from "react";

const CountdownContext = React.createContext(null);

const CountdownProvider = ({ children }) => {
  const [event, setIvent] = useState(null);

  return (
    <CountdownContext.Provider value={{ event, setIvent }}>
      {children}
    </CountdownContext.Provider>
  );
};

export { CountdownContext, CountdownProvider };
