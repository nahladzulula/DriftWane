// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DriftWane title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DriftWane/i);
    expect(titleElement).toBeInTheDocument();
});
