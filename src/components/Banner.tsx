import { cva } from 'class-variance-authority'
import { BannerProps } from '../utils/types'
import { CircleAlert, CircleX, TriangleAlert } from 'lucide-react'

const bannerVariants = cva('banner', {
    variants: {
        variant: {
            default: 'banner-default',
            announcement: 'banner-announcement',
            error: 'banner-error'
        }
    }
})

const variantIcons = {
    default: <TriangleAlert />,
    announcement: <CircleAlert />,
    error: <CircleX />
}

const variantLabels = {
    default: 'Warning',
    announcement: 'Information',
    error: 'Error'
}
function Banner({ value, variant = "default" }: BannerProps) {
    return (
        <div
            className={bannerVariants({ variant })}
            role="alert"
            aria-label={`${variantLabels[variant]}: ${value}`}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span aria-hidden="true">{variantIcons[variant]}</span>
                <span>{value}</span>
            </div>
        </div>
    )
}

export default Banner