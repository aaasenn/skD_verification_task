import styled from "styled-components";

export interface IProps {
  disabled?: boolean;
}

export const Button = styled.button<IProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 18px 25px;
  border: none;
  cursor: pointer;

  width: 100%;
  height: 50px;

  background: ${({ theme, disabled }) =>
    disabled ? theme.colors.disabled.main : theme.colors.primary.main};
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.disabled.font : theme.colors.primary.font};
  border-radius: 8px;
  align-self: stretch;
  flex-grow: 1;
`;
