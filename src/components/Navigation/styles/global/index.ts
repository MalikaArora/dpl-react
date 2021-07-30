import { css } from "styled-components";

import { INav, IPanel, IPanelItemTrigger, IPanelItemAction } from "../../types";

import {
  panelMobileStyles,
  panelItemActionMobileStyles,
  panelItemTriggerMobileStyles,
} from "./mobile";

import {
  panelDesktopStyles,
  panelItemActionDesktopStyles,
  panelItemTriggerDesktopStyles,
} from "./desktop";

const panelItemStyles = css`
  display: flex;
  /* targets the button/a tag so icons are positioned correctly */
  *:first-child {
    display: inline-flex;
  }
  button,
  a {
    align-items: center;
  }
`;

export const navStyles = css<INav>`
  ${({ theme: { colorTextGlobalNav } }) => css`
    li,
    a,
    button {
      color: ${colorTextGlobalNav};
    }
  `}
`;

export const panelStyles = css<IPanel>`
  ${({ isDesktop }) => css`
    ${!isDesktop && panelMobileStyles}
    ${isDesktop && panelDesktopStyles}
  `}
`;

export const panelItemActionStyles = css<IPanelItemAction>`
  ${({ isDesktop }) => css`
    ${panelItemStyles}
    ${!isDesktop && panelItemActionMobileStyles}
    ${isDesktop && panelItemActionDesktopStyles}
  `}
`;

export const panelItemTriggerStyles = css<IPanelItemTrigger>`
  ${({ isDesktop }) => css`
    ${panelItemStyles}
    ${!isDesktop && panelItemTriggerMobileStyles}
    ${isDesktop && panelItemTriggerDesktopStyles}
  `}
`;

export const caretStyles = css<{ level: number }>`
  ${({ level, theme: { spacingSM } }) => css`
    ${level > 0 &&
    css`
      padding-left: ${spacingSM};
    `}
  `}
`;
