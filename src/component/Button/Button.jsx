import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
    <div className="button main-button">
        <a href="/#">{props.children}</a>
    </div>
  )
}

const SecondaryButton = (props) => {
    return (
      <div className="button secondary-button">
          <a href="/#">{props.children}</a>
      </div>
    )
  }

export default Button
export {SecondaryButton}