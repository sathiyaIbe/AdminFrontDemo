import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Apilogin from './Apilogin';

describe('<Apilogin />', () => {
  test('it should mount', () => {
    render(<Apilogin />);
    
    const apilogin = screen.getByTestId('Apilogin');

    expect(apilogin).toBeInTheDocument();
  });
});