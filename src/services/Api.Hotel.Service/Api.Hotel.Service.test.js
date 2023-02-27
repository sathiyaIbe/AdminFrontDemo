import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ApiHotelService from './ApiHotelService';

describe('<ApiHotelService />', () => {
  test('it should mount', () => {
    render(<ApiHotelService />);
    
    const apiHotelService = screen.getByTestId('ApiHotelService');

    expect(apiHotelService).toBeInTheDocument();
  });
});