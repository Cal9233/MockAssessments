import './Card.css'

// 3. Card Component
// Accept title, content, and an optional footer.
// Support a clickable variant (for navigation).
// Be responsive (grid-friendly).

export const CardHeader = ({
    children,
    className = '',
    ...rest
  }) => {
    const classes = ['card-header', className].filter(Boolean).join(' ');
    
    return (
      <div className={classes} {...rest}>
        {children}
      </div>
    );
  };

export const CardTitle = ({
    children,
    className = '',
    ...rest
  }) => {
    const classes = ['card-title', className].filter(Boolean).join(' ');
    
    return (
      <h3 className={classes} {...rest}>
        {children}
      </h3>
    );
};

export const CardContent = ({
    children,
    className = '',
    ...rest
  }) => {
    const classes = ['card-content', className].filter(Boolean).join(' ');
    
    return (
      <div className={classes} {...rest}>
        {children}
      </div>
    );
};

export const CardFooter = ({
    children,
    className = '',
    ...rest
  }) => {
    const classes = ['card-footer', className].filter(Boolean).join(' ');
    
    return (
      <div className={classes} {...rest}>
        {children}
      </div>
    );
};

export const Card = ({
    variant = 'elevated',
    clickable = false,
    onClick,
    hoverable = false,
    children,
    className = '',
    ...rest
  }, ref) => {
    
    // Construct class names based on props
    const cardClasses = [
      'card',
      `card-${variant}`,
      clickable ? 'card-clickable' : '',
      hoverable ? 'card-hoverable' : '',
      className
    ].filter(Boolean).join(' ');
    
    // Determine the HTML tag
    const Component = clickable ? 'button' : 'div';
    
    return (
      <Component
        ref={ref}
        className={cardClasses}
        onClick={clickable ? onClick : undefined}
        type={clickable ? 'button' : undefined}
        {...rest}
      >
        {children}
      </Component>
    );
  };