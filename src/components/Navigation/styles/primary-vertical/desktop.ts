import { css } from "styled-components";
import {
  IPanel,
  IPanelItem,
  IPanelItemAction,
  IPanelItemTrigger,
} from "../../types";
import { math, rgba } from "polished";
import { Z_INDEX } from "@constant";

export const navDesktopStyles = css`
  ${({
    theme: {
      colorBackgroundPrimaryNav,
      colorBorderBaseAccessible,
      colorTextBrand,
      spacingLG,
    },
  }) => css`
    width: 17.5rem;
    height: 100%;
    overflow: auto;
    /* IE 11 fix for visible scroll when when content is not requiring scroll */
    -ms-overflow-style: -ms-autohiding-scrollbar;
    padding-top: ${spacingLG};
    background: ${colorBackgroundPrimaryNav};
    z-index: ${Z_INDEX.ONE};
    box-shadow: 1px 0 4px 0 ${rgba(colorTextBrand, 0.15)},
      2px 0 8px 0 ${rgba(colorBorderBaseAccessible, 0.2)};
  `}
`;

const hoverAndActiveStyles = css`
  ${({
    theme: {
      colorBackgroundBrand,
      colorBorderFocusInverse,
      colorTextBrandPrimary,
    },
  }) => css`
    &:hover,
    &:focus {
      color: ${colorTextBrandPrimary};
      background-color: ${colorBackgroundBrand};
      &:before {
        background: transparent;
      }
      &:after {
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
  `}
`;

const levelZeroPanelStyles = css`
  ${({ theme: { colorBorderBase, spacingXS } }) => css`
    &:before {
      content: "";
      height: 1px;
      background-color: ${colorBorderBase};
      position: absolute;
      bottom: 0;
      right: 0;
      left: ${spacingXS};
    }
  `}
`;

export const panelDesktopStyles = css<IPanel>`
  ${({ level, theme: { colorText01, fontSizeBase } }) => css`
    ${level === 0 && levelZeroPanelStyles};
    position: relative;
    a,
    button {
      width: 100%;
      line-height: 1.5rem;
      font-size: ${fontSizeBase};
      &:focus {
        outline: none;
      }
      color: ${colorText01};
    }
  `}
`;

const levelZeroPanelItemStyles = css`
  ${({ theme: { colorBorderBase, spacingXS } }) => css`
    position: relative;
    & > a,
    & > button {
      position: relative;
      &:before {
        content: "";
        height: 1px;
        background-color: ${colorBorderBase};
        position: absolute;
        top: 0;
        right: 0;
        left: ${spacingXS};
      }
    }
  `}
`;

const getPanelItemPadding = (
  spacingVal: string,
  level: number,
  parentIconOffset: number
) => {
  const basePadding = `${spacingVal} + (${spacingVal} * ${parentIconOffset})`;
  return `${basePadding} + (${spacingVal} * ${level})`;
};

const panelItemStyles = css<IPanelItem>`
  ${({ level, parentIconOffset, theme: { spacingSM } }) => css`
    ${level === 0 && levelZeroPanelItemStyles}
    & > a, & > button {
      position: relative;
      ${hoverAndActiveStyles}
      padding: ${spacingSM};
      padding-left: ${math(
        getPanelItemPadding(spacingSM, level, parentIconOffset)
      )};
    }
  `}
`;

export const panelItemTriggerDesktopStyles = css<IPanelItemTrigger>`
  ${panelItemStyles}
  flex-direction: column;
`;

const panelItemActionActiveStyles = css`
  ${({
    theme: { colorBackgroundBrand, colorBackgroundSelected, fontWeightStrong },
  }) => css`
    background-color: ${colorBackgroundSelected};
    font-weight: ${fontWeightStrong};
    & > a {
      &:before {
        display: block;
        content: "";
        background: ${colorBackgroundBrand};
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

export const panelItemActionDesktopStyles = css<IPanelItemAction>`
  ${({ active }) => css`
    ${panelItemStyles}
    ${active && panelItemActionActiveStyles}
  `}
`;
