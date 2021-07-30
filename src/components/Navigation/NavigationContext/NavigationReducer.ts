import cloneDeep from "lodash-es/cloneDeep";

import {
  NavigationStateLink,
  NavigationStatePanel,
  NavigationStateGroup,
  NavigationState,
  NavigationConfig,
  NavType,
} from "../types";

/******************************************************************************
 * Helpers
 *****************************************************************************/
export const isPanel = (
  item:
    | NavigationStateLink
    | NavigationStatePanel
    | Partial<NavigationStateLink>
    | Partial<NavigationStatePanel>
): item is NavigationStatePanel =>
  typeof (item as NavigationStatePanel).links !== "undefined";

const isActive = (
  item: NavigationStateLink,
  state: NavigationState | NavigationConfig,
  route: string
) => {
  return state.isActive
    ? state.isActive(item.url, route)
    : item.isActive
    ? item.isActive(item.url, route)
    : route === item.url;
};
/******************************************************************************
 * Reducer
 *****************************************************************************/
/**
 * getActiveStateForRoute is used to compute the active state for the tree in
 * two cases:
 *
 * - on initial page load
 * - on any route changes client side
 */

const activePathHasNotBeenUpdated = (
  activePathFound: boolean,
  hasActiveChild: boolean
) => !activePathFound && !hasActiveChild;

const getPanelExpandedState = (
  isDesktop: boolean,
  item: NavigationStatePanel
) => {
  if (!isDesktop) {
    // on mobile the panel should be expanded if it is active
    return item.active;
  }
  return Boolean(item.expanded);
};

export const getActiveStateForRoute = (
  state: NavigationConfig | NavigationState,
  { isDesktop, route }: routeUpdatePayload
): NavigationState => {
  const applyChanges = (
    group: NavigationStateGroup,
    // this is an optimisation so we don't keep checking if all paths contain
    // active items once we have have found the active path in the tree. It
    // allows us just to recursively set nodes in these remaining paths to
    // inactive without doing more expensive checks.
    activePathFound = false
  ): boolean => {
    let hasActiveChild = false;
    for (const item of group) {
      // if we haven't found an active path above this level or at this level
      if (activePathHasNotBeenUpdated(activePathFound, hasActiveChild)) {
        if (isPanel(item)) {
          // recurse the children and keep looking
          const isChildActive = applyChanges(item.links);
          item.active = isChildActive;
          item.expanded = getPanelExpandedState(isDesktop, item);
        } else {
          // check if current link item is active
          item.active = isActive(item, state, route);
        }
        // we want to re-assign hasActiveChild only when it is true because once
        // true it remains so for all sibling nodes at the current level of the
        // tree we are iterating across.
        if (item.active) {
          hasActiveChild = true;
        }
      } else {
        // we have already identified the active path/item of the tree so
        // this item must be inactive
        item.active = false;
        // and it's children must also be inactive
        if (isPanel(item)) {
          item.expanded = getPanelExpandedState(isDesktop, item);
          applyChanges(item.links, true);
        }
      }
    }
    // return so next level of tree can know whether it has an active child
    // and update it's active state accordingly
    return hasActiveChild;
  };

  const update = cloneDeep(state) as NavigationState;

  applyChanges(update.links);

  return update;
};

const shouldAutoClose = (variant: NavType, isDesktop: boolean) =>
  (variant === NavType.GLOBAL || variant === NavType.HORIZONTAL) && isDesktop;

/**
 * getOpenState is used to compute the expanded state of the navigation when a panel
 * is opened.
 */
export const getStateForOpenPanelUpdate = (
  group: NavigationState | NavigationConfig,
  context: openPanelPayload
): NavigationState => {
  const update = cloneDeep(group) as NavigationState;

  const { isDesktop, label, variant } = context;

  const applyChanges = (
    group: NavigationStateGroup,
    parentOpened = false
  ): boolean => {
    let activeRouteInOpenPath = false;
    let openItemFoundAtLevel = false;
    for (const item of group) {
      if (isPanel(item)) {
        if (openItemFoundAtLevel && shouldAutoClose(variant, isDesktop)) {
          item.expanded = false;
        } else if (!parentOpened && item.label === label) {
          item.expanded = true;
          openItemFoundAtLevel = true;
          applyChanges(item.links, true);
          activeRouteInOpenPath = true;
        } else if (applyChanges(item.links, parentOpened)) {
          activeRouteInOpenPath = true;
          item.expanded = true;
        } else if (shouldAutoClose(variant, isDesktop)) {
          item.expanded = false;
        }
      } else if (item.active && parentOpened) {
        // we have detected an active route in the path of an opened parent
        activeRouteInOpenPath = true;
      }
    }
    // bubble up whether an active route was found in the path
    return activeRouteInOpenPath;
  };

  applyChanges(update.links);

  return update;
};
/**
 * getClosedState is used to compute the expanded state of the navigation when a panel
 * is closed.
 */
export const getStateForClosePanelUpdate = (
  group: NavigationState | NavigationConfig,
  label: string
): NavigationState => {
  const update = cloneDeep(group) as NavigationState;

  const applyChanges = (
    group: NavigationStateGroup,
    hasClosedParent = false
  ): void => {
    // used for optimisation to break from iteratively recursing the tree as
    // soon as we have a complete update
    let closedItemFoundAtLevel = false;
    for (const item of group) {
      if (isPanel(item)) {
        if (!hasClosedParent && item.label === label) {
          // we found the panel that was closed so close it and recursively close
          // any panel children
          item.expanded = false;
          closedItemFoundAtLevel = true;
          applyChanges(item.links, true);
        } else {
          // if this panel has a closed parent it should be closed
          if (hasClosedParent) {
            item.expanded = false;
          }
          // recurse children
          applyChanges(item.links, hasClosedParent);
        }
        // optimisation
        // if this is true at the end of an iteration we have processed all the
        // tree we need to update it so we can break from the loop here
        if (closedItemFoundAtLevel) {
          return;
        }
      }
    }
  };

  applyChanges(update.links);

  return update;
};

export const getStateForCloseNavUpdate = (
  group: NavigationState | NavigationConfig
): NavigationState => {
  const update = cloneDeep(group) as NavigationState;

  const applyChanges = (group: NavigationStateGroup): void => {
    for (const item of group) {
      if (isPanel(item)) {
        item.expanded = false;
        applyChanges(item.links);
      }
    }
  };

  applyChanges(update.links);

  return update;
};

export const getStateForOpenNavAtActivePanelUpdate = (
  group: NavigationState | NavigationConfig
): NavigationState => {
  const update = cloneDeep(group) as NavigationState;

  const applyChanges = (group: NavigationStateGroup): void => {
    for (const item of group) {
      if (isPanel(item)) {
        // expand all active panel items and close all inactive ones
        item.expanded = item.active;
        applyChanges(item.links);
      }
    }
  };

  applyChanges(update.links);

  return update;
};

enum ActionType {
  ROUTE_UPDATE = "ROUTE_UPDATE",
  OPEN_PANEL = "OPEN_PANEL",
  CLOSE_PANEL = "CLOSE_PANEL",
  CLOSE_NAV = "CLOSE_NAV",
  OPEN_NAV_ACTIVE_PATH = "OPEN_NAV",
  RESET_NAVIGATION_STATE = "RESET_NAVIGATION_STATE",
}

interface NavigationAction<T = void> {
  type: ActionType;
  payload?: T;
}

export type routeUpdatePayload = {
  route: string;
  isDesktop: boolean;
};

export const routeUpdate = (
  route: string,
  isDesktop = true
): NavigationAction<routeUpdatePayload> => ({
  type: ActionType.ROUTE_UPDATE,
  payload: {
    route,
    isDesktop,
  },
});

export type openPanelPayload = {
  label: string;
  variant: NavType;
  isDesktop: boolean;
};

export const openPanel = (
  label: string,
  variant: NavType,
  isDesktop = false
): NavigationAction<openPanelPayload> => ({
  type: ActionType.OPEN_PANEL,
  payload: {
    label,
    variant,
    isDesktop,
  },
});

export type closePanelPayload = string;
export const closePanel = (
  label: string
): NavigationAction<closePanelPayload> => ({
  type: ActionType.CLOSE_PANEL,
  payload: label,
});

export const closeNav = (): NavigationAction => ({
  type: ActionType.CLOSE_NAV,
});

export const openNavAtActivePath = (): NavigationAction => ({
  type: ActionType.OPEN_NAV_ACTIVE_PATH,
});

export const resetNavigationState = (payload: NavigationState) => ({
  type: ActionType.RESET_NAVIGATION_STATE,
  payload,
});

// TODO narrow to just INavigationState
export const reducer = (
  state: NavigationConfig | NavigationState,
  action: NavigationAction<any>
): NavigationState | NavigationConfig => {
  switch (action.type) {
    case ActionType.RESET_NAVIGATION_STATE:
      return action.payload;
    case ActionType.ROUTE_UPDATE:
      return getActiveStateForRoute(state, action.payload);
    case ActionType.OPEN_PANEL:
      return getStateForOpenPanelUpdate(
        state,
        action.payload as openPanelPayload
      );
    case ActionType.CLOSE_PANEL:
      return getStateForClosePanelUpdate(state, action.payload);
    case ActionType.CLOSE_NAV:
      return getStateForCloseNavUpdate(state);
    case ActionType.OPEN_NAV_ACTIVE_PATH:
      return getStateForOpenNavAtActivePanelUpdate(state);
    default:
      return state;
  }
};
