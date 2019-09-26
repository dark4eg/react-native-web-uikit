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
import MapPlaceholderIcon from "../Icons/MapPlaceholderIcon";
import Paragraph from "./Paragraph";
import { colorTheme } from "../../Themes/Colors";
var MapPlaceholder = /** @class */ (function (_super) {
    __extends(MapPlaceholder, _super);
    function MapPlaceholder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            colors: colorTheme,
        };
        return _this;
    }
    MapPlaceholder.prototype.render = function () {
        var theme = this.state.colors[this.props.theme];
        return (<View style={[styles.container, { backgroundColor: theme.background }]}>
        <View style={styles.mapIconContainer}>
          <MapPlaceholderIcon color={theme.defaultText} width={150} height={150}/>
        </View>
        <Paragraph lines={this.props.lines} theme={this.props.theme}/>
      </View>);
    };
    MapPlaceholder.defaultProps = {
        lines: 5,
        theme: "light",
    };
    return MapPlaceholder;
}(React.PureComponent));
var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
    },
    mapIconContainer: {
        flex: 1,
        height: 300,
        alignItems: "center",
        justifyContent: "center",
    },
});
export default MapPlaceholder;
