import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders taunt text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Eunan was here./i);
  expect(linkElement).toBeInTheDocument();
});

test('renders controversial opinion', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/React > Angular/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders all arguments mute', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/You can't change my mind./i);
  expect(linkElement).toBeInTheDocument();
});
