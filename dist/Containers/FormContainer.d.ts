import * as React from "react";
import { KeyboardType, TextInput } from "react-native";
import { colorTheme } from "../Themes/Colors";
declare type FieldsState = {
    [key: string]: {
        value?: string;
        isValid: boolean;
    };
};
interface Props {
    handleSubmit(res: FieldsState): void;
    fields: {
        [key: string]: {
            label: string;
            initialValue?: string;
            validate?(value?: string): string | void | undefined;
            secureTextEntry?: boolean;
            keyboardType?: KeyboardType;
        };
    };
    submitLabel: string;
    theme: "light" | "dark";
    paddingTop: string | number;
    paddingHorizontal: string | number;
}
interface State {
    fields: FieldsState;
    colors: typeof colorTheme;
}
declare class LoginFormContainer extends React.PureComponent<Props, State> {
    nextInput: {
        [key: string]: TextInput;
    };
    static defaultProps: {
        paddingTop: number;
        paddingHorizontal: string;
    };
    constructor(props: any);
    render(): JSX.Element;
    private renderInputs;
    private setFieldRef;
    private onCurrentInputSubmit;
    private setValue;
    private handleSubmit;
    private renderSubmitButton;
    private isFormValid;
}
export default LoginFormContainer;
