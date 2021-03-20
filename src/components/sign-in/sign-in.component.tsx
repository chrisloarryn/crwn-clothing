import * as React from 'react'
import { useForm } from 'hooks/useFormHook'

import CustomButton from 'components/custom-button/custom-button.component'

import { signIgnWithGoogle } from '../../firebase/firebase.utils'

import FormInput from './../form-input/form-input.component'

import './sign-in.styles.scss'

const SignIn: React.FC = () => {
  const [values, setValues] = useForm({
    email: '',
    password: '',
  })
  const handleSubmit = (event: React.BaseSyntheticEvent) => {
    event.preventDefault()
    console.log(event)
    console.log(values)
  }
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          label="email"
          required
          handleChange={setValues}
          type="email"
          value={values.email as string}
        />
        <FormInput
          name="password"
          label="password"
          type="password"
          handleChange={setValues}
          value={values.password as string}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton onClick={signIgnWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignIn
