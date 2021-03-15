import React, { useState } from 'react'

export type ITarget = {
  name: string
  value: string | number | boolean
}

export type IUseForm = [
  Record<string, unknown>,
  ({ target }: React.BaseSyntheticEvent) => void,
  (newFormState?: Record<string, unknown>) => void,
]


/**
 * useForm Custom Hook
 *
 * receives an object of initial values
 *
 * returns an array with the values, the values handler and the reset to initial values function handler
 *
 * @param {*} initialState {Object}
 * @return {*} [values, setValues, resetValues] {IUseForm}
 *
 */
export const useForm = (initialState: Record<string, unknown>): IUseForm => {
  const [values, setValues] = useState(initialState)

  const reset = (newFormState = initialState) => {
    setValues(newFormState)
  }

  const handleInputChange = ({ target }: React.BaseSyntheticEvent) => {
    console.log(target)
    setValues({
      ...values,
      [target.name as string]: target.value,
    })
  }

  return [values, handleInputChange, reset]
}