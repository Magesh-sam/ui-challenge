import { cva } from 'class-variance-authority'
import { BadgeProps } from '../utils/types'


const badgeVariants = cva("badge", {
    variants: {
        variant: {
            primary: "badge-primary",
            secondary: "badge-secondary",
            important: "badge-important",
        }
    }
})

function Badge({ children, variant = "primary" }: BadgeProps) {
    return (
        <span className={badgeVariants({ variant })} >{children}</span>
    )
}

export default Badge