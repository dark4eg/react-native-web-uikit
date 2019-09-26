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
import Colors, { colorTheme } from "../../Themes/Colors";
import Fonts from "../../Themes/Fonts";
import { parseDataUrl } from "../../Helpers/regexHelpers";
import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { TransparentButtonWithChildren } from "../Buttons";
import { canvasHTML } from "./canvasHTML";
import WebView from "react-native-webview";
import { isWeb } from "../../Helpers/platform";
var SignatureModal = /** @class */ (function (_super) {
    __extends(SignatureModal, _super);
    function SignatureModal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            signatureData: undefined,
            isSignSubmitted: false,
            colors: colorTheme,
            resetCount: 0,
        };
        _this.renderButtons = function () {
            var theme = _this.state.colors[_this.props.theme];
            var isDisabled = _this.state.isSignSubmitted || !_this.state.signatureData;
            var submitButtonTextColor = isDisabled ? theme.palette.lightGray : theme.themeColor;
            return (<View style={styles.buttonsContainer}>
        <TransparentButtonWithChildren onPress={_this.resetWebView} width={60}>
          <Text style={[styles.buttonText, { color: theme.defaultText, width: 60 }]}>
            {_this.props.cancelButtonLabel.toUpperCase()}
          </Text>
        </TransparentButtonWithChildren>
        <TransparentButtonWithChildren disabled={isDisabled} onPress={_this.sendSignature} width={40}>
          <Text style={[styles.buttonText, { color: submitButtonTextColor, width: 40 }]}>
            {_this.props.submitButtonLabel.toUpperCase()}
          </Text>
        </TransparentButtonWithChildren>
      </View>);
        };
        _this.renderNativeModal = function () { return (<Modal isVisible={_this.props.isVisible} onBackdropPress={_this.props.onBackdropPress} onModalShow={_this.unSubmitSignApply}>
      {_this.renderSignView()}
    </Modal>); };
        _this.renderWebModal = function () { return (
        // @ts-ignore: visible right name for prop if import from modal-react-native-web
        <Modal visible={_this.props.isVisible} onBackdropPress={_this.props.onBackdropPress} onModalShow={_this.unSubmitSignApply}>
      {_this.renderSignView()}
    </Modal>); };
        _this.renderSignView = function () {
            var theme = _this.state.colors[_this.props.theme];
            return (<View style={[styles.container, { backgroundColor: theme.background }]}>
        {_this.renderHeaderText()}
        {_this.renderHelperText()}
        <View style={[styles.webViewContainer, { backgroundColor: theme.webViewBackground }]}>
          <WebView ref={_this.setWebViewRef} onMessage={_this.onMessage} style={[styles.webView, { backgroundColor: theme.webViewBackground }]} automaticallyAdjustContentInsets={false} javaScriptEnabled={true} source={{ html: canvasHTML }} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} key={_this.state.resetCount}/>
        </View>
        {_this.renderButtons()}
      </View>);
        };
        _this.renderHeaderText = function () {
            var theme = _this.state.colors[_this.props.theme];
            if (_this.props.headerText) {
                return <Text style={[styles.headerText, { color: theme.defaultText }]}>{_this.props.headerText}</Text>;
            }
            return;
        };
        _this.renderHelperText = function () {
            var theme = _this.state.colors[_this.props.theme];
            if (_this.props.helperText) {
                return <Text style={[styles.helperText, { color: theme.defaultText }]}>{_this.props.helperText}</Text>;
            }
            return;
        };
        _this.setWebViewRef = function (ref) {
            _this.webView = ref;
            if (_this.webView && !isWeb) {
                _this.webView.reload();
            }
        };
        _this.onMessage = function (message) {
            var signatureData = parseDataUrl(message.nativeEvent.data);
            _this.setState({ signatureData: signatureData });
        };
        _this.sendSignature = function () {
            var signatureData = _this.state.signatureData;
            _this.submitSignApply();
            _this.props.onSignApply(signatureData);
        };
        _this.resetWebView = function () {
            _this.setState({ signatureData: undefined }, _this.unSubmitSignApply);
            _this.setState({ resetCount: _this.state.resetCount + 1 });
        };
        _this.submitSignApply = function () {
            _this.setState({ isSignSubmitted: true });
        };
        _this.unSubmitSignApply = function () {
            _this.setState({ isSignSubmitted: false });
        };
        return _this;
    }
    SignatureModal.prototype.render = function () {
        return <View>{isWeb ? this.renderWebModal() : this.renderNativeModal()}</View>;
    };
    SignatureModal.defaultProps = {
        backgroundColor: Colors.palette.white,
        submitButtonLabel: "ok",
        cancelButtonLabel: "cancel",
        theme: "light",
    };
    return SignatureModal;
}(React.PureComponent));
export default SignatureModal;
var styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 10,
        borderRadius: 5,
    },
    webViewContainer: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 5,
        padding: 2,
        borderColor: Colors.palette.veryLightGray,
    },
    webView: {
        flex: 1,
        borderRadius: 5,
    },
    buttonsContainer: {
        marginTop: 25,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    headerText: __assign({}, Fonts.style.Title),
    helperText: __assign({}, Fonts.style.SubTitle2),
    buttonText: __assign({ flex: 1 }, Fonts.style.Button, { textAlign: "right" }),
});
