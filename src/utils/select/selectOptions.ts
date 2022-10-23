import cities from "./cities.json";
import sources from "./sources.json";

export interface ISelectOptions {
  value: string;
  label: string;
}

export const citiesOptions: ISelectOptions[] = cities.map((obj) => ({
  value: obj.id,
  label: obj.name,
}));

export const sourcesOptions: ISelectOptions[] = sources.map((elem, index) => ({
  value: `${index}`,
  label: elem,
}));
