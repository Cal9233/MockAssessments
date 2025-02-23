import "./Input.css";

// 2. Input Component
// Should support text, number, and password input types.
// Support different states (error, disabled, success).
// Include an optional icon inside the input.
// Make it fully responsive.

export const Input = ({
    type = "text",
    state,
    icon,
    value,
    onChange,
    className="",
    children,
    props
}) => {
    return (
        <>
            <label></label>
            <input 
                type={type}
                onChange={onChange}
                value={value}
            />
        </>
    );
}

Input.defaultProps = {
    type: "text"
}