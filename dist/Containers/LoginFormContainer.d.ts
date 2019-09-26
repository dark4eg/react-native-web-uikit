import * as React from "react";
import { Animated } from "react-native";
import { colorTheme } from "../Themes/Colors";
declare type Props = {
    fields: {
        email: {
            label: string;
            initialValue?: string;
            validate?(value: string): string | void;
        };
        password: {
            label: string;
            initialValue?: string;
            validate?(value: string): string | void;
        };
    };
    callback: {
        handleSubmit(res: {
            email: string;
            password: string;
        }): void;
        onForgotPasswordPress?(): void;
    };
    text: {
        submitLabel: string;
        forgotPasswordButtonLabel: string;
    };
    theme: "light" | "dark";
    componentsSizeRatio: number;
    logo?: React.ReactNode;
};
declare type State = {
    subElementsOpacity: Animated.Value;
    colors: typeof colorTheme;
};
declare class LoginFormContainer extends React.PureComponent<Props, State> {
    keyboardDidShowListener: any;
    keyboardDidHideListener: any;
    static defaultProps: {
        text: {
            submitLabel: string;
            forgotPasswordButtonLabel: string;
            theme: string;
        };
        componentsSizeRatio: number;
    };
    state: {
        subElementsOpacity: Animated.Value;
        colors: {
            light: {
                inverseTextColor: string;
                background: string;
                navBarBackground: string;
                formBackground: string;
                rideInfo: string;
                componentDefaultBackground: string;
                bottomNavBarBackground: string;
                bottomNavBarBackgroundActive: string;
                subBackground: string;
                webViewBackground: string;
                defaultText: string;
                primaryText: string;
                secondaryText: string;
                buttonText: string;
                subtitle: string;
                disable: string;
                underline: string;
                icon: string;
                separator: string;
                themeColor: string;
                transparent: string;
                borderColor: string;
                shadow: string;
                link: string;
                email: string;
                error: string;
                themeGradient: {
                    gradientColor1: string;
                    gradientColor2: string;
                };
                purpleGradient: {
                    gradientColor1: string;
                    gradientColor2: string;
                };
                palette: {
                    elephant: string;
                    tarawera: string;
                    nightRider: string;
                    dodgerBlue: string;
                    lightningYellow: string;
                    gray: string;
                    lightGray: string;
                    veryLightGray: string;
                    veryVeryLightGray: string;
                    torchRed: string;
                    purpleLight: string;
                    purpleDark: string;
                    ashLight: string;
                    ashDark: string;
                    white: string;
                };
            };
            dark: {
                inverseTextColor: string;
                background: string;
                navBarBackground: string;
                bottomNavBarBackground: string;
                bottomNavBarBackgroundActive: string;
                componentDefaultBackground: string;
                subBackground: string;
                formBackground: string;
                webViewBackground: string;
                rideInfo: string;
                defaultText: string;
                primaryText: string;
                secondaryText: string;
                buttonText: string;
                disable: string;
                underline: string;
                icon: string;
                separator: string;
                subtitle: string;
                error: string;
                transparent: string;
                borderColor: string;
                shadow: string;
                link: string;
                email: string;
                themeColor: string;
                themeGradient: {
                    gradientColor1: string;
                    gradientColor2: string;
                };
                purpleGradient: {
                    gradientColor1: string;
                    gradientColor2: string;
                };
                palette: {
                    elephant: string;
                    tarawera: string;
                    nightRider: string;
                    dodgerBlue: string;
                    lightningYellow: string;
                    gray: string;
                    veryLightGray: string;
                    lightGray: string;
                    veryVeryLightGray: string;
                    torchRed: string;
                    purpleLight: string;
                    purpleDark: string;
                    ashLight: string;
                    ashDark: string;
                    white: string;
                };
            };
        };
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private handleSubmit;
    private showSubElements;
    private hideSubElements;
    private renderLogoContainer;
    private renderLogo;
    private renderForgotPasswordButton;
}
export default LoginFormContainer;
