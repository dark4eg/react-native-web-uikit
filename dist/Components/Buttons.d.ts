import * as React from "react";
interface LinearGradientStylesProps {
    borderRadius?: number;
    width?: string | number;
    height?: string | number;
    marginVertical?: string | number;
    marginHorizontal?: string | number;
}
interface ButtonContainerStylesProps extends LinearGradientStylesProps {
    borderWidth?: number;
    borderColor?: string;
}
interface ButtonProps extends ButtonContainerStylesProps {
    disabled?: boolean;
    textColor?: string;
    testID?: string;
    onPress?: () => void;
    onLongPress?: () => void;
    onPressIn?: () => void;
    onPressOut?: () => void;
}
interface GradientButtonWithChildrenProps extends ButtonProps {
    gradientStartColor: string;
    gradientEndColor: string;
    children: React.ReactChild;
    disabled?: boolean;
}
declare class GradientButtonWithChildren extends React.PureComponent<GradientButtonWithChildrenProps> {
    static defaultProps: {
        gradientStartColor: string;
        gradientEndColor: string;
    };
    PRESS_IN_SHADOW: number;
    PRESS_OUT_SHADOW: number;
    private setShadow;
    state: {
        shadow: {
            elevation: number;
            boxShadow?: undefined;
            zIndex?: undefined;
            shadowColor?: undefined;
            shadowOffset?: undefined;
            shadowOpacity?: undefined;
            shadowRadius?: undefined;
        } | {
            boxShadow: string;
            zIndex: number;
            elevation?: undefined;
            shadowColor?: undefined;
            shadowOffset?: undefined;
            shadowOpacity?: undefined;
            shadowRadius?: undefined;
        } | {
            shadowColor: string;
            shadowOffset: {
                width: number;
                height: number;
            };
            shadowOpacity: number;
            shadowRadius: number;
            elevation?: undefined;
            boxShadow?: undefined;
            zIndex?: undefined;
        };
    };
    render(): JSX.Element;
    private setColor;
    private handlePressIn;
    private handlePressOut;
}
export { GradientButtonWithChildren };
interface GradientButtonProps extends ButtonProps {
    label: string;
    gradientStartColor: string;
    gradientEndColor: string;
    disabled?: boolean;
}
export declare class GradientButton extends React.PureComponent<GradientButtonProps> {
    static defaultProps: {
        gradientStartColor: string;
        gradientEndColor: string;
    };
    render(): JSX.Element;
    private setColor;
}
interface TransparentButtonWithTextProps extends ButtonProps {
    link: string;
    label: string;
    linkColor?: string;
    textColor?: string;
}
export declare const TransparentButtonWithLink: (props: TransparentButtonWithTextProps) => JSX.Element;
interface TransparentButtonWithChildrenProps extends ButtonProps {
    children: React.ReactChild;
}
export declare const TransparentButtonWithChildren: (props: TransparentButtonWithChildrenProps) => JSX.Element;
interface TransparentButtonProps extends ButtonProps {
    label: string;
}
export declare const TransparentButton: (props: TransparentButtonProps) => JSX.Element;
