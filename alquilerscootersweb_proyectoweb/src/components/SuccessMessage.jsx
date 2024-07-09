// SuccessMessage.js
import React from 'react';
import '../SuccessMessage.css'; // Crear un archivo CSS para los estilos

const SuccessMessage = ({ message }) => {
    return (
        <div className="success-message">
            <p>{message}</p>
        </div>
    );
}

export default SuccessMessage;
