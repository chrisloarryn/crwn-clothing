import React from 'react'

import './custom-button.styles.scss'

interface CustomButtonProps {
  children: React.ReactNode
  type: 'button' | 'submit' | 'reset' | undefined
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  type,
  ...rest
}) => {
  return (
    <button
      className="custom-button"
      type={type}
      {...rest}
    >
      {children}
    </button>
  )
}

export default CustomButton
