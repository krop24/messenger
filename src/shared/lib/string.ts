export const isValidString = (field: Nullable<string> | Maybe<string>) =>
  field !== undefined &&
  field !== null &&
  field !== '' &&
  field?.toString()?.trim()?.length > 0

export const isValidEmail = (email: string) => {
  const regEx = /\S+@\S+\.\S+/
  return regEx.test(email)
}
