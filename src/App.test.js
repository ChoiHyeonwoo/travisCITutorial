import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/docker-compose로 했지롱! docker-compose 개편해요/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement1 = screen.getByText(/docker-compose로 했지롱! docker-compose 개편해요/i);
  expect(linkElement1).toBeInTheDocument();
});
test('renders learn react link', () => {
  render(<App />);
  const linkElement2 = screen.getByText(/docker-compose로 했지롱! docker-compose 개편해요/i);
  expect(linkElement2).toBeInTheDocument();
});