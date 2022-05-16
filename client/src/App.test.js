import {render, screen } from '@testing-library/react'
import Login from './auth/Login'

test('renders learn react link', () => {
    render(<Login />);
    const linkElement = screen.getByText("LOGIN")
    expect(linkElement).toBeInTheDocument()
})


