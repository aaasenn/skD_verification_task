export enum FormWelcomeEnum {
  email = "email",
  phone = "phone",
  name = "name",
  linkToProfile = "linkToProfile",
  selectCity = "selectCity",
  organisationName = "organisationName",
  recipient = "recipient",
  whereAboutUs = "whereAboutUs",
};

export interface IFieldsFormWelcome {
  email: string,
  phone: string,
  name: string,
  linkToProfile?: string,
  selectCity: string,
  organisationName?: string,
  recipient?: string,
  whereAboutUs?: string,
};

export const defaultFieldsValues: IFieldsFormWelcome = {
  name: '',
  email: '',
  phone: '',
  recipient: '',
  selectCity: '',
  whereAboutUs: '',
  organisationName: '',
  linkToProfile: '',
};
