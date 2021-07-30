/**
 * Navigation Config Types
 */
type onLinkClick = (
  e: React.MouseEvent<HTMLElement>,
  item: NavigationStateLink
) => void;

type onClick = (e: React.MouseEvent<HTMLAnchorElement>) => void;

export type LinkProps = NavigationStateLink & { onClick?: onClick };

type LinkAs = React.ComponentType<LinkProps>;

type isActiveFn = (url: string, route: string) => boolean;

type NavigationConfigLink = {
  /**
   * Text to render for the link.
   */
  label: string;
  /**
   * URL to navigate to.
   */
  url?: string;
  /**
   * Optional Icon.
   */
  icon?: React.ReactNode;
  /**
   * Link target.
   */
  target?: string;
  /**
   * Optional function to determine if the link is active. Falls back to
   * default.
   */
  isActive?: isActiveFn;
  /**
   * Callback invoked when a link is clicked. Will cause link to be rendered
   * as a button.
   */
  onClick?: onLinkClick;
};

type NavigationConfigPanel = {
  /**
   * Text to render for the panel button.
   */
  label: string;
  /**
   * Optional Icon.
   */
  icon?: React.ReactNode;
  /**
   * Child links.
   */
  links: NavigationConfigGroup;
};

type NavigationConfigGroup = (NavigationConfigPanel | NavigationConfigLink)[];

type NavigationGlobalOptions = {
  /**
   * Text to render for the menu title on mobile. Defaults to "Menu".
   */
  label?: string;
  /**
   * Custom function to detect the currently active link
   */
  isActive?: isActiveFn;
  /**
   * Render a custom link in place of standard anchor tag. Use this for option client
   * side routing.
   */
  linkAs?: LinkAs;
  /**
   * Callback invoked when a link is clicked.
   */
  onLinkClick?: onLinkClick;
  /**
   * Optional expanded panel icon override
   */
  panelExpandedIcon?: React.ReactNode;
  /**
   * Optional closed panel icon override
   */
  panelClosedIcon?: React.ReactNode;
  /**
   * Optional panel flyout icon override
   */
  panelFlyoutIcon?: React.ReactNode;
};

export type NavigationConfig = {
  links: NavigationConfigGroup;
} & NavigationGlobalOptions;

/**
 * Navigation State Types
 *
 * The navigation state types are the config types with some
 * additional properties that are computed at runtime like "active"
 */
type NavigationLinkState = {
  active: boolean;
};

export type NavigationStateLink = NavigationConfigLink & NavigationLinkState;

type NavigationPanelState = {
  expanded: boolean;
  active: boolean;
};

export type NavigationStatePanel = {
  links: NavigationStateGroup;
} & NavigationPanelState &
  Omit<NavigationConfigPanel, "links">;

export type NavigationStateGroup = (
  | NavigationStatePanel
  | NavigationStateLink
)[];

export type NavigationState = {
  links: NavigationStateGroup;
} & NavigationGlobalOptions;

export enum NavType {
  GLOBAL = "GLOBAL",
  HORIZONTAL = "HORIZONTAL",
  VERTICAL = "VERTICAL",
}

/**
 * Navigation Render Types
 */
export interface INav {
  isDesktop: boolean;
  variant: NavType;
}

export interface IPanel {
  level: number;
  isDesktop: boolean;
  variant: NavType;
}

export interface IPanelItem {
  isDesktop: boolean;
  level: number;
  active: boolean;
  variant: NavType;
  /**
   * This is used to compute a padding offset in the vertical nav desktop
   * styles when icons are used in the nav
   */
  parentIconOffset: number;
}

export interface IPanelItemAction extends IPanelItem {}
export interface IPanelItemTrigger extends IPanelItem {
  expanded: boolean;
}

export interface INavigationDispatchContext {
  closePanel: (label: string) => void;
  openPanel: (label: string, variant: NavType, isDesktop?: boolean) => void;
  closeNav: () => void;
  openNavAtActivePath: () => void;
}

export interface INavigationInternalCallbacks {
  onActionItemClick?: (isDesktop: boolean) => void;
}
