import React from 'react'

import './form-input.styles.scss'

interface FormInputProps {
  handleChange: (event: React.BaseSyntheticEvent) => void
  label?: string
  name: string
  required?: boolean
  type?: string
  value?: string
}

const FormInput: React.FC<FormInputProps> = ({
  handleChange,
  label,
  name,
  required,
  value,
  type,
  ...rest
}) => {
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={handleChange}
        name={name}
        required={required}
        type={type}
        {...rest}
      />
      {label ? (
        <label
          className={`${
            (value as string).length ? 'shrink' : ''
          } form-input-label`}>
          {label}
        </label>
      ) : null}
    </div>
  )
}

export default FormInput
