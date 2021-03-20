import React from 'react'

import './custom-button.styles.scss'

interface CustomButtonProps {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: () => Promise<unknown>
  isGoogleSignIn?: boolean
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  type,
  onClick,
  isGoogleSignIn,
  ...rest
}) => {
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      type={type}
      onClick={onClick}
      {...rest}>
      {children}
    </button>
  )
}

export default CustomButton
