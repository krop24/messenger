import { ErrorType } from 'shared/types'

import { isValidString } from './string'

export const cloneObject = (obj: object) =>
  typeof obj === 'object' ? JSON.parse(JSON.stringify(obj)) : obj

export const validateObjectFields = (obj: object) => {
  const fields = Object.entries(obj)
  const errors = []

  for (const field of fields) {
    const fieldType = typeof field[1]

    if (fieldType === 'boolean') {
      if (field[1] === false) {
        errors.push(true)
        break
      }
    }

    if (['string', 'number'].includes(fieldType)) {
      if (!isValidString(field[1])) {
        errors.push(true)
        break
      }
    }

    if (fieldType !== 'object' && !field[1]) {
      errors.push(true)
    }
  }

  return errors.every(e => e === false) || !errors.length
}

export const trimObjectFields = (obj: object) => {
  const newObj = cloneObject(obj)

  Object.keys(newObj).forEach(key => {
    if (typeof newObj[key] === 'string') {
      newObj[key] = newObj[key].trim()
    }
  })

  return newObj
}

export const formatError = (e: unknown) => {
  const err = e as ErrorType
  return {
    success: false,
    message: err.message,
    status: err.response?.status,
  }
}
