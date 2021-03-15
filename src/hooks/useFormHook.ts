import { useState } from 'react'

export type ITarget = {
  name?: string | any
  _id?: string
  id?: string
  value?: string
}

export type IUseForm = [
  any,
  (value: any) => void,
  (value?: any) => void,
  (value: any) => void,
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
export const useForm = (_initialState: any): IUseForm => {
  const [initialState, setInitialState] = useState(_initialState)
  const [values, setValues] = useState(_initialState)

  const reset = (newFormState = initialState) => {
    setValues(newFormState)
  }

  const handleInputChange = ({ target }: { target: ITarget }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    })
  }

  return [values, handleInputChange, reset, setInitialState]
}