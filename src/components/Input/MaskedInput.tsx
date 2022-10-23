import React from "react";
import { Control, Controller } from "react-hook-form";
import ReactInputMask from "react-input-mask";
import { InputContainer } from "./Input.styled";

interface IProps {
  name: string;
  control: Control;
  label: string;
  placeholder: string;
}

export const MaskedInput = ({ name, control, label, placeholder }: IProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <ReactInputMask
          mask={"+7(999) 999-99-99"}
          maskChar={null}
          value={value}
          onChange={onChange}
        >
          {/* @ts-ignore */}
          {(props) => {
            return (
              <InputContainer errors={error}>
                <input {...props} type="tel" placeholder={placeholder} />
                <div className="input-label">{label}</div>
                {error && <div className="error-message">{error?.message}</div>}
              </InputContainer>
            );
          }}
        </ReactInputMask>
      )}
    />
  );
};
