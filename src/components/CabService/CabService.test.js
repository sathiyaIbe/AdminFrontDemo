import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CabService from './CabService';

describe('<CabService />', () => {
  test('it should mount', () => {
    render(<CabService />);
    
    const cabService = screen.getByTestId('CabService');

    expect(cabService).toBeInTheDocument();
  });
});