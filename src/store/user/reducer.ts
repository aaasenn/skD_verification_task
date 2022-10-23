import { FieldValues } from "react-hook-form/dist/types";
import { REGISTER_USER } from "./constants";
import { ActionType } from "./types";

const InitialState: FieldValues = {
  email: "",
  phone: "",
  name: "",
  linkToProfile: "",
  selectCity: "",
  organisationName: "",
  recipient: "",
  whereAboutUs: "",
};

export const userReducer = (
  initState = InitialState,
  action: ActionType<FieldValues>
) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...initState,
        ...action.payload,
      };
    default:
      return initState;
  }
};
