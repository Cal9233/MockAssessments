import "./Input.css";

// 2. Input Component
// Should support text, number, and password input types.
// Support different states (error, disabled, success).
// Include an optional icon inside the input.
// Make it fully responsive.

export const Input = ({
    type = 'text',
    size = 'medium',
    variant = 'outlined',
    state,
    disabled = false,
    readOnly = false,
    value,
    onChange,
    onFocus,
    onBlur,
    id,
    name,
    label,
    placeholder,
    helperText,
    startIcon,
    endIcon,
    ref,
    required = false,
    fullWidth = false,
    className = '',
    ...rest
  }) => {
    
    // Generate unique ID if not provided
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    
    // Construct class names based on props
    const containerClasses = [
      'input-container',
      variant ? `input-${variant}` : '',
      size ? `input-${size}` : '',
      state ? `input-${state}` : '',
      fullWidth ? 'input-full-width' : '',
      disabled ? 'input-disabled' : '',
      className
    ].filter(Boolean).join(' ');
    
    return (
      <div className={containerClasses}>
        {label && (
          <label 
            htmlFor={inputId}
            className="input-label"
          >
            {label}
            {required && <span className="input-required">*</span>}
          </label>
        )}
        
        <div className="input-field-container">
          {startIcon && (
            <div className="input-icon input-start-icon">
              {startIcon}
            </div>
          )}
          
          <input
            ref={ref}
            id={inputId}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            className={`input-field ${startIcon ? 'has-start-icon' : ''} ${endIcon ? 'has-end-icon' : ''}`}
            aria-invalid={state === 'error'}
            aria-describedby={helperText ? `${inputId}-helper-text` : undefined}
            {...rest}
          />
          
          {endIcon && (
            <div className="input-icon input-end-icon">
              {endIcon}
            </div>
          )}
        </div>
        
        {helperText && (
          <div 
            id={`${inputId}-helper-text`}
            className={`input-helper-text ${state ? `input-helper-${state}` : ''}`}
          >
            {helperText}
          </div>
        )}
      </div>
    );
  };


Input.defaultProps = {
    type: "text"
}