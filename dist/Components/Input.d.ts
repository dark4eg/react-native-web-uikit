import * as React from "react";
import { TextInput, Animated, NativeSyntheticEvent, TextInputFocusEventData, TextInputProps, TextInputSubmitEditingEventData } from "react-native";
export interface TargetedEvent {
    target: number;
}
declare type Props = {
    label: string;
    onChange(res: {
        value: string | undefined;
        isValid: boolean;
    }): void;
    width: number | string;
    height: number;
    onSuccessInputFieldColor: string;
    textColor: string;
    secureTextEntry: boolean;
    validateValue?(value?: string): string | void;
    initialValue?: string;
    onFocus?(e: NativeSyntheticEvent<TextInputFocusEventData>): void;
    onBlur?(e: NativeSyntheticEvent<TargetedEvent>): void;
    onSubmitEditing?(e: NativeSyntheticEvent<TextInputSubmitEditingEventData>): void;
    maxLabelFontSize: number;
    minLabelFontSize: number;
    maxLabelMarginBottom: number;
    minLabelMarginBottom: number;
    keyboardType: "default" | "email-address" | "numeric" | "phone-pad" | "visible-password" | "ascii-capable" | "numbers-and-punctuation" | "url" | "number-pad" | "name-phone-pad" | "decimal-pad" | "twitter" | "web-search";
    inputFontSize: number;
    errorFontSize: 12;
    errorColor: string;
    borderBottomWidth: number;
    nativeTextInputProps?: TextInputProps;
};
declare type State = {
    labelFontSize: Animated.Value;
    labelMarginBottom: Animated.Value;
    value?: string;
    error: string | void;
};
declare class Input extends React.PureComponent<Props, State> {
    textInput?: TextInput;
    static defaultProps: {
        onSuccessInputFieldColor: string;
        textColor: string;
        secureTextEntry: boolean;
        keyboardType: string;
        width: string;
        height: number;
        maxLabelFontSize: number;
        minLabelFontSize: number;
        maxLabelMarginBottom: number;
        minLabelMarginBottom: number;
        inputFontSize: number;
        errorFontSize: number;
        errorColor: string;
        borderBottomWidth: number;
    };
    state: {
        value: string | undefined;
        error: undefined;
        labelFontSize: Animated.Value;
        labelMarginBottom: Animated.Value;
    };
    focus: () => void;
    render(): JSX.Element;
    private onSubmitEditing;
    private setInputRef;
    private onChangeText;
    private validate;
    private setValue;
    private onFocus;
    private onBlur;
    private animateLabelUp;
    private animateLabelDown;
    private getLabelColor;
    private getFieldColor;
}
export default Input;
