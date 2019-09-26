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
import { View, StyleSheet } from "react-native";
import { colorTheme } from "../Themes/Colors";
import Input from "../Components/Input";
import { GradientButton } from "../Components/Buttons";
var LoginFormContainer = /** @class */ (function (_super) {
    __extends(LoginFormContainer, _super);
    function LoginFormContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.nextInput = {};
        _this.renderInputs = function () {
            var theme = _this.state.colors[_this.props.theme];
            var fieldNames = Object.keys(_this.props.fields);
            return fieldNames.map(function (fieldName, index) {
                var field = _this.props.fields[fieldName];
                var nextInputName = fieldNames[index + 1];
                return (<Input ref={_this.setFieldRef(fieldName)} key={fieldName} label={field.label} secureTextEntry={field.secureTextEntry} validateValue={field.validate} onChange={_this.setValue(fieldName)} onSuccessInputFieldColor={theme.themeColor} textColor={theme.defaultText} keyboardType={field.keyboardType} initialValue={field.initialValue} onSubmitEditing={_this.onCurrentInputSubmit(nextInputName)}/>);
            });
        };
        _this.setFieldRef = function (fieldName) { return function (field) { return (_this.nextInput[fieldName] = field); }; };
        _this.onCurrentInputSubmit = function (nextInputName) { return function () {
            if (nextInputName && _this.nextInput[nextInputName]) {
                var textInput = _this.nextInput[nextInputName];
                return textInput.focus();
            }
            if (!nextInputName && _this.isFormValid()) {
                return _this.handleSubmit();
            }
        }; };
        _this.setValue = function (fieldName) { return function (value) {
            var _a;
            _this.setState({ fields: __assign({}, _this.state.fields, (_a = {}, _a[fieldName] = value, _a)) });
        }; };
        _this.handleSubmit = function () {
            _this.props.handleSubmit(_this.state.fields);
        };
        _this.renderSubmitButton = function () {
            return (<GradientButton disabled={!_this.isFormValid()} height={40} label={_this.props.submitLabel.toUpperCase()} onPress={_this.handleSubmit}/>);
        };
        _this.isFormValid = function () {
            var fieldsValidStatus = [];
            for (var fieldName in _this.state.fields) {
                var field = _this.state.fields[fieldName];
                fieldsValidStatus.push(field.isValid);
            }
            return !fieldsValidStatus.includes(false);
        };
        var fields = {};
        for (var fieldName in _this.props.fields) {
            var field = _this.props.fields[fieldName];
            fields[fieldName] = {
                value: field.initialValue,
                isValid: field.validate ? !field.validate(field.initialValue) : true,
            };
        }
        _this.state = {
            fields: fields,
            colors: colorTheme,
        };
        return _this;
    }
    LoginFormContainer.prototype.render = function () {
        var theme = this.state.colors[this.props.theme];
        return (<View style={[
            styles.container,
            {
                backgroundColor: theme.background,
                paddingTop: this.props.paddingTop,
                paddingHorizontal: this.props.paddingHorizontal,
            },
        ]}>
        <View style={styles.inputContainer}>{this.renderInputs()}</View>
        <View style={styles.buttonsContainer}>{this.renderSubmitButton()}</View>
      </View>);
    };
    LoginFormContainer.defaultProps = {
        paddingTop: 32,
        paddingHorizontal: "16%",
    };
    return LoginFormContainer;
}(React.PureComponent));
var styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
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
});
export default LoginFormContainer;
