import { screen, render } from '@testing-library/react'
import React from 'react'
import { it, expect, describe } from 'vitest'
import '@testing-library/jest-dom'
import Banner from '../src/components/Banner'

describe('Banner Component', () => {
    it('renders default variant with correct class and aria-label', () => {
        render(<Banner value="banner1" />)
        const defaultBanner = screen.getByRole('alert')
        expect(defaultBanner).toBeInTheDocument()
        expect(defaultBanner).toHaveClass('banner-default')
        expect(defaultBanner).toHaveTextContent('banner1')
        expect(defaultBanner).toHaveAttribute('aria-label', 'Warning: banner1')
    })

    it('renders announcement variant with correct class and aria-label', () => {
        render(<Banner variant="announcement" value="banner2" />)
        const announcementBanner = screen.getByRole('alert')
        expect(announcementBanner).toBeInTheDocument()
        expect(announcementBanner).toHaveClass('banner-announcement')
        expect(announcementBanner).toHaveTextContent('banner2')
        expect(announcementBanner).toHaveAttribute('aria-label', 'Information: banner2')
    })

    it('renders error variant with correct class and aria-label', () => {
        render(<Banner variant="error" value="banner3" />)
        const errorBanner = screen.getByRole('alert')
        expect(errorBanner).toBeInTheDocument()
        expect(errorBanner).toHaveClass('banner-error')
        expect(errorBanner).toHaveTextContent('banner3')
        expect(errorBanner).toHaveAttribute('aria-label', 'Error: banner3')
    })
})
