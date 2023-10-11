import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

test('displays a top-level heading with the text "Hi, I\'m Connor"', () => {
    render(<App />);
    const heading = screen.getByRole('heading', {
        name: /hi, i'm/i,
        exact: false,
        level: 1,
    })
    expect(heading).toBeInTheDocument();
})

test('displays an image of a person', () => {
    render(<App />);
    const image = screen.getByRole('img', {
        alt: /author/
    })
    expect(image).toHaveAttribute('src')
})

test('alt text of the image is person\'s name', () => {
    render(<App />);
    const image = screen.getByRole('img', {
        alt: /author/
    })
    expect(image).toBeInTheDocument();
})