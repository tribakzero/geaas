import { test, expect } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders app title', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/GEAAS/i);
  expect(titleElement).toBeInTheDocument();
});
