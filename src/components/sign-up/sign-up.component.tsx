import React from 'react'
import { FirebaseUser } from 'types/user-types'

import CustomButton from 'components/custom-button/custom-button.component'

import {
  auth,
  createUserProfileDocument,
} from './../../firebase/firebase.utils'
import { useForm } from './../../hooks/useFormHook'
import FormInput from './../form-input/form-input.component'

import './sign-up.styles.scss'

type InitialStateType = {
  confirmPassword: string
  displayName: string
  email: string
  password: string
}

const initialState: InitialStateType = {
  confirmPassword: '',
  displayName: '',
  email: '',
  password: '',
}

type ExtraParameters = {
  displayName: string
}

const SignUp: React.FC = () => {
  const [formValues, setFormValues, resetFormValues] = useForm(initialState)
  const handleSubmit = async (event: React.BaseSyntheticEvent) => {
    event.preventDefault()
    const { confirmPassword, displayName, email, password } = formValues
    if (password !== confirmPassword) {
      alert('Passwords don\'t match!')
      return
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email as string,
        password as string,
      )
      createUserProfileDocument(
        user as FirebaseUser,
        {
          displayName,
        } as ExtraParameters,
      )

      resetFormValues()
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign Up With Your Email and Password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          handleChange={setFormValues}
          label="Display Name"
          name="displayName"
          required
          type="text"
          value={formValues.displayName as string}
        />
        <FormInput
          handleChange={setFormValues}
          label="Email"
          name="email"
          required
          type="email"
          value={formValues.email as string}
        />
        <FormInput
          handleChange={setFormValues}
          label="Password"
          name="password"
          required
          type="password"
          value={formValues.password as string}
        />
        <FormInput
          handleChange={setFormValues}
          label="Confirm Password"
          name="confirmPassword"
          required
          type="password"
          value={formValues.confirmPassword as string}
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  )
}

export default SignUp
