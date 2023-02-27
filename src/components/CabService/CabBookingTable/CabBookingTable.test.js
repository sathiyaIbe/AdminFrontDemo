import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CabBookingTable from './CabBookingTable';

describe('<CabBookingTable />', () => {
  test('it should mount', () => {
    render(<CabBookingTable />);
    
    const cabBookingTable = screen.getByTestId('CabBookingTable');

    expect(cabBookingTable).toBeInTheDocument();
  });
});