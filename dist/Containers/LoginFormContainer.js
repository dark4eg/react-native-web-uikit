var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from "react";
import { View, StyleSheet, Animated, Keyboard } from "react-native";
import * as Icons from "../Components/Icons";
import { colorTheme } from "../Themes/Colors";
import { TransparentButton } from "../Components/Buttons";
import FormContainer from "./FormContainer";
var LoginFormContainer = /** @class */ (function (_super) {
    __extends(LoginFormContainer, _super);
    function LoginFormContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            subElementsOpacity: new Animated.Value(1),
            colors: colorTheme,
        };
        _this.handleSubmit = function (fields) {
            var email = fields.email.value;
            var password = fields.password.value;
            _this.props.callback.handleSubmit({ email: email, password: password });
        };
        _this.showSubElements = function () {
            Animated.timing(_this.state.subElementsOpacity, {
                toValue: 1,
                duration: 300,
            }).start();
        };
        _this.hideSubElements = function () {
            Animated.timing(_this.state.subElementsOpacity, {
                toValue: 0,
                duration: 300,
            }).start();
        };
        _this.renderLogoContainer = function () {
            return <Animated.View style={{ opacity: _this.state.subElementsOpacity }}>{_this.renderLogo()}</Animated.View>;
        };
        _this.renderLogo = function () {
            var theme = _this.state.colors[_this.props.theme];
            if (_this.props.logo) {
                return _this.props.logo;
            }
            return (<Icons.TrucknetLogo color={theme.defaultText} height={24 * _this.props.componentsSizeRatio} width={182 * _this.props.componentsSizeRatio}/>);
        };
        _this.renderForgotPasswordButton = function () {
            var theme = _this.state.colors[_this.props.theme];
            if (_this.props.callback.onForgotPasswordPress) {
                return (<TransparentButton height={32 * _this.props.componentsSizeRatio} label={_this.props.text.forgotPasswordButtonLabel} textColor={theme.defaultText} onPress={_this.props.callback.onForgotPasswordPress}/>);
            }
            return <View />;
        };
        return _this;
    }
    LoginFormContainer.prototype.componentDidMount = function () {
        this.keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", this.hideSubElements);
        this.keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", this.showSubElements);
    };
    LoginFormContainer.prototype.componentWillUnmount = function () {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    };
    LoginFormContainer.prototype.render = function () {
        var fields = this.props.fields;
        var theme = this.state.colors[this.props.theme];
        var formKey = "" + fields.email.initialValue + fields.password.initialValue;
        return (<View style={[styles.container, { backgroundColor: theme.background }]}>
        {this.renderLogoContainer()}
        <FormContainer fields={{
            email: __assign({}, fields.email, { keyboardType: "email-address" }),
            password: __assign({}, fields.password, { secureTextEntry: true }),
        }} theme={this.props.theme} handleSubmit={this.handleSubmit} paddingHorizontal={0} paddingTop={84} submitLabel={this.props.text.submitLabel} key={formKey}/>
        <View style={styles.buttonsContainer}>{this.renderForgotPasswordButton()}</View>
      </View>);
    };
    LoginFormContainer.defaultProps = {
        text: {
            submitLabel: "sign in",
            forgotPasswordButtonLabel: "Forgot your passport?",
            theme: "light",
        },
        componentsSizeRatio: 1,
    };
    return LoginFormContainer;
}(React.PureComponent));
var styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        paddingHorizontal: "16%",
        paddingVertical: 8,
        justifyContent: "space-around",
        alignItems: "center",
    },
    buttonsContainer: { flex: 0.3, width: "100%", justifyContent: "space-around" },
});
export default LoginFormContainer;
