import * as React from "react";
import { colorTheme } from "../../Themes/Colors";
interface Props {
    lines: number;
    theme: "light" | "dark";
}
interface State {
    colors: typeof colorTheme;
}
declare class ParagraphPlaceholder extends React.PureComponent<Props, State> {
    state: {
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
    static defaultProps: {
        lines: number;
        theme: string;
    };
    render(): JSX.Element;
    private renderNativePlaceholderLines;
    private renderWebPlaceholderLines;
    private renderWebPlaceholder;
}
export default ParagraphPlaceholder;
