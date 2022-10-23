export const exctractNumbersFromPhone = (phoneNumber: string): string => {
  return parseInt(phoneNumber.replace(/[^\d]/g, '')).toString(10)
}