import React, {ChangeEvent, FC, KeyboardEvent, useState} from "react";
import styled, { css } from "styled-components";
import { Checkbox } from "@component";
import { Z_INDEX } from "@constant";

interface DropdownMultiItemProps {
  selected: boolean;
  checked: boolean;
  onChange: () => void;
  onFocus: () => void;
  id: string;
  label: string;
  className?: string;
  onKeyDownItem: (event: KeyboardEvent<HTMLInputElement>) => void;
  checkboxRef?: React.RefObject<HTMLInputElement>;
}

const listItemSelectedStyles = css`
  background-color: ${props => props.theme.colorBackgroundSelected};

  .uitk-checkbox-label {
    font-weight: ${props => props.theme.fontWeightStrong};
  }
`;

const itemActiveStyles = css`
  background-color: ${props => props.theme.colorBackgroundBrand};
  outline: none;

  &:before {
    border-radius: ${props => props.theme.borderRadiusFormElement};
    border: 2px solid ${props => props.theme.colorBorderFocusInverse};
    content: "";
    position: absolute;
    top: 3px;
    bottom: 3px;
    left: 3px;
    right: 3px;
  }

  .uitk-checkbox-label {
    color: ${props => props.theme.colorTextBrandPrimary};
  }
`;

const DropdownMultiCheckbox = styled(Checkbox)`
  margin-top: 0;
  width: 100%;
  position: relative;
  z-index: ${Z_INDEX.ONE};

  .uitk-checkbox-label {
    width: 100%;
    margin: ${props => props.theme.spacingXS} ${props => props.theme.spacingSM};
  }
`;

const HighlightContainer = styled.div<{ selected: boolean; focused: boolean; hovered: boolean }>`
  ${({ focused, hovered, selected }) => css`
    width: 100%;
    padding-right: ${props => props.theme.spacingBase};
    ${selected && listItemSelectedStyles};
    ${(focused || hovered) && itemActiveStyles};
  `}
`;

const HoverArea = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const _DropdownMultiItem: FC<DropdownMultiItemProps> = ({
  checkboxRef,
  checked,
  className,
  id,
  label,
  onChange,
  onKeyDownItem,
  selected,
  ...unhandledProps
}) => {
  const [focused, setFocusState] = useState(false);
  const [hovered, setHoverState] = useState(false);

  const onItemBlur = (event: ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setFocusState(false);
  };

  const onMouseEnter = () => {
    setHoverState(true);
  };

  const onMouseLeave = () => {
    setHoverState(false);
  };

  return (
    <div className={className} {...unhandledProps}>
      <HighlightContainer selected={selected} focused={focused} hovered={hovered}>
        <DropdownMultiCheckbox
          checked={checked}
          onChange={onChange}
          id={id}
          onFocus={() => setFocusState(true)}
          onBlur={onItemBlur}
          onKeyDown={onKeyDownItem}
          checkboxRef={checkboxRef}
        >
          {label}
          <HoverArea onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>
        </DropdownMultiCheckbox>
      </HighlightContainer>
    </div>
  );
};

export const DropdownMultiItem = styled(_DropdownMultiItem)`
  ${({ theme: { spacingBase } }) => css`
    right: 0;
    display: flex;
    align-items: center;
    margin-left: ${spacingBase};
    position: relative;
    outline: none;

    .uitk-checkbox:active + .uitk-checkbox-label:before,
    .uitk-checkbox:focus + .uitk-checkbox-label:before,
    .uitk-checkbox-label:hover:before {
      box-shadow: none;
    }
  `}
`;
