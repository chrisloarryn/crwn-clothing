import * as React from 'react'
import { useForm } from 'hooks/useFormHook'

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
        <input
          name="email"
          required
          onChange={setValues}
          type="email"
          value={values.email as string}
        />
        <label>Email</label>
        <input
          name="password"
          type="password"
          onChange={setValues}
          value={values.password as string}
          required />
        <label>Password</label>
        <input type="submit" value="Submit Form"/>
      </form>
    </div>
  )
}

export default SignIn
