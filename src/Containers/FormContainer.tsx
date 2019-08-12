import * as React from "react";
import { View, StyleSheet, Text, Animated } from "react-native";
import * as Icons from "../Components/Icons";
import Colors from "../Themes/Colors";
import Input from "../Components/Input";
import { GradientButton, TransparentButton } from "../Components/Buttons";

export type Props = {
  emailLabel: string;
  passwordLabel: string;
  validateEmail(value: string): string | undefined;
  validatePassword(value: string): string | undefined;
  onSubmit(res: { email: string; password: string }): void;
  submitLabel: string;
  initialEmailValue?: string;
  initialPasswordValue?: string;
  forgotPasswordButtonLabel: string;
  onForgotPasswordPress?(): void;
  registrationButtonLabel: string;
  onRegistrationPress?(): void;
  separatorText?: string;
  themeColor: string;
  backgroundColor: string;
  componentsSizeRatio: number;
};

type State = {
  email: { value?: string; isValid: boolean };
  password: { value?: string; isValid: boolean };
  subElementsOpacity: Animated.Value;
};

class FormContainer extends React.PureComponent<Props, State> {
  static defaultProps = {
    submitLabel: "sign in",
    forgotPasswordButtonLabel: "Forgot your passport?",
    registrationButtonLabel: "call for registration",
    themeColor: Colors.lime,
    backgroundColor: Colors.white,
    componentsSizeRatio: 1,
  };
  state = {
    email: { value: this.props.initialEmailValue, isValid: !!this.props.initialEmailValue },
    password: { value: this.props.initialPasswordValue, isValid: !!this.props.initialPasswordValue },
    subElementsOpacity: new Animated.Value(1),
  };
  public render() {
    const { emailLabel, passwordLabel, validateEmail, validatePassword, backgroundColor } = this.props;
    return (
      <View style={[styles.container, { backgroundColor }]}>
        {this.renderLogo()}
        <View style={styles.inputContainer}>
          <Input
            label={emailLabel}
            initialValue={this.props.initialEmailValue}
            validateValue={validateEmail}
            onChange={this.setEmail}
            onSuccessInputFieldColor={this.props.themeColor}
            onInputFocus={this.hideSubElements}
            onInputBlur={this.showSubElements}
            keyboardType="email-address"
          />
          <Input
            secureTextEntry
            label={passwordLabel}
            initialValue={this.props.initialPasswordValue}
            validateValue={validatePassword}
            onChange={this.setPassword}
            onSuccessInputFieldColor={this.props.themeColor}
            onInputFocus={this.hideSubElements}
            onInputBlur={this.showSubElements}
          />
        </View>
        <View style={styles.buttonsContainer}>
          {this.renderSubmitButton()}
          {this.renderForgotPasswordButton()}
          {this.renderSeparationLine()}
          {this.renderRegistrationButton()}
        </View>
      </View>
    );
  }

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

  private renderLogo = () => {
    return (
      <Animated.View style={{ opacity: this.state.subElementsOpacity }}>
        <Icons.TrucknetLogo height={24 * this.props.componentsSizeRatio} width={182 * this.props.componentsSizeRatio} />
      </Animated.View>
    );
  };

  private setEmail = (email) => this.setState({ email });
  private setPassword = (password) => this.setState({ password });
  private onSubmit = () => {
    const { email, password } = this.state;
    const emailValue = email.value as string;
    const passwordValue = password.value as string;
    this.props.onSubmit({ email: emailValue, password: passwordValue });
  };
  private renderSubmitButton = () => {
    const { email, password } = this.state;
    return (
      <GradientButton
        height={40 * this.props.componentsSizeRatio}
        disabled={!(email.isValid && password.isValid)}
        label={this.props.submitLabel.toUpperCase()}
        onPress={this.onSubmit}
      />
    );
  };

  private renderForgotPasswordButton = () => {
    if (this.props.onForgotPasswordPress) {
      return (
        <TransparentButton
          height={32 * this.props.componentsSizeRatio}
          label={this.props.forgotPasswordButtonLabel}
          textColor={Colors.black}
          onPress={this.props.onForgotPasswordPress}
        />
      );
    }
    return <View />;
  };
  private renderSeparationLine = () => {
    if (this.props.separatorText) {
      return (
        <Animated.View style={[styles.separatorContainer, { opacity: this.state.subElementsOpacity }]}>
          <View style={styles.line} />
          <Text style={styles.separatorText}>{this.props.separatorText}</Text>
          <View style={styles.line} />
        </Animated.View>
      );
    }
    return <View />;
  };
  private renderRegistrationButton = () => {
    if (this.props.onRegistrationPress) {
      return (
        <TransparentButton
          label={this.props.registrationButtonLabel.toUpperCase()}
          height={40 * this.props.componentsSizeRatio}
          borderWidth={1}
          borderColor={this.props.themeColor}
          textColor={this.props.themeColor}
          onPress={this.props.onRegistrationPress}
        />
      );
    }
    return <View />;
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: "16%",
    paddingVertical: 32,
    justifyContent: "space-around",
    alignItems: "center",
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
    height: 1,
    backgroundColor: Colors.veryLightGray,
    width: "45%",
  },
  separatorText: {
    color: Colors.lightGray,
  },
});

export default FormContainer;
