import React from 'react'
import PropTypes from 'prop-types'

const FormInput = ({
  type,
  name,
  value,
  placeholder,
  label,
  className,
  children,
  onChange,
  error,
  ...props
}) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
        style={error && {border: 'solid 1px #f00'}}
      />
      {error && <p className="error">{error}</p>}
    </>
  )
}

FormInput.defaultProps = {
  type: 'text',
  className: ''
}

FormInput.propTypes = {
  type: PropTypes.oneOf(['text', 'number', 'password']),
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

export default FormInput
