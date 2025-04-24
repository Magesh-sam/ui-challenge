import { screen, render } from '@testing-library/react';
import React from 'react';
import { it, expect, describe } from 'vitest'
import '@testing-library/jest-dom';
import Badge from '../src/components/Badge'



describe('Badge Component', () => {
    it('renders default variant as primary', () => {
        render(<Badge>{"hello"}</Badge>)
        const badge = screen.getByText("hello");
        expect(badge).toBeInTheDocument();
    })
    it('renders secondary variant', () => {
        render(<Badge variant='secondary' >{"hello"}</Badge>)
        const badge = screen.getByText("hello");
        expect(badge).toBeInTheDocument();
        expect(badge).toHaveClass('badge-secondary')
    })
    it('renders important variant', () => {
        render(<Badge variant='important' >{"hello"}</Badge>)
        const badge = screen.getByText("hello");
        expect(badge).toBeInTheDocument();
        expect(badge).toHaveClass('badge-important')
    })

})