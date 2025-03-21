// Reservations.js
import React, { useState } from "react";
import "./Reservations.css";
import BookingForm from "../../components/BookingForm/BookingForm";
import Modal from "../../components/Modal/Modal";
import { useNavigate } from "react-router";
import { useReducer } from "react";
import { fetchAPI } from "../../utils/Api";

const Reservations = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const navigate = useNavigate();
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const handleFormSubmit = (e, formValues) => {
        e.preventDefault();
        setIsFormSubmitted(true);
        const areAllFieldsFilled = Object.values(formValues).every(
            (value) => value
        );

        if (areAllFieldsFilled) {
            setIsModalVisible(true);
        }
    };

    const updateTimes = (availableTimes, date) => {
        const response = fetchAPI(new Date(date));
        return response.length !== 0 ? response : availableTimes;
    };

    const initializeTimes = (initialAvailableTimes) => [
        ...initialAvailableTimes,
        ...fetchAPI(new Date()),
    ];

    const [availableTimes, dispatchOnDateChange] = useReducer(
        updateTimes,
        [],
        initializeTimes
    );

    return (
        <div data-testid="reservations-component" className="reservation">
            <div className="reservation-card">
                <h1 className="reservation-title">Table reservation</h1>
                <BookingForm
                    availableTimes={availableTimes}
                    dispatchOnDateChange={dispatchOnDateChange}
                    onFormSubmit={handleFormSubmit}
                    isFormSubmitted={isFormSubmitted}
                />
            </div>

            {isModalVisible && (
                <Modal
                    onClose={() => {
                        setIsModalVisible(false);
                        navigate("/");
                    }}
                    title="Reservation Completed!"
                    description="Thank you for choosing Little Lemon! Your reservation has been successfully made. You will receive a confirmation email with the details of your reservation. We are excited to see you soon!"
                />
            )}
        </div>
    );
};

export default Reservations;