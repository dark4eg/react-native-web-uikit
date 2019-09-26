import { colorTheme } from "../../Themes/Colors";
import { ParsedDataUrlType } from "../../Helpers/regexHelpers";
import * as React from "react";
declare type Props = {
    isVisible: boolean;
    onBackdropPress(): void;
    onSignApply(data: ParsedDataUrlType): void;
    submitButtonLabel: string;
    cancelButtonLabel: string;
    headerText?: string;
    helperText?: string;
    theme: "light" | "dark";
};
declare type State = {
    signatureData?: ParsedDataUrlType;
    isSignSubmitted: boolean;
    colors: typeof colorTheme;
    /**
     * Change it to rerender webview, when reset is needed
     */
    resetCount: number;
};
declare class SignatureModal extends React.PureComponent<Props> {
    static defaultProps: {
        backgroundColor: string;
        submitButtonLabel: string;
        cancelButtonLabel: string;
        theme: string;
    };
    private webView;
    state: State;
    render(): JSX.Element;
    private renderButtons;
    private renderNativeModal;
    private renderWebModal;
    renderSignView: () => JSX.Element;
    private renderHeaderText;
    private renderHelperText;
    private setWebViewRef;
    private onMessage;
    private sendSignature;
    private resetWebView;
    private submitSignApply;
    private unSubmitSignApply;
}
export default SignatureModal;
