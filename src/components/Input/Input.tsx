import React from "react";
import { InputContainer } from "./Input.styled";
import { UseFormRegister } from "react-hook-form/dist/types";
import { FieldValues } from "react-hook-form/dist/types";

export interface IProps {
  type?: string;
  label: string;
  errors?: any;
  register: UseFormRegister<FieldValues>;
  name: string;
  placeholder: string;
}

const Input: React.FC<IProps> = ({
  type,
  label,
  errors,
  register,
  name,
  placeholder,
}) => {
  return (
    <InputContainer errors={errors}>
      <input type={type} {...register(name)} placeholder={placeholder} />
      <div className="input-label">{label}</div>
      {errors && <div className="error-message">{errors}</div>}
    </InputContainer>
  );
};

export default Input;
