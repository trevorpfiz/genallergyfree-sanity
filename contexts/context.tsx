import * as React from 'react';

type Action = { type: 'toggle' };
type Dispatch = (action: Action) => void;
type State = { opened: boolean };
type ContextProviderProps = { children: React.ReactNode };

const AppContext = React.createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined);

function openedReducer(state: State, action: Action) {
  switch (action.type) {
    case 'toggle': {
      return { opened: !state.opened };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function ContextProvider({ children }: ContextProviderProps) {
  const [state, dispatch] = React.useReducer(openedReducer, { opened: false });
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

function useContext() {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error('useContext must be used within a ContextProvider');
  }
  return context;
}

export { ContextProvider, useContext };
