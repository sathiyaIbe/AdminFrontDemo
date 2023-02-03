import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserService from './UserService';

describe('<UserService />', () => {
  test('it should mount', () => {
    render(<UserService />);
    
    const userService = screen.getByTestId('UserService');

    expect(userService).toBeInTheDocument();
  });
});