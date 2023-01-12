import { ReactNode } from "react";

export interface ButtonPropsInterface {
    width?: string;
    height?: string;
    border?: string;
    radius?: string;
    color?: string;
    className?: string;
    buttonType?: string | undefined;
    children?: ReactNode;
    onClick?: () => void;
}

export type ChildrenProps = { children?: React.ReactNode }

export type ErrorFallbackProps = {
    error: {
        message: string;
    }
}