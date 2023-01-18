import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookingStatus from './BookingStatus';

describe('<BookingStatus />', () => {
  test('it should mount', () => {
    render(<BookingStatus />);
    
    const bookingStatus = screen.getByTestId('BookingStatus');

    expect(bookingStatus).toBeInTheDocument();
  });
});