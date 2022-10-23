import React from "react";
import { Controller } from "react-hook-form";
import { Control } from "react-hook-form/dist/types";
import { Wrapper, ReactSelect } from "./ReactSelect.styled";
import { ISelectOptions } from "../../utils/select/selectOptions";

interface IProps {
  label: string;
  options: ISelectOptions[];
  name: string;
  placeholder: string;
  control: Control;
}

export const CustomSelect = ({
  label,
  name,
  control,
  options,
  ...others
}: IProps) => {
  const getValue = (value: string) => {
    return value ? options.find((option) => option.value === value) : "";
  };

  return (
    <Wrapper>
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <React.Fragment key={name}>
            <ReactSelect
              errors={error}
              value={getValue(value)}
              options={options}
              onChange={(newValue: ISelectOptions) => onChange(newValue?.value)}
              {...others}
            />
            {error && <div className="select-errors">{error.message}</div>}
          </React.Fragment>
        )}
      />
      <span className="select-title">{label}</span>
    </Wrapper>
  );
};
