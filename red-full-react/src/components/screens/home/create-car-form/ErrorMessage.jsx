import React from 'react';

const ErrorMessage = ({errors}) => {
    if(!errors) return null;

    return (
        errors?.name?.message && (
            <p style={{ color: 'red' }}>
                {errors.name.message}
            </p>
        )
    );
};

export default ErrorMessage;