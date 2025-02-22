import './Button.css';

// . Button Component
// Should support primary, secondary, and outline variants.
// Allow users to pass icons as props (left/right).
// Support different sizes (small, medium, large).
// Be fully accessible (aria-label, focus styles).

export const Button = ({
    variant = "primary",
    size = "medium",
    icons,
    type = "button",
    onClick,
    className="",
    disabled,
    children,
    ...props
}) => {
    return (
        <button 
            className={`button ${className}`} 
            variant={variant}
            onClick={onClick}
            type={type}
            disabled={disabled}
            {...props}    
        >{children}</button>
    );
};

Button.defaultProps = {
    disabled: false,
    type: "button"
}