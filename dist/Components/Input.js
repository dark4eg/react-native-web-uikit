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
import * as React from "react";
import { StyleSheet, Text, TextInput, Animated, } from "react-native";
import Colors from "../Themes/Colors";
import { isWeb, isAndroid } from "../Helpers/platform";
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            value: _this.props.initialValue,
            error: undefined,
            labelFontSize: _this.props.initialValue
                ? new Animated.Value(_this.props.minLabelFontSize)
                : new Animated.Value(_this.props.maxLabelFontSize),
            labelMarginBottom: _this.props.initialValue
                ? new Animated.Value(_this.props.maxLabelFontSize)
                : new Animated.Value(_this.props.minLabelMarginBottom),
        };
        _this.focus = function () {
            if (_this.textInput) {
                _this.textInput.focus();
            }
        };
        _this.onSubmitEditing = function (e) {
            if (_this.props.onSubmitEditing) {
                _this.props.onSubmitEditing(e);
            }
        };
        _this.setInputRef = function (el) {
            _this.textInput = el;
        };
        _this.onChangeText = function (value) {
            _this.setState({ value: value }, _this.validate);
        };
        _this.validate = function () {
            var validateValue = _this.props.validateValue;
            if (validateValue) {
                return _this.setState({ error: validateValue(_this.state.value) }, _this.setValue);
            }
            return _this.setValue();
        };
        _this.setValue = function () {
            _this.props.onChange({ value: _this.state.value, isValid: !_this.state.error });
        };
        _this.onFocus = function (event) {
            if (_this.props.onFocus)
                _this.props.onFocus(event);
            _this.animateLabelUp();
        };
        _this.onBlur = function (event) {
            if (_this.props.onBlur)
                _this.props.onBlur(event);
            _this.animateLabelDown();
        };
        _this.animateLabelUp = function () {
            Animated.parallel([
                Animated.timing(_this.state.labelFontSize, {
                    toValue: _this.props.minLabelFontSize,
                    duration: 250,
                }),
                Animated.timing(_this.state.labelMarginBottom, {
                    toValue: _this.props.maxLabelMarginBottom,
                    duration: 250,
                }),
            ]).start();
        };
        _this.animateLabelDown = function () {
            if (!_this.state.value) {
                Animated.parallel([
                    Animated.timing(_this.state.labelFontSize, {
                        toValue: _this.props.maxLabelFontSize,
                        duration: 250,
                    }),
                    Animated.timing(_this.state.labelMarginBottom, {
                        toValue: _this.props.minLabelMarginBottom,
                        duration: 250,
                    }),
                ]).start();
            }
        };
        _this.getLabelColor = function () {
            if (!_this.state.value) {
                return Colors.palette.lightGray;
            }
            if (_this.state.error) {
                return _this.props.errorColor;
            }
            return _this.props.textColor;
        };
        _this.getFieldColor = function () {
            if (!_this.state.value) {
                return Colors.palette.lightGray;
            }
            if (_this.state.error) {
                return _this.props.errorColor;
            }
            return _this.props.onSuccessInputFieldColor;
        };
        return _this;
    }
    Input.prototype.render = function () {
        var _a = this.state, labelFontSize = _a.labelFontSize, labelMarginBottom = _a.labelMarginBottom;
        var _b = this.props, width = _b.width, height = _b.height, errorFontSize = _b.errorFontSize, errorColor = _b.errorColor;
        return (<Animated.View style={[styles.container, { width: width, height: height }]}>
        <Animated.Text style={{ fontSize: labelFontSize, marginBottom: labelMarginBottom, color: this.getLabelColor() }}>
          {this.props.label}
        </Animated.Text>
        <Field setInputRef={this.setInputRef} secureTextEntry={this.props.secureTextEntry} keyboardType={this.props.keyboardType} textColor={this.props.textColor} borderBottomWidth={this.props.borderBottomWidth} inputFontSize={this.props.inputFontSize} onFocus={this.onFocus} onBlur={this.onBlur} onSubmitEditing={this.onSubmitEditing} onChangeText={this.onChangeText} inputBorderColor={this.getFieldColor()} nativeTextInputProps={this.props.nativeTextInputProps} initialValue={this.props.initialValue}/>
        <Text style={[styles.error, { fontSize: errorFontSize, color: errorColor }]}>{this.state.error}</Text>
      </Animated.View>);
    };
    Input.defaultProps = {
        onSuccessInputFieldColor: Colors.themeColor,
        textColor: Colors.defaultText,
        secureTextEntry: false,
        keyboardType: "default",
        width: "100%",
        height: 84,
        maxLabelFontSize: 14,
        minLabelFontSize: 12,
        maxLabelMarginBottom: isWeb ? 16 : 0,
        minLabelMarginBottom: isWeb ? -24 : isAndroid ? -34 : -28,
        inputFontSize: 14,
        errorFontSize: 12,
        errorColor: Colors.error,
        borderBottomWidth: 1,
    };
    return Input;
}(React.PureComponent));
var Field = /** @class */ (function (_super) {
    __extends(Field, _super);
    function Field() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Field.prototype.render = function () {
        var _a = this.props, initialValue = _a.initialValue, secureTextEntry = _a.secureTextEntry, keyboardType = _a.keyboardType, textColor = _a.textColor, nativeTextInputProps = _a.nativeTextInputProps, borderBottomWidth = _a.borderBottomWidth, inputFontSize = _a.inputFontSize, onFocus = _a.onFocus, onBlur = _a.onBlur, onChangeText = _a.onChangeText, inputBorderColor = _a.inputBorderColor, onSubmitEditing = _a.onSubmitEditing, setInputRef = _a.setInputRef;
        return (<TextInput ref={setInputRef} defaultValue={initialValue} keyboardType={keyboardType} style={[
            styles.textInput,
            { borderBottomColor: inputBorderColor, color: textColor, borderBottomWidth: borderBottomWidth, fontSize: inputFontSize },
        ]} secureTextEntry={secureTextEntry} onFocus={onFocus} onBlur={onBlur} onChangeText={onChangeText} onSubmitEditing={onSubmitEditing} {...nativeTextInputProps}/>);
    };
    return Field;
}(React.Component));
var styles = StyleSheet.create({
    container: {
        justifyContent: "flex-end",
    },
    textInput: {
        borderBottomWidth: 1,
        paddingHorizontal: 0,
        paddingVertical: 8,
    },
    error: {
        height: 24,
    },
});
export default Input;
