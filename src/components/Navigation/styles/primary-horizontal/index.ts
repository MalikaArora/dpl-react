import { css } from "styled-components";

import {
  INav,
  IPanel,
  IPanelItem,
  IPanelItemTrigger,
  IPanelItemAction,
} from "../../types";

import {
  navDesktopStyles,
  panelDesktopStyles,
  panelItemActionDesktopStyles,
  panelItemTriggerDesktopStyles,
} from "./desktop";

import {
  navMobileStyles,
  panelMobileStyles,
  panelItemActionMobileStyles,
  panelItemTriggerMobileStyles,
} from "../shared/mobile";

export const navStyles = css<INav>`
  ${({ isDesktop }) => css`
    width: 100%;
    ${isDesktop && navDesktopStyles}
    ${!isDesktop && navMobileStyles}
  `}
`;

export const panelStyles = css<IPanel>`
  ${({ isDesktop }) => css`
    ${isDesktop && panelDesktopStyles}
    ${!isDesktop && panelMobileStyles}
  `}
`;

const panelItemStyles = css<IPanelItem>`
  ${({ active, theme: { fontWeightStrong } }) => css`
    display: flex;
    /* targets the button/a tag so icons are positioned correctly */
    *:first-child {
      display: inline-flex;
    }
    button,
    a {
      align-items: center;
    }
    ${active &&
    css`
      & > a,
      & > button {
        font-weight: ${fontWeightStrong};
      }
    `}
  `}
`;

export const panelItemActionStyles = css<IPanelItemAction>`
  ${({ isDesktop }) => css`
    ${panelItemStyles}
    ${isDesktop && panelItemActionDesktopStyles}
    ${!isDesktop && panelItemActionMobileStyles}
  `}
`;

export const panelItemTriggerStyles = css<IPanelItemTrigger>`
  ${({ isDesktop }) => css`
    ${panelItemStyles}
    ${isDesktop && panelItemTriggerDesktopStyles}
    ${!isDesktop && panelItemTriggerMobileStyles}
  `}
`;

export const caretStyles = css<{ level: number }>``;
