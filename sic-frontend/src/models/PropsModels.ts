import { ReactNode, LegacyRef } from "react";

export type RefType = LegacyRef<HTMLButtonElement> | undefined

export interface ButtonPropsInterface {
    width?: string;
    height?: string;
    border?: string;
    radius?: string;
    color?: string;
    className?: string;
    children?: ReactNode;
    type: "button" | "submit";
    onClick?: () => void;
}

export type ChildrenProps = { children?: React.ReactNode }

export type ErrorFallbackProps = {
    error: {
        message: string;
    }
}