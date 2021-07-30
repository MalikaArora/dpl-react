import { css } from "styled-components";

export const errorStyles = css`
  ${({
    theme: {
      boxShadowWidthFormsBase,
      boxShadowWidthFormsFocus,
      colorBackgroundError02,
      colorBackgroundFormElement,
      colorBorderError,
      colorBorderFormElementActive,
    },
  }) => css`
    background: ${colorBackgroundError02};
    box-shadow: ${boxShadowWidthFormsBase} ${colorBorderError};

    &:hover {
      box-shadow: ${boxShadowWidthFormsBase} ${colorBorderError};
    }
    &:active,
    &:focus {
      background-color: ${colorBackgroundFormElement};
      box-shadow: ${boxShadowWidthFormsFocus} ${colorBorderFormElementActive};
    }
  `}
`;

export const disabledStyles = css`
  ${({
    theme: {
      boxShadowWidthFormsBase,
      colorBackgroundDisabled,
      colorBorderDisabled,
      colorTextDisabled,
    },
  }) => css`
    color: ${colorTextDisabled};
    cursor: default;
    background-color: ${colorBackgroundDisabled};
    box-shadow: ${boxShadowWidthFormsBase} ${colorBorderDisabled};

    svg {
      fill: ${props => props.theme.colorTextDisabled};
    }

    &:hover,
    &:active,
    &:focus {
      color: ${colorTextDisabled};
      cursor: default;
      background-color: ${colorBackgroundDisabled};
      box-shadow: ${boxShadowWidthFormsBase} ${colorBorderDisabled};
    }
  `}
`;
