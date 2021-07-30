import { css } from "styled-components";
import {
  IPanel,
  IPanelItem,
  IPanelItemAction,
  IPanelItemTrigger,
} from "../../types";
import { math } from "polished";

export const navMobileStyles = css`
  ${({ theme: { colorTextGlobalNav } }) => css`
    li,
    a,
    button {
      color: ${colorTextGlobalNav};
      svg {
        fill: ${colorTextGlobalNav};
      }
    }
  `}
`;

export const panelMobileStyles = css<IPanel>`
  ${({ level, theme: { fontSizeBase, spacingM, spacingXS } }) => css`
    a,
    button {
      line-height: 1.5rem;
      font-size: ${fontSizeBase};
      &:focus {
        outline: none;
      }
    }
    ${level === 0 &&
    css`
      padding: ${spacingM} ${spacingXS};
    `}
  `}
`;

const panelItemHoverFocusStyles = css`
  ${({
    theme: {
      borderRadiusFormElement,
      colorBackgroundBrand,
      colorBorderFocusInverse,
      colorTextBrandPrimary,
    },
  }) => css`
    background-color: ${colorBackgroundBrand};
    color: ${colorTextBrandPrimary};
    position: relative;
    outline: none;

    &:before {
      border-radius: ${borderRadiusFormElement};
      border: 2px solid ${colorBorderFocusInverse};
      content: "";
      position: absolute;
      top: 3px;
      bottom: 3px;
      left: 3px;
      right: 3px;
    }
  `}
`;

const panelItemStyles = css<IPanelItem>`
  ${({ level, theme: { spacingBase, spacingM } }) => css`
    display: flex;
    & > a,
    & > button {
      width: 100%;
      padding: ${spacingBase};
      padding-left: ${math(
        spacingBase + " + (" + spacingM + "*" + level + ")"
      )};
      &:hover,
      &:focus {
        ${panelItemHoverFocusStyles}
      }
    }
  `}
`;

const panelItemActionActiveStyles = css<IPanelItemAction>`
  ${({ theme: { colorBackgroundResponsiveAccent } }) => css`
    & a {
      &:hover,
      &:focus {
        &:before {
          width: auto;
          height: auto;
          background: transparent;
        }
      }
    }
    & a {
      position: relative;
      opacity: 1;
      background: ${colorBackgroundResponsiveAccent};
      &:before {
        /* reset the hover/focus border */
        border: none;
        border-radius: 0;
        display: block;
        content: "";
        background-color: #ffffff;
        width: 4px;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
      }
    }
  `}
`;

export const panelItemTriggerMobileStyles = css<IPanelItemTrigger>`
  ${({ expanded, theme: { colorBackgroundResponsiveAccent02 } }) => css`
    ${panelItemStyles}
    flex-direction: column;
    ${expanded &&
    css`
      position: relative;
      &:before {
        display: block;
        content: "";
        background-color: ${colorBackgroundResponsiveAccent02};
        width: 4px;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 0;
      }
    `}
  `}
`;

export const panelItemActionMobileStyles = css<IPanelItemAction>`
  ${({ active }) => css`
    ${panelItemStyles}
    ${active && panelItemActionActiveStyles}
  `}
`;
