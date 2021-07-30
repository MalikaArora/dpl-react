import React, { useContext } from "react";

const NavigationExpandedContext = React.createContext<boolean>(false);

const VerticalNavigationDefinedCallbackContext =
  React.createContext<(isExpanded: boolean) => void>(null);

export const VerticalNavigationProvider: React.FC<{
  isExpanded: boolean;
  setIsDefined: (isDefined: boolean) => void;
}> = ({ children, isExpanded, setIsDefined }) => {
  return (
    <VerticalNavigationDefinedCallbackContext.Provider value={setIsDefined}>
      <NavigationExpandedContext.Provider value={isExpanded}>
        {children}
      </NavigationExpandedContext.Provider>
    </VerticalNavigationDefinedCallbackContext.Provider>
  );
};

export function useNavigationExpanded() {
  return useContext(NavigationExpandedContext);
}

export function useVerticalNavigationDefinedCallback() {
  return useContext(VerticalNavigationDefinedCallbackContext);
}
