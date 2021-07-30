import { css } from "styled-components";
import {
  IPanel,
  IPanelItem,
  IPanelItemTrigger,
  IPanelItemAction,
} from "../../types";

const levelZeroPanelStyles = css`
  flex-direction: row;
`;

const levelOnePanelStyles = css`
  top: 100%;
  position: absolute;
  right: -4px;
  margin-top: ${props => props.theme.spacingXXS};
`;

const aboveLevelZeroPanelStyles = css`
  ${({
    theme: {
      borderWidthBase,
      colorBackgroundResponsiveNav,
      colorBorderBaseAccessible,
      dropShadowDropdown,
    },
  }) => css`
    width: 230px;
    border: ${borderWidthBase} ${colorBorderBaseAccessible};
    background-color: ${colorBackgroundResponsiveNav};
    box-shadow: ${dropShadowDropdown};
    li:last-child {
      &:before {
        background: transparent;
      }
    }
  `}
`;

const aboveLevelOnePanelStyles = css`
  position: absolute;
  top: -1px;
  right: 100%;
`;

export const panelDesktopStyles = css<IPanel>`
  ${({ level, theme: { borderRadiusBase } }) => css`
    font-size: 12px;
    border-radius: ${borderRadiusBase};
    ${level === 0 && levelZeroPanelStyles}
    ${level === 1 && levelOnePanelStyles}
    ${level > 0 && aboveLevelZeroPanelStyles}
    ${level > 1 && aboveLevelOnePanelStyles}
  `}
`;

const levelZeroPanelItemFocusHoverStyles = css<IPanelItem>`
  ${({
    theme: {
      borderRadiusFormElement,
      colorBackgroundGlobalNav,
      colorGlobalFocus,
    },
  }) => css`
    outline: none;
    border-radius: ${borderRadiusFormElement};
    box-shadow: 0 0 0 2px ${colorBackgroundGlobalNav},
      0 0 0 5px ${colorGlobalFocus};
  `}
`;

const levelZeroPanelItemStyles = css<IPanelItem>`
  ${({ active, theme: { fontWeightStrong, spacingXXS } }) => css`
    *:first-child {
      align-items: center;
    }
    margin: 0 ${spacingXXS};
    /* target link contents for clickable area */
    & > button,
    & > a {
      &:hover,
      &:focus {
        ${levelZeroPanelItemFocusHoverStyles}
      }
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

const levelZeroPanelItemActionStyles = css<IPanelItem>`
  ${({
    active,
    theme: { colorBackgroundGlobalFocus, spacingSM, spacingXS },
  }) => css`
    a,
    button {
      padding: ${spacingSM} ${spacingXS};
      position: relative;
      ${active &&
      css`
        &:before {
          display: block;
          content: "";
          background: ${colorBackgroundGlobalFocus};
          width: 96%;
          height: 4px;
          position: absolute;
          left: 2%;
          bottom: 0;
          z-index: 1;
        }
      `}
    }
  `}
`;

const aboveLevelZeroPanelItemActiveStyles = css`
  ${({ theme: { fontWeightStrong } }) => css`
    & > a,
    & > button {
      opacity: 1;
      // this causes a resize bug if ul doesn't have a fixed width
      font-weight: ${fontWeightStrong};
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
`;

const aboveLevelZeroPanelItemStyles = css<IPanelItem>`
  ${({
    active,
    theme: {
      colorBackgroundGlobalFocus,
      colorBackgroundResponsiveAccent02,
      fontSizeBase,
      spacingSM,
      spacingXS,
    },
  }) => css`
    position: relative;
    &:before {
      content: "";
      height: 1px; // Value of @border-width-base without solid
      background-color: ${colorBackgroundResponsiveAccent02};
      position: absolute;
      bottom: 0;
      right: 0;
      left: ${spacingXS};
    }
    a,
    button {
      font-size: ${fontSizeBase};
      width: 100%;
      max-width: 100%;
      padding: ${spacingSM};
      &:hover,
      &:focus {
        outline: none;
        background-color: ${colorBackgroundResponsiveAccent02};
        &:before {
          width: auto;
          height: auto;
          background: none;
          border: 2px solid ${colorBackgroundGlobalFocus};
          content: "";
          position: absolute;
          top: 3px;
          bottom: 3px;
          left: 3px;
          right: 3px;
        }
      }
    }
    ${active && aboveLevelZeroPanelItemActiveStyles}
  `}
`;

const panelItemStyles = css<IPanelItem>`
  ${({ level }) => css`
    a,
    button {
      line-height: 1.5rem;
    }
    ${level === 0 && levelZeroPanelItemStyles}
    ${level > 0 && aboveLevelZeroPanelItemStyles}
  `}
`;

const aboveLevelZeroPanelItemActionStyles = css<IPanelItemAction>`
  ${({ active, theme: { colorBackgroundResponsiveAccent } }) => css`
    ${active &&
    css`
      background: ${colorBackgroundResponsiveAccent};
    `}
  `}
`;

export const panelItemTriggerDesktopStyles = css<IPanelItemTrigger>`
  ${panelItemStyles}
  position: relative;
`;

export const panelItemActionDesktopStyles = css<IPanelItemAction>`
  ${panelItemStyles}
  ${({ level }) => css`
    ${level === 0 && levelZeroPanelItemActionStyles}
    ${level > 0 && aboveLevelZeroPanelItemActionStyles}
  `}
`;
