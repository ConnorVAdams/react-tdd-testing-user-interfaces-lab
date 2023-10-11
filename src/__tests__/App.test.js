import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

test('displays a top-level heading with the text "Hi, I\'m Connor"', () => {
    render(<App />)
    const heading1 = screen.getByRole('heading', {
        name: /hi, i'm/i,
        exact: false,
        level: 1,
    })
    expect(heading1).toBeInTheDocument()
})

test('displays an image of a person', () => {
    render(<App />)
    const image = screen.getByRole('img', {
    })
    expect(image).toHaveAttribute('src')
})

test('alt text of the image is person\'s name', () => {
    render(<App />)
    const image = screen.getByRole('img', {
        alt: /author/
    })
    expect(image).toBeInTheDocument()
})

test('displays a second-level heading with the text "About Me"', () => {
    render (<App />)
    const heading2 = screen.getByRole('heading', {
        name: /About Me/i,
        exact: false,
        level: 2,
    })
    expect(heading2).toBeInTheDocument()
})

test('displays a paragraph element with the author\'s bio', () => {
    render (<App />)
    const paragraph = screen.getByText(/This is my bio./i)
    expect(paragraph).toBeInTheDocument()
    expect(paragraph.tagName.toLowerCase()).toBe('p')
})

test('displays links for author\'s LinkedIn and GitHub profiles', () => {
    render (<App />)
    const [link1, link2] = screen.getAllByRole('link', {
    })
    expect(link1).toHaveAttribute('href', 'http://linkedin.com')
    expect(link2).toHaveAttribute('href', 'http://github.com')
})