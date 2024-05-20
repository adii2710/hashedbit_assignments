import React from 'react';
import './Popup.css';

const Popup = ({ onClose }) => {
    return (
        <div className="popup-container">
            <div className="popup-content">
                <h2>Registration Successful!</h2>
                <p>You will receive a confirmation email shortly.</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Popup;
