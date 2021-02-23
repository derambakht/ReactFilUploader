import React from 'react';

export const EmailInput = React.forwardRef((props, ref) => (
    <input ref={ref} {...props} type="email" className="AppEmailInput" />
));