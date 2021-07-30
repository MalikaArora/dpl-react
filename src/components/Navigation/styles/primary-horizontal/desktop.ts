import { css } from "styled-components";
import {
  IPanel,
  IPanelItem,
  IPanelItemAction,
  IPanelItemTrigger,
} from "../../types";
import { math } from "polished";

export const navDesktopStyles = css`
  ${({
    theme: {
      borderWidthBase,
      colorBackgroundPrimaryNav,
      colorBorderBase,
      colorText01,
      dropShadowPrimaryNavHor,
      spacingLG,
    },
  }) => css`
    li,
    a,
    button {
      color: ${colorText01};
    }
    background: ${colorBackgroundPrimaryNav};
    box-shadow: ${dropShadowPrimaryNavHor};
    padding-left: ${spacingLG};
    border-bottom: ${borderWidthBase} ${colorBorderBase};
  `}
`;

const levelZeroPanelStyles = css`
  flex-direction: row;
`;

const levelOnePanelStyles = css`
  left: 0;
  top: 100%;
  position: absolute;
`;

const aboveLevelZeroPanelStyles = css`
  ${({
    theme: {
      borderWidthBase,
      colorBackgroundPrimaryNav,
      colorBorderBase,
      dropShadowDropdown,
    },
  }) => css`
    width: 230px;
    border: ${borderWidthBase} ${colorBorderBase};
    background-color: ${colorBackgroundPrimaryNav};
    box-shadow: ${dropShadowDropdown};
    li:last-child {
      & > {
        a,
        button {
          &:before {
            background: transparent;
          }
        }
      }
    }
  `}
`;

const aboveLevelOnePanelStyles = css`
  position: absolute;
  top: -1px;
  left: 100%;
`;

export const panelDesktopStyles = css<IPanel>`
  ${({ level, theme: { colorTextBrandPrimary, fontSizeBase } }) => css`
    a,
    button {
      line-height: 1.5rem;
      font-size: ${fontSizeBase};
      &:focus {
        outline: none;
      }
    }
    color: ${colorTextBrandPrimary};
    ${level === 0 && levelZeroPanelStyles}
    ${level === 1 && levelOnePanelStyles}
    ${level > 0 && aboveLevelZeroPanelStyles}
    ${level > 1 && aboveLevelOnePanelStyles}
  `}
`;

const panelItemStyles = css<IPanelItem>`
  ${({ level }) => css`
    ${level === 0 && levelZeroPanelItemStyles}
    ${level > 0 && aboveLevelZeroPanelItemStyles}
  `}
`;

const levelZeroPanelItemFocusHoverStyles = css`
  ${({
    theme: {
      borderRadiusFormElement,
      colorBackground,
      colorBackgroundBrand,
      colorTextBrandPrimary,
    },
  }) => css`
    border-radius: ${borderRadiusFormElement};
    box-shadow: 0 0 0 2px ${colorBackground}, 0 0 0 5px ${colorBackgroundBrand};
    background-color: ${colorBackgroundBrand};
    color: ${colorTextBrandPrimary};
  `}
`;

const levelZeroPanelItemStyles = css<IPanelItem>`
  ${({ theme: { spacingSM, spacingXS, spacingXXS } }) => css`
    padding: ${spacingSM} ${spacingXXS};
    & > a,
    & > button {
      padding: ${spacingXS};
      &:hover,
      &:focus {
        ${levelZeroPanelItemFocusHoverStyles}
      }
    }
    *:first-child {
      align-items: center;
    }
  `}
`;

const levelZeroPanelItemActionActiveStyles = css`
  ${({ theme: { colorBackgroundBrand } }) => css`
    & > a,
    & > button {
      &:after {
        display: block;
        content: "";
        background: ${colorBackgroundBrand};
        width: 100%;
        height: 4px;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 1;
      }
    }
  `}
`;

const levelZeroPanelItemActionStyles = css<IPanelItem>`
  ${({ active }) => css`
    position: relative;
    ${active && levelZeroPanelItemActionActiveStyles}
  `}
`;

export const panelItemTriggerDesktopStyles = css<IPanelItemTrigger>`
  ${panelItemStyles}
  ${({ level }) => css`
    position: relative;
    ${level === 0 && levelZeroPanelItemStyles}
  `}
`;

const aboveLevelZeroPanelItemActiveStyles = css`
  ${({ theme: { colorBackgroundBrand, colorBackgroundSelected } }) => css`
    & > a {
      background-color: ${colorBackgroundSelected};
    }
    & > a,
    & > button {
      &:after {
        display: block;
        content: "";
        background-color: ${colorBackgroundBrand};
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
      colorBackgroundBrand,
      colorBorderBase,
      colorBorderFocusInverse,
      colorTextBrandPrimary,
      fontSizeBase,
      spacingSM,
      spacingXS,
    },
  }) => css`
    position: relative;
    a,
    button {
      position: relative;
      font-size: ${fontSizeBase};
      width: 100%;
      max-width: 100%;
      padding: ${spacingSM};
      /* border between items */
      &:before {
        content: "";
        height: 1px; // Value of @border-width-base without solid
        background-color: ${colorBorderBase};
        position: absolute;
        bottom: 0;
        right: 0;
        left: ${spacingXS};
      }
      &:hover,
      &:focus {
        color: ${colorTextBrandPrimary};
        background-color: ${colorBackgroundBrand};
        &:after {
          background: transparent;
        }
        &:before {
          width: auto;
          height: auto;
          background: none;
          border: 2px solid ${colorBorderFocusInverse};
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

const aboveLevelZeroPanelItemActionStyles = css<IPanelItemAction>``;

export const panelItemActionDesktopStyles = css<IPanelItemAction>`
  ${({ level }) => css`
    ${panelItemStyles}
    ${level == 0 && levelZeroPanelItemActionStyles};
  `}
`;
