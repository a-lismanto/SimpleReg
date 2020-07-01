import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders go to register link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/go to register/i);
  expect(linkElement).toBeInTheDocument();
});
