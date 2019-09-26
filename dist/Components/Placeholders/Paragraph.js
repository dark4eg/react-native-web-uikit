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
import { StyleSheet, View } from "react-native";
// tslint:disable-next-line:import-name
import Shimmer from "react-native-shimmer-placeholder";
import { isWeb } from "../../Helpers/platform";
import { colorTheme } from "../../Themes/Colors";
var ParagraphPlaceholder = /** @class */ (function (_super) {
    __extends(ParagraphPlaceholder, _super);
    function ParagraphPlaceholder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            colors: colorTheme,
        };
        _this.renderNativePlaceholderLines = function () {
            var placeholderLines = [];
            var i;
            for (i = 0; i < _this.props.lines; i++) {
                placeholderLines.push(<Shimmer autoRun={true} style={styles.line}/>);
            }
            return placeholderLines;
        };
        _this.renderWebPlaceholderLines = function () {
            var placeholderLines = [];
            var i;
            for (i = 0; i < _this.props.lines; i++) {
                placeholderLines.push(<rect x="80" y={10 * i} rx="3" ry="3" width="250" height="6"/>);
            }
            return placeholderLines;
        };
        _this.renderWebPlaceholder = function () {
            return <Shimmer>{_this.renderWebPlaceholderLines()}</Shimmer>;
        };
        return _this;
    }
    ParagraphPlaceholder.prototype.render = function () {
        var theme = this.state.colors[this.props.theme];
        return (<View style={[styles.container, { backgroundColor: theme.background }]}>
        {isWeb ? this.renderWebPlaceholder() : this.renderNativePlaceholderLines()}
      </View>);
    };
    ParagraphPlaceholder.defaultProps = {
        lines: 5,
        theme: "light",
    };
    return ParagraphPlaceholder;
}(React.PureComponent));
export default ParagraphPlaceholder;
var styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    webContainer: {
        width: "90%",
    },
    line: {
        margin: 8,
    },
});
