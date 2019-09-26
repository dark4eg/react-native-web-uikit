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
import { FlatList, StyleSheet, View } from "react-native";
// tslint:disable-next-line:import-name
import Shimmer from "react-native-shimmer-placeholder";
import { isWeb } from "../../Helpers/platform";
import { colorTheme } from "../../Themes/Colors";
var CardsPlaceholder = /** @class */ (function (_super) {
    __extends(CardsPlaceholder, _super);
    function CardsPlaceholder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            colors: colorTheme,
        };
        _this.renderItem = function () {
            var _a = _this.props, margin = _a.margin, cardHeight = _a.cardHeight;
            var height = cardHeight;
            if (isWeb) {
                return (<Shimmer>
          <rect x="80" y={margin} rx="3" ry="3" width="250" height={height}/>
        </Shimmer>);
            }
            return <Shimmer autoRun={true} style={[styles.card, { marginVertical: margin, height: height }]}/>;
        };
        _this.renderPlaceholderLines = function () {
            var placeholderCards = [];
            var cards = _this.props.cards;
            var i;
            for (i = 0; i < cards; i++) {
                placeholderCards.push({ card: "cardPlaceholder" });
            }
            return placeholderCards;
        };
        return _this;
    }
    CardsPlaceholder.prototype.render = function () {
        var theme = this.state.colors[this.props.theme];
        return (<View style={[styles.container, { backgroundColor: theme.background }]}>
        <FlatList style={{ width: "100%" }} data={this.renderPlaceholderLines()} renderItem={this.renderItem} showsVerticalScrollIndicator={false}/>
      </View>);
    };
    CardsPlaceholder.defaultProps = {
        lines: 5,
        margin: 12,
        cardHeight: 250,
        theme: "light",
    };
    return CardsPlaceholder;
}(React.PureComponent));
export default CardsPlaceholder;
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 4,
    },
    card: {
        width: "100%",
    },
});
