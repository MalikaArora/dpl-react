import { css } from "styled-components";
import { math } from "polished";
import {
  IPanel,
  IPanelItem,
  IPanelItemTrigger,
  IPanelItemAction,
} from "../../types";

export const panelMobileStyles = css<IPanel>`
  ${({
    level,
    theme: {
      borderWidthBase,
      colorBackgroundResponsiveAccent02,
      fontWeightBase,
      spacingM,
      spacingXS,
    },
  }) => css`
    font-weight: ${fontWeightBase};
    font-size: 12px;
    ${level === 0 &&
    css`
      padding: ${spacingM} ${spacingXS};
      & > li:first-child {
        border-top: ${borderWidthBase} ${colorBackgroundResponsiveAccent02};
      }
    `}
  `}
`;

const panelItemMobileStyles = css<IPanelItem>`
  ${({
    level,
    theme: {
      borderRadiusFormElement,
      borderWidthBase,
      colorBackgroundGlobalFocus,
      colorBackgroundGlobalNav,
      colorBackgroundResponsiveAccent02,
      spacingBase,
      spacingM,
      spacingSM,
    },
  }) => css`
    ${level === 0 &&
    css`
      border-bottom: ${borderWidthBase} ${colorBackgroundResponsiveAccent02};
      a {
        padding-left: ${spacingBase};
      }
    `}
    && {
      a,
      button {
        font-size: 12px;
        position: relative;
        width: 100%;
        opacity: 0.85;
        line-height: 1.5rem;
        padding-top: ${spacingSM};
        padding-bottom: ${spacingSM};
        padding-right: ${spacingBase};
        padding-left: ${math(
          spacingBase + " + (" + spacingM + "*" + level + ")"
        )};
        &:hover,
        &:focus {
          outline: none;
          opacity: 1;
          position: relative;
          outline: none;
          background-color: ${colorBackgroundGlobalFocus};
          color: ${colorBackgroundGlobalNav};
          &:before {
            width: auto;
            height: auto;
            border: 2px solid ${colorBackgroundGlobalNav};
            border-radius: ${borderRadiusFormElement};
            background: none;
            content: "";
            position: absolute;
            top: 3px;
            bottom: 3px;
            left: 3px;
            right: 3px;
          }
        }
      }
    }
  `}
`;

export const panelItemTriggerMobileStyles = css<IPanelItemTrigger>`
  ${({ expanded, theme: { colorBackgroundResponsiveAccent02 } }) => css`
    ${panelItemMobileStyles}
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
  ${({
    active,
    theme: { colorBackgroundResponsiveAccent, fontWeightStrong },
  }) => css`
    align-items: center;
    ${panelItemMobileStyles}
    ${active &&
    css`
      && a {
        opacity: 1;
        font-weight: ${fontWeightStrong};
        background: ${colorBackgroundResponsiveAccent};
        &:before {
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
  `}
`;
