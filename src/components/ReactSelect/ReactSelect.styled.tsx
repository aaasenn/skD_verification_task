import styled from "styled-components";
import Select, { components } from "react-select";
import StateManagedSelect from "react-select";
import { FieldError } from "react-hook-form/dist/types";
import { theme } from "../../styles/theme";
import { ArrowDownSvg } from "../../assets/svg";

const { colors } = theme;

const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <ArrowDownSvg />
    </components.DropdownIndicator>
  );
};

export interface IReactSelect extends StateManagedSelect {
  errors?: FieldError;
}

export const ReactSelect = styled(
  ({ children, components, classNamePrefix, ...other }) => (
    <Select
      classNamePrefix="react-select"
      components={{ DropdownIndicator }}
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary: `${colors.primary.main}`,
          danger: `${colors.danger.main}`,
          neutral20: `${colors.disabled.main}`,
        },
      })}
      {...other}
    >
      {children}
    </Select>
  )
)<IReactSelect>`
  && {
    & .react-select {
      &__control {
        border-radius: 8px;
        padding: 18px 15px;
        border-width: 2px;
        cursor: pointer;
        border-color: ${({ errors, theme }) => {
          if (errors) return theme.colors.disabled.main;
        }};
      }

      &__input-container {
        margin: 0;
        padding: 0;
      }

      &__value-container {
        padding: 0;
        margin: 0;
      }

      &__dropdown-indicator {
        padding: 0px;
      }

      &__indicator-separator {
        display: none;
      }

      &__placeholder {
        color: ${({ theme }) => theme.colors.global.fontBlack};
      }

      &__menu {
        border: 2px solid ${({ theme }) => theme.colors.disabled.main};
        box-shadow: 0px 5px 20px rgba(53, 50, 56, 0.14);
        border-radius: 8px;
        color: ${({ theme }) => theme.colors.global.fontBlack} !important;
      }

      &__menu-list {
        padding: 0;
      }

      &__option {
        padding: 7px 17px;
        color: ${({ theme }) => theme.colors.global.fontBlack} !important;
        border-bottom: 2px solid ${({ theme }) => theme.colors.disabled.main};
        cursor: pointer;

        &--is-focused {
          background-color: #fafafa !important;
        }
      }
    }
  }
`;

export const Wrapper = styled.div`
  position: relative;

  & .select-title {
    display: none;
  }

  &:focus-within {
    & .select-title {
      display: inline;
      position: absolute;
      font-weight: 400;
      font-size: 12px;
      line-height: 100%;
      letter-spacing: 0.25px;
      top: -6px;
      left: 10px;
      background-color: ${({ theme }) => theme.colors.global.white};
      padding: 0 5px;
    }
  }
`;
