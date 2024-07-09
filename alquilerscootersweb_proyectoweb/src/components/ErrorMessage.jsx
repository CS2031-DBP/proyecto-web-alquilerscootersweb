// ErrorMessage.js
import React from 'react';
import '../ErrorMessage.css'; // Crear un archivo CSS para los estilos

const ErrorMessage = ({ message }) => {
    return (
        <div className="error-message">
            <p>{message}</p>
        </div>
    );
}

export default ErrorMessage;
