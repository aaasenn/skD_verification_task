import { FieldValues } from 'react-hook-form/dist/types';
import { REGISTER_USER } from "./constants";

export const registerUser = (payload: FieldValues) => ({
  type: REGISTER_USER,
  payload: payload,
})