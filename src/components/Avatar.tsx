
import { cva } from 'class-variance-authority'
import { AvatarProps } from '../utils/types'
import { useState } from 'react'


const avatarVariants = cva("avatar", {
    variants: {
        variant: {
            circle: "avatar-circle",
            square: "avatar-square"
        },
        size: {
            sm: "avatar-sm",
            md: "avatar-md",
            lg: "avatar-lg"
        }
    },
    defaultVariants: {
        variant: "circle",
        size: "md",
    }
})

function Avatar({ src, alt, fallback, size = "md", variant = "circle" }: AvatarProps) {
    const [isImageError, setIsImageError] = useState(false)
    return (!src || isImageError) ? (
        <div className={avatarVariants({ size, variant }) + " avatar-fallback"} role="img" aria-label={alt}>
            {fallback}
        </div>
    ) : (
        <img src={src} alt={alt} onError={() => setIsImageError(true)} className={avatarVariants({ size, variant })} />
    );




}

export default Avatar