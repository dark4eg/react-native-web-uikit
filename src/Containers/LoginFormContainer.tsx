import * as React from "react";

import { View, Text, Animated, Keyboard, StyleSheet } from "react-native";
import * as Icons from "../Components/Icons";
import { colorTheme, ColorThemeNameType, ColorThemeType } from "../Themes/Colors";
import Input from "../Components/Input";
import { GradientButton, TransparentButton } from "../Components/Buttons";
import { withTheme, SetStyleParamsType } from "../Themes/ThemeProvider";

type Style = ReturnType<typeof setStyle>;

type Props = {
  callback: {
    onSubmit(res: { email: string; password: string }): void;
    onForgotPasswordPress?(): void;
    onRegistrationPress?(): void;
  };
  validate: {
    email(value: string): string | undefined;
    password(value: string): string | undefined;
  };
  initial: {
    email?: string;
    password?: string;
  };
  text: {
    emailLabel: string;
    passwordLabel: string;
    submitLabel: string;
    forgotPasswordButtonLabel: string;
    registrationButtonLabel: string;
    separatorText: string;
  };
  theme: ColorThemeNameType;
  componentsSizeRatio: number;
  logo?: React.ReactNode;
  style: Style;
  color: ColorThemeType;
};

type State = {
  fields: {
    email: { value?: string; isValid: boolean };
    password: { value?: string; isValid: boolean };
  };
  subElementsOpacity: Animated.Value;
  colors: typeof colorTheme["dark"];
};

class LoginFormContainer extends React.PureComponent<Props, State> {
  keyboardDidShowListener;
  keyboardDidHideListener;

  static defaultProps = {
    initial: { email: undefined, password: undefined },
    text: {
      emailLabel: "email",
      passwordLabel: "password",
      submitLabel: "sign in",
      forgotPasswordButtonLabel: "Forgot your passport?",
      registrationButtonLabel: "call for registration",
      separatorText: "or",
      theme: "light",
    },
    componentsSizeRatio: 1,
  };

  private setInitialFieldsValues = () => {
    const { email, password } = this.props.initial;
    return {
      email: { value: email, isValid: !!email },
      password: { value: password, isValid: !!password },
    };
  };

  state = {
    fields: this.setInitialFieldsValues(),
    subElementsOpacity: new Animated.Value(1),
    colors: colorTheme["dark"],
  };

  public componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", this.hideSubElements);
    this.keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", this.showSubElements);
  }

  public componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  public render() {
    const { validate, text, initial, style, color } = this.props;
    return (
      <View style={style.container}>
        {this.renderLogoContainer()}
        <View style={style.inputContainer}>
          <Input
            label={text.emailLabel}
            initialValue={initial.email}
            validateValue={validate.email}
            onChange={this.setField("email")}
            onSuccessInputFieldColor={color.themeColor}
            textColor={color.defaultText}
            keyboardType="email-address"
            key={initial.email}
          />
          <Input
            secureTextEntry
            label={text.passwordLabel}
            initialValue={initial.password}
            validateValue={validate.password}
            onChange={this.setField("password")}
            onSuccessInputFieldColor={color.themeColor}
            textColor={color.defaultText}
            key={initial.password}
          />
        </View>
        <View style={style.buttonsContainer}>
          {this.renderSubmitButton()}
          {this.renderForgotPasswordButton()}
          {this.renderSeparationLine()}
          {this.renderRegistrationButton()}
        </View>
      </View>
    );
  }

  private setField = (fieldName) => (value) => this.setState({ fields: { ...this.state.fields, [fieldName]: value } });
  private onSubmit = () => {
    const { email, password } = this.state.fields;
    const emailValue = email.value as string;
    const passwordValue = password.value as string;
    this.props.callback.onSubmit({ email: emailValue, password: passwordValue });
  };
  private renderSubmitButton = () => {
    const { email, password } = this.state.fields;
    return (
      <GradientButton
        height={40 * this.props.componentsSizeRatio}
        disabled={!(email.isValid && password.isValid)}
        label={this.props.text.submitLabel.toUpperCase()}
        onPress={this.onSubmit}
      />
    );
  };

  private showSubElements = () => {
    Animated.timing(this.state.subElementsOpacity, {
      toValue: 1,
      duration: 300,
    }).start();
  };

  private hideSubElements = () => {
    Animated.timing(this.state.subElementsOpacity, {
      toValue: 0,
      duration: 300,
    }).start();
  };

  private renderLogoContainer = () => {
    return <Animated.View style={{ opacity: this.state.subElementsOpacity }}>{this.renderLogo()}</Animated.View>;
  };

  private renderLogo = () => {
    if (this.props.logo) {
      return this.props.logo;
    }
    return (
      <Icons.TrucknetLogo
        color={this.props.color.defaultText}
        height={24 * this.props.componentsSizeRatio}
        width={182 * this.props.componentsSizeRatio}
      />
    );
  };

  private renderForgotPasswordButton = () => {
    if (this.props.callback.onForgotPasswordPress) {
      return (
        <TransparentButton
          height={32 * this.props.componentsSizeRatio}
          label={this.props.text.forgotPasswordButtonLabel}
          textColor={this.props.color.defaultText}
          onPress={this.props.callback.onForgotPasswordPress}
        />
      );
    }
    return <View />;
  };
  private renderSeparationLine = () => {
    const { style } = this.props;
    if (this.props.text.separatorText) {
      return (
        <Animated.View style={[style.separatorContainer, { opacity: this.state.subElementsOpacity }]}>
          <View style={[style.line, { backgroundColor: this.setSeparatorLineColor() }]} />
          <Text style={style.separatorText}>{this.props.text.separatorText}</Text>
          <View style={[style.line, { backgroundColor: this.setSeparatorLineColor() }]} />
        </Animated.View>
      );
    }
    return <View />;
  };

  private setSeparatorLineColor = () => {
    return `${this.props.color.palette.veryLightGray}`;
  };
  private renderRegistrationButton = () => {
    const { color } = this.props;
    if (this.props.callback.onRegistrationPress) {
      return (
        <TransparentButton
          label={this.props.text.registrationButtonLabel.toUpperCase()}
          height={40 * this.props.componentsSizeRatio}
          borderWidth={1}
          borderColor={color.themeColor}
          textColor={color.themeColor}
          onPress={this.props.callback.onRegistrationPress}
        />
      );
    }
    return <View />;
  };
}

const setStyle = ({ color, getFont }: SetStyleParamsType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      paddingHorizontal: "16%",
      paddingVertical: 32,
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: color.background,
    },
    inputContainer: {
      flex: 1,
      width: "100%",
      flexDirection: "column",
      justifyContent: "flex-end",
    },
    buttonsContainer: { flex: 1, width: "100%", justifyContent: "space-around" },
    separatorContainer: {
      flexDirection: "row",
      width: "100%",
      height: 32,
      justifyContent: "space-between",
      alignItems: "center",
    },
    line: {
      marginTop: 2,
      height: 1,
      backgroundColor: color.palette.veryLightGray,
      width: "45%",
    },
    separatorText: getFont("BodyRegular"),
  });

export default withTheme<Props, Style>(setStyle)(LoginFormContainer);
