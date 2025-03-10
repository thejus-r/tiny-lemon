import React from "react";
import "./Modal.css";
import Button from "../Button/Button";

const Modal = ({ title, description, onClose }) => {
    return (
        <>
            <div data-testid="modal-background" className="modal-background" onClick={onClose}></div>
            <div className="modal">
                <h2 className="modal-title">{title}</h2>
                <p className="modal-description">{description}</p>
                <div className="modal-button">
                    <Button onClick={onClose} title="Close" />
                </div>
            </div>
        </>
    );
};

export default Modal;