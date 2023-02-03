import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ApiCapRegister from './ApiCapRegister';

describe('<ApiCapRegister />', () => {
  test('it should mount', () => {
    render(<ApiCapRegister />);
    
    const apiCapRegister = screen.getByTestId('ApiCapRegister');

    expect(apiCapRegister).toBeInTheDocument();
  });
});