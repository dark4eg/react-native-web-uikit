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
import { StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
var Gradient = /** @class */ (function (_super) {
    __extends(Gradient, _super);
    function Gradient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gradient.prototype.render = function () {
        var _a = this.props, gradientStartColor = _a.gradientStartColor, gradientEndColor = _a.gradientEndColor, start = _a.start, end = _a.end, style = _a.style;
        return (<LinearGradient start={start || { x: 0, y: 1 }} end={end || { x: 1, y: 1 }} colors={[gradientStartColor, gradientEndColor]} style={style || styles.container}>
        {this.props.children}
      </LinearGradient>);
    };
    return Gradient;
}(React.PureComponent));
var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
});
export default Gradient;
