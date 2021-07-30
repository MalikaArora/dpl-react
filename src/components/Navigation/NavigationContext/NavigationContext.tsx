import React, {
  useContext,
  useReducer,
  useMemo,
  useRef,
  useEffect,
} from "react";

import { useBreakpoint } from "@hook";

import { NavigationConfig, NavigationState, NavType } from "../types";

import {
  reducer,
  openPanel,
  closePanel,
  closeNav,
  openNavAtActivePath,
  routeUpdate,
  resetNavigationState,
} from "./NavigationReducer";

import {
  INavigationInternalCallbacks,
  INavigationDispatchContext,
} from "../types";

export const NavigationVariantContext = React.createContext<NavType>(null);

const NavigationConfigContext = React.createContext<NavigationConfig>(null);

const NavigationStateContext = React.createContext<
  NavigationState | NavigationConfig
>(null);
const NavigationDispatchContext = React.createContext<
  INavigationDispatchContext
>(null);

const NavigationInternalCallbacksContext = React.createContext<
  INavigationInternalCallbacks
>({});

const NavigationRefsContext = React.createContext<IRefs>({});

interface IRefs {
  [key: string]: React.MutableRefObject<any>;
}

export const NavigationProvider: React.FC<{
  variant: NavType;
  initialState: NavigationState;
  useLocation: () => any;
  internalCallbacks: INavigationInternalCallbacks;
  refs: IRefs;
  config: NavigationConfig;
}> = ({
  children,
  initialState,
  internalCallbacks = {},
  useLocation,
  variant,
  refs,
  config,
}) => {
  const route = useLocation();
  const isUpdate = useRef(false);

  const { breakpoint } = useBreakpoint();
  const isDesktop = breakpoint === "large";

  const [state, dispatch] = useReducer(reducer, initialState);
  const actions: INavigationDispatchContext = useMemo(() => {
    /* istanbul ignore next */
    return {
      closePanel: payload => dispatch(closePanel(payload)),
      openPanel: (label: string, variant: NavType, isDesktop?: boolean) =>
        dispatch(openPanel(label, variant, isDesktop)),
      closeNav: () => dispatch(closeNav()),
      openNavAtActivePath: () => dispatch(openNavAtActivePath()),
    };
  }, [dispatch]);

  useEffect(() => {
    if (isUpdate.current) {
      dispatch(resetNavigationState(initialState));
    } else {
      isUpdate.current = true;
    }
  }, [initialState]);
  /**
   * This effect handles when a route is updated without a page refresh using a
   * routing library like react-router.
   *
   * In this case we cant the navigation state to be updated from the current
   * state via the reducer so we dispatch an action like any other update.
   *
   * We use a ref to ensure we only handle updates and not the initial route
   * that we mounted with.
   */
  useEffect(() => {
    if (isUpdate.current) {
      dispatch(routeUpdate(route, isDesktop));
    } else {
      isUpdate.current = true;
    }
  }, [route]);

  return (
    <NavigationConfigContext.Provider value={config}>
      <NavigationRefsContext.Provider value={refs}>
        <NavigationInternalCallbacksContext.Provider value={internalCallbacks}>
          <NavigationVariantContext.Provider value={variant}>
            <NavigationStateContext.Provider value={state}>
              <NavigationDispatchContext.Provider value={actions}>
                {children}
              </NavigationDispatchContext.Provider>
            </NavigationStateContext.Provider>
          </NavigationVariantContext.Provider>
        </NavigationInternalCallbacksContext.Provider>
      </NavigationRefsContext.Provider>
    </NavigationConfigContext.Provider>
  );
};

export function useNavigationConfig() {
  return useContext(NavigationConfigContext);
}

export function useNavigationState() {
  const state = useContext(NavigationStateContext);

  return state as NavigationState;
}

export function useNavigationOptions() {
  const { links, ...options } = useContext(NavigationStateContext);

  return options;
}

/* istanbul ignore next */
export function useNavigationDispatch() {
  const actions = useContext(NavigationDispatchContext);

  return actions;
}

export function useNavigationVariant() {
  return useContext(NavigationVariantContext);
}

export function useInternalCallbacks() {
  return useContext(NavigationInternalCallbacksContext);
}

export function useNavigationRefs() {
  return useContext(NavigationRefsContext);
}
