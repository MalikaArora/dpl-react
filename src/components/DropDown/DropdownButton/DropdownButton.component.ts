import styled, { css } from "styled-components";
import { disabledStyles, errorStyles } from "../styles/commonStyles";

export const DropdownButton = styled.button<{
  disabled: boolean;
  error: boolean;
}>`
  ${({
    disabled,
    error,
    theme: {
      borderRadiusFormElement,
      boxShadowWidthFormsBase,
      boxShadowWidthFormsFocus,
      colorBackgroundFormElement,
      colorBorderBaseAccessible,
      colorBorderFormElementActive,
      colorText01,
      durationFast,
      fontFamilyBase,
      fontSizeBase,
      fontWeightBase,
      spacingXXS,
    },
  }) => css`
    appearance: none;
    border: none;
    box-shadow: ${boxShadowWidthFormsBase} ${colorBorderBaseAccessible};
    border-radius: ${borderRadiusFormElement};
    background-color: ${colorBackgroundFormElement};
    color: ${colorText01};
    cursor: pointer;
    font: ${fontSizeBase} ${fontFamilyBase};
    font-weight: ${fontWeightBase};
    padding: ${props => props.theme.spacingXS} ${props => props.theme.spacingSM};
    width: 100%;
    outline: none;
    transition: ${durationFast};
    transition-property: border, box-shadow;
    margin-top: ${spacingXXS};
    display: block;
    text-align: left;
    overflow: auto;
    line-height: 1.5;

    &:hover {
      box-shadow: ${boxShadowWidthFormsBase} ${colorBorderFormElementActive};
    }

    &:active,
    &:focus {
      box-shadow: ${boxShadowWidthFormsFocus} ${colorBorderFormElementActive};
      background-color: ${colorBackgroundFormElement};
    }

    svg {
      margin-left: auto;
    }

    /**
    * Error styles
    */
    ${error && errorStyles}

    /**
    * Disabled styles
    */
    ${disabled && disabledStyles}
  `}
`;
