import React from "react";

export interface AvatarProps {
    className?: string;
    src: string;
    alt: string;
    fallback: string;
    variant?: "circle" | "square";
    size?: "sm" | "md" | "lg";
}

export interface BadgeProps {
    variant?: "primary" | "secondary" | "important";
    children: React.ReactNode
}
export interface BannerProps {
    variant?: "default" | "announcement" | "error"
    value: string
}