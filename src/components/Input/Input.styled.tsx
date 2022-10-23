import styled from "styled-components";

interface IProps {
  color?: string;
  errors?: any;
}

export const InputContainer = styled.div<IProps>`
  position: relative;
  color: ${({ theme }) => theme.colors.disabled.font};
  border-color: ${({ theme, errors }) =>
    errors ? theme.colors.danger.main : theme.colors.disabled.main};

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }

  &:focus-within {
    border-color: ${({ theme, errors }) =>
      errors ? theme.colors.danger.main : theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.primary.fontColor};

    .input-label {
      color: ${({ theme, errors }) =>
        errors ? theme.colors.danger.main : theme.colors.primary.main};
    }
  }

  input {
    width: 100%;
    outline: none;
    padding: 18px 15px;
    border: 2px solid;
    border-color: inherit;
    border-radius: 8px;
    color: black;

    &:-webkit-autofill {
      transition: background-color 600000s 0s, color 600000s 0s;
    }

    &:-webkit-autofill:focus {
      transition: background-color 600000s 0s, color 600000s 0s;
    }
  }

  input[data-autocompleted] {
    background-color: transparent !important;
  }

  & .input-label {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 12px;
    transform: translate(10px, -6.8px);
    background-color: ${({ theme }) => theme.colors.global.white};
    padding: 0 5px;
  }

  & .error-message {
    color: ${({ theme }) => theme.colors.danger.main};
    line-height: 12px;
    font-size: 12px;
    padding-left: 15px;
    margin-top: 8px;
  }
`;
