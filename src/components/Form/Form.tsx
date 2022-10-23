import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formWelcomeSchema } from "../../validation-schemas";
import { Button } from "../Button/Button.styled";
import Input from "../Input/Input";
import { FormProvider } from "./Form.styled";
import {
  citiesOptions,
  sourcesOptions,
} from "../../utils/select/selectOptions";
import { CustomSelect } from "../ReactSelect/ReactSelect";
import {
  FormWelcomeEnum,
  defaultFieldsValues,
} from "../../utils/form/fieldNames";
import { ArrowDownSvg, ArrowUpSvg } from "../../assets/svg";
import { Spinner } from "../Spinner/Spinner.styled";
import { registerUser } from "../../store/user/action";
import { selectUser } from "../../store/user/selectors";
import { MaskedInput } from "../Input/MaskedInput";

const Form: React.FC = () => {
  const [isAdditional, setAdditional] = React.useState<boolean>(false);
  const [isLoading, setLoading] = React.useState<boolean>(false);

  const dispatch = useDispatch();
  const userFields = useSelector(selectUser);

  const {
    formState: { errors, isValid, isSubmitSuccessful },
    register,
    reset,
    handleSubmit,
    control,
  } = useForm<FieldValues>({
    defaultValues: {
      ...defaultFieldsValues,
    },
    mode: "onChange",
    resolver: yupResolver(formWelcomeSchema),
  });

  const onValid = (values: FieldValues) => {
    setLoading(true);
    dispatch(registerUser(values));
  };

  const handleAdditional = () => {
    setAdditional(!isAdditional);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      if (userFields.name) {
        console.log(JSON.stringify(userFields));
      }
      reset();
    }, 2000);
  }, [isSubmitSuccessful]);

  return (
    <FormProvider onSubmit={handleSubmit(onValid)}>
      <div className="essentials-inputs">
        <Input
          type="text"
          label="Ваше имя *"
          placeholder="Иван"
          register={register}
          name={FormWelcomeEnum.name}
          errors={errors?.name?.message}
        />
        <MaskedInput
          control={control}
          name={FormWelcomeEnum.phone}
          label={"Номер телефона *"}
          placeholder={"+7 (000) 000-00-00"}
        />
        <Input
          type="email"
          label="E-mail *"
          register={register}
          name={FormWelcomeEnum.email}
          errors={errors.email?.message}
          placeholder={"example@skdesign.ru"}
        />
        <Input
          type="text"
          label="Ссылка на профиль *"
          register={register}
          name={FormWelcomeEnum.linkToProfile}
          errors={errors.linkToProfile?.message}
          placeholder={"example@skdesign.ru"}
        />
      </div>
      <div className="mid-inputs">
        <CustomSelect
          options={citiesOptions}
          control={control}
          name={FormWelcomeEnum.selectCity}
          label={"Выберите город *"}
          placeholder={"Выберите город *"}
        />
        <Input
          type="text"
          name={FormWelcomeEnum.organisationName}
          register={register}
          label={"Название организации/студии"}
          placeholder={"SK Design"}
        />
      </div>
      <div className="additional-handler" onClick={handleAdditional}>
        {isAdditional ? "Скрыть" : "Показать"} дополнительные поля
        {isAdditional ? <ArrowUpSvg /> : <ArrowDownSvg />}
      </div>
      {isAdditional && (
        <div className="additional-fields">
          <Input
            type="text"
            name={FormWelcomeEnum.recipient}
            register={register}
            label={"Получатель"}
            placeholder={"ФИО"}
          />
          <CustomSelect
            options={sourcesOptions}
            control={control}
            name={FormWelcomeEnum.whereAboutUs}
            label={"Откуда узнали про нас"}
            placeholder={"Откуда узнали пор нас"}
          />
        </div>
      )}
      <Button type="submit" disabled={!isValid}>
        {isLoading ? <Spinner color="primary" size={30} /> : "Отправить"}
      </Button>
    </FormProvider>
  );
};

export default Form;
