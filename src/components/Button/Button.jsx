import './Button.css';

// . Button Component
// Should support primary, secondary, and outline variants.
// Allow users to pass icons as props (left/right).
// Support different sizes (small, medium, large).
// Be fully accessible (aria-label, focus styles).

export const Button = ({
    variant = 'primary',
    size = 'medium',
    fullWidth = false,
    disabled = false,
    isLoading = false,
    startIcon,
    endIcon,
    type = 'button',
    onClick,
    className = '',
    children,
    ...rest
}) => {
    
    // Construct class names based on props
    const buttonClasses = [
        'btn',
        `btn-${variant}`,
        `btn-${size}`,
        fullWidth ? 'btn-full-width' : '',
        isLoading ? 'btn-loading' : '',
        className
    ].filter(Boolean).join(' ');
    
    return (
        <button
        type={type}
        className={buttonClasses}
        onClick={onClick}
        disabled={disabled || isLoading}
        {...rest}
        >
        {isLoading && <span className="btn-spinner" aria-hidden="true"></span>}
        
        {!isLoading && startIcon && (
            <span className="btn-start-icon">{startIcon}</span>
        )}
        
        <span className="btn-text">{children}</span>
        
        {!isLoading && endIcon && (
            <span className="btn-end-icon">{endIcon}</span>
        )}
        </button>
    );
};

Button.defaultProps = {
    disabled: false,
    type: "button"
}