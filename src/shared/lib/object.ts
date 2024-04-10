export const cloneObject = (obj: object) =>
  typeof obj === 'object' ? JSON.parse(JSON.stringify(obj)) : obj
