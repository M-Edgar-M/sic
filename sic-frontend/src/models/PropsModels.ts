import { ReactNode } from "react";

export interface ButtonPropsInterface {
    width?: string;
    height?: string;
    border?: string;
    radius?: string;
    color?: string;
    className?: string;
    children?: ReactNode;
    onClick?: () => void;
}

export type ChildrenProps = { children?: React.ReactNode }