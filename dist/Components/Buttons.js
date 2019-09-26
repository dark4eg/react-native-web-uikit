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
import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../Themes/Colors";
import createShadow from "../Themes/Shadow";
import LinearGradient from "./LinearGradient";
var linearGradientStyles = function (props) {
    var commonStyles = {
        borderRadius: props.borderRadius || 4,
        width: props.width === undefined ? "100%" : props.width,
        height: props.height || 44,
        marginVertical: props.marginVertical,
        marginHorizontal: props.marginHorizontal,
        alignItems: "center",
    };
    if (Platform.OS === "web") {
        return commonStyles;
    }
    return commonStyles;
};
var buttonContainerStyles = function (props) { return ({
    width: props.width || "100%",
    height: props.height || 44,
    borderRadius: props.borderRadius || 4,
    borderWidth: props.borderWidth,
    borderColor: props.borderColor,
    marginVertical: props.marginVertical,
    marginHorizontal: props.marginHorizontal,
}); };
var GradientButtonWithChildren = /** @class */ (function (_super) {
    __extends(GradientButtonWithChildren, _super);
    function GradientButtonWithChildren() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PRESS_IN_SHADOW = 1;
        _this.PRESS_OUT_SHADOW = 4;
        _this.setShadow = function (size) { return createShadow(size); };
        _this.state = {
            shadow: _this.setShadow(_this.PRESS_OUT_SHADOW),
        };
        _this.setColor = function (gradientColor) {
            if (_this.props.disabled)
                return Colors.palette.veryVeryLightGray;
            return gradientColor;
        };
        _this.handlePressIn = function () {
            _this.setState({ shadow: _this.setShadow(_this.PRESS_IN_SHADOW) }, _this.props.onPressIn);
        };
        _this.handlePressOut = function () {
            _this.setState({ shadow: _this.setShadow(_this.PRESS_OUT_SHADOW) }, _this.props.onPressOut);
        };
        return _this;
    }
    GradientButtonWithChildren.prototype.render = function () {
        var _a = this.props, disabled = _a.disabled, onPress = _a.onPress, onLongPress = _a.onLongPress, gradientStartColor = _a.gradientStartColor, gradientEndColor = _a.gradientEndColor;
        return (<LinearGradient start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }} gradientStartColor={this.setColor(gradientStartColor)} gradientEndColor={this.setColor(gradientEndColor)} style={[styles.linearGradient, linearGradientStyles(this.props), this.state.shadow]}>
        <TouchableOpacity testID={this.props.testID} style={[
            styles.buttonContainer,
            buttonContainerStyles(__assign({}, this.props, { marginVertical: 0, marginHorizontal: 0 })),
        ]} onPress={onPress} onLongPress={onLongPress} onPressIn={this.handlePressIn} onPressOut={this.handlePressOut} disabled={disabled}>
          {this.props.children}
        </TouchableOpacity>
      </LinearGradient>);
    };
    GradientButtonWithChildren.defaultProps = {
        gradientStartColor: Colors.themeGradient.gradientColor1,
        gradientEndColor: Colors.themeGradient.gradientColor2,
    };
    return GradientButtonWithChildren;
}(React.PureComponent));
export { GradientButtonWithChildren };
var GradientButton = /** @class */ (function (_super) {
    __extends(GradientButton, _super);
    function GradientButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.setColor = function () {
            if (_this.props.disabled) {
                return Colors.disable;
            }
            return _this.props.textColor || Colors.buttonText;
        };
        return _this;
    }
    GradientButton.prototype.render = function () {
        var label = this.props.label;
        return (<GradientButtonWithChildren {...this.props}>
        <Text style={[styles.buttonLabel, { color: this.setColor() }]}>{label}</Text>
      </GradientButtonWithChildren>);
    };
    GradientButton.defaultProps = {
        gradientStartColor: Colors.themeGradient.gradientColor1,
        gradientEndColor: Colors.themeGradient.gradientColor2,
    };
    return GradientButton;
}(React.PureComponent));
export { GradientButton };
export var TransparentButtonWithLink = function (props) {
    var onPress = props.onPress, label = props.label, link = props.link, disabled = props.disabled, onLongPress = props.onLongPress, onPressIn = props.onPressIn, onPressOut = props.onPressOut;
    return (<View style={[styles.buttonContainer, buttonContainerStyles(props), { flexDirection: "row" }]}>
      <Text style={[styles.buttonText, { color: props.textColor || Colors.buttonText }]}>{label}</Text>
      <TouchableOpacity testID={props.testID} disabled={disabled} onPressIn={onPressIn} onPress={onPress} onPressOut={onPressOut} onLongPress={onLongPress}>
        <Text style={[styles.buttonLinkText, { color: props.linkColor || Colors.buttonText }]}>{link}</Text>
      </TouchableOpacity>
    </View>);
};
export var TransparentButtonWithChildren = function (props) {
    var onPressIn = props.onPressIn, onPress = props.onPress, onPressOut = props.onPressOut, disabled = props.disabled, children = props.children, onLongPress = props.onLongPress;
    return (<TouchableOpacity testID={props.testID} style={[styles.buttonContainer, buttonContainerStyles(props)]} onPressIn={onPressIn} onPress={onPress} onPressOut={onPressOut} onLongPress={onLongPress} disabled={disabled}>
      {children}
    </TouchableOpacity>);
};
export var TransparentButton = function (props) {
    var label = props.label;
    return (<TransparentButtonWithChildren {...props}>
      <Text style={[styles.buttonLabel, { color: props.textColor || Colors.buttonText }]}>{label}</Text>
    </TransparentButtonWithChildren>);
};
var styles = StyleSheet.create({
    linearGradient: __assign({}, createShadow()),
    buttonContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: Colors.buttonText,
    },
    buttonLabel: {
        color: Colors.buttonText,
    },
    buttonLinkText: {
        textDecorationLine: "underline",
        color: Colors.buttonText,
    },
    text: {
        color: Colors.buttonText,
    },
});
