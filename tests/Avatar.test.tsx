import Avatar from '../src/components/Avatar'
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { it, expect, describe } from 'vitest'

describe('Avatar Compponet', () => {
    it('renders default circle variant with size md', () => {
        render(<Avatar src="./magesh.png" alt="An avatar of the user" fallback="MK" />)
        const avatar = screen.getByRole('img');
        expect(avatar).toBeInTheDocument();
        expect(avatar).toHaveClass('avatar-circle avatar-md')

    })
    it('renders  square variant', () => {
        render(<Avatar src="./magesh.png" alt="An avatar of the user" fallback="MK" variant='square' />)
        const avatar = screen.getByRole('img');
        expect(avatar).toBeInTheDocument();
        expect(avatar).toHaveClass('avatar-square')

    })
    it('renders with size - sm', () => {
        render(<Avatar src="./magesh.png" alt="An avatar of the user" fallback="MK" size='sm' />)
        const avatarSmall = screen.getByRole('img');
        expect(avatarSmall).toBeInTheDocument();
        expect(avatarSmall).toHaveClass('avatar-sm')
    })
    it('renders with size - md', () => {
        render(<Avatar src="./magesh.png" alt="An avatar of the user" fallback="MK" size='md' />)
        const avatarMedium = screen.getByRole('img');
        expect(avatarMedium).toBeInTheDocument();
        expect(avatarMedium).toHaveClass('avatar-md')

    })
    it('renders with size - lg', () => {
        render(<Avatar src="./magesh.png" alt="An avatar of the user" fallback="MK" size='lg' />)
        const avatarLarge = screen.getByRole('img');
        expect(avatarLarge).toBeInTheDocument();
        expect(avatarLarge).toHaveClass('avatar-lg')
    })
    it('renders with fallback value', () => {
        const fallback = "MK";
        render(<Avatar src="" alt="An avatar of the user" fallback={fallback} />)
        const avatar = screen.getByRole('img');
        expect(avatar).toBeInTheDocument();
        expect(avatar).toHaveTextContent(fallback)

    })
})

