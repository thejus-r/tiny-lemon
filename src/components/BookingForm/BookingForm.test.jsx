import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders BookingForm component', () => {
    const mockOnFormSubmit = jest.fn();
    const mockDispatchOnDateChange = jest.fn();
    const availableTimes = ["12:00", "13:00", "14:00"];

    render(
        <BookingForm
            onFormSubmit={mockOnFormSubmit}
            isFormSubmitted={false}
            availableTimes={availableTimes}
            dispatchOnDateChange={mockDispatchOnDateChange}
        />
    );

    const dateLabel = screen.getByText(/Date/i);
    expect(dateLabel).toBeInTheDocument();
});