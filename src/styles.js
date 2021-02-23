import styled, { css } from "styled-components";

export const CheckboxContainer = styled.div`
  width: 16px;
  white-space: nowrap;
  height: 16px;

  ${({ disabled }) =>
    disabled &&
    css`
      border: 5px solid #ffffff !important;
      background-color: transparent !important;
    `}


  ${({ checked }) =>
    checked
      ? css`
          border: none;
        `
      : css`
          border: 1px solid #6d3535;
          &:hover {
            border: 2px solid #6d3535;
          }
        `}

      
  border-radius: 2px;
  background: transparent;

  /* background-color: ${(props) => (props.checked ? "#97C160" : "#E5E5E5")}; */

  display: flex;
  align-items: center;
`;

export const CheckBoxWraper = styled.div``;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  overflow: hidden;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;

  /* ${({ disabled, checked }) =>
    disabled &&
    checked &&
    css`
      background-color: red;
    `} */

  /* &:disabled {
    background-color: #e5e5ea;
    &:checked {
      background-color: blue;
      width: 16px;
      height: 16px;
      border-radius: 2px;
    }
  } */

  &:checked {
    background-color: blue;
    width: 16px;
    height: 16px;
    border-radius: 2px;
    &::hover {
      background: #196c96;
    }
  }

  &:focus-visible{
    border: 1px solid ;
    border-color: #196C96!important;   
    outline: none;
  }
`;
export const Text = styled.label``;
export const StyledCheckbox = styled.label`
  /* border: 3px solid #6d3535; */
`;
