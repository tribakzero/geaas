import React from 'react';;
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders app title', () => {
    render(<App />);
    const title = screen.getByTestId('application-title');
    expect(title).toBeInTheDocument();
  });
});