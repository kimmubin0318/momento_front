import React from 'react';

const LoginButton = ({ image, click }) => {
    return (
        <button onClick={click}>
            <img src={image} alt="Logo" />
        </button>
    );
};

export default LoginButton;
