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
import { StyleSheet, View, Dimensions, Animated } from "react-native";
import Subscriber from "../Subscriber";
import createShadow from "../Themes/Shadow";
import Colors from "../Themes/Colors";
var windowHeight = Dimensions.get("window").height;
var windowWidth = Dimensions.get("window").width;
var RootWrapper = /** @class */ (function (_super) {
    __extends(RootWrapper, _super);
    function RootWrapper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.INITIAL_MODAL_HORIZONTAL_POSITION = -windowWidth;
        _this.INITIAL_MODAL_VERTICAL_POSITION = 2 * windowHeight;
        _this.state = {
            showModal: false,
            modals: [],
            modalVerticalPosition: new Animated.Value(0),
            showBackDrop: false,
        };
        _this.componentDidMount = function () {
            Subscriber.subscribeShowModal(_this.showModal);
            Subscriber.subscribeHideModal(_this.deleteModalsById);
            Subscriber.subscribeStretchModal(_this.animateModalStretch);
            Subscriber.subscribeChangeModalPosition(_this.changeModalPosition);
        };
        _this.renderBackDrop = function () {
            if (_this.state.showBackDrop) {
                return (<View style={[styles.backDropContainer, __assign({}, createShadow(_this.state.modals[0].shadow - 1))]} onStartShouldSetResponder={function () { return true; }} onResponderGrant={_this.onBackDropPress}/>);
            }
            return undefined;
        };
        _this.onBackDropPress = function () {
            var modal = _this.state.modals[0];
            if (modal) {
                if (modal.onBackdropPress) {
                    return modal.onBackdropPress();
                }
                if (modal.closeOnBackdropPress) {
                    return _this.animateModalsDisappearanceSequence(0);
                }
            }
        };
        _this.renderModals = function () {
            if (_this.state.modals.length > 0) {
                // @ts-ignore
                return _this.state.modals.map(_this.renderModal);
            }
            return undefined;
        };
        _this.renderModal = function (modal, index) {
            if (modal && modal.verticalDirection)
                return _this.renderVerticalModal(modal, index);
            return _this.renderHorizontalModal(modal, index);
        };
        _this.renderVerticalModal = function (modal, index) {
            _this.animateModalVerticalAppearance(index);
            return (<Animated.View key={index} style={[
                styles.modalContainer,
                modal.containerStyles,
                __assign({ top: modal.position, left: modal.containerStyles.left, width: modal.containerStyles.width, height: modal.containerStyles.height }, createShadow(modal.shadow)),
            ]} onStartShouldSetResponder={function () { return true; }} onResponderGrant={function () { return _this.animateModalsDisappearanceSequence(index + 1); }}>
        {modal.component}
      </Animated.View>);
        };
        _this.renderHorizontalModal = function (modal, index) {
            _this.animateModalHorizontalAppearance(index);
            return (<Animated.View key={index} style={[
                styles.modalContainer,
                modal.containerStyles,
                __assign({ top: modal.containerStyles.top, left: modal.position, width: modal.containerStyles.width, height: modal.containerStyles.height }, createShadow(modal.shadow)),
            ]} onStartShouldSetResponder={function () { return true; }} onResponderGrant={function () { return _this.animateModalsDisappearanceSequence(index + 1); }}>
        {modal.component}
      </Animated.View>);
        };
        _this.animateModalVerticalAppearance = function (index) {
            var modal = _this.state.modals[index];
            var _a = _this.animateAppearance(modal), animateWidth = _a.animateWidth, animateHeight = _a.animateHeight, animateLeft = _a.animateLeft, animateVerticalPosition = _a.animateVerticalPosition;
            if (modal) {
                Animated.parallel([animateWidth(), animateHeight(), animateLeft(), animateVerticalPosition()]).start();
            }
        };
        _this.animateModalHorizontalAppearance = function (index) {
            var modal = _this.state.modals[index];
            var _a = _this.animateAppearance(modal), animateWidth = _a.animateWidth, animateHeight = _a.animateHeight, animateTop = _a.animateTop, animateHorizontalPosition = _a.animateHorizontalPosition;
            if (modal) {
                Animated.parallel([animateWidth(), animateHeight(), animateTop(), animateHorizontalPosition()]).start();
            }
        };
        _this.animateAppearance = function (modal) { return ({
            animateWidth: function () {
                return Animated.timing(modal.containerStyles.width, {
                    toValue: modal.initialWidth,
                    duration: 200,
                });
            },
            animateHeight: function () {
                return Animated.timing(modal.containerStyles.height, {
                    toValue: modal.initialHeight,
                    duration: 200,
                });
            },
            animateLeft: function () {
                return Animated.timing(modal.containerStyles.left, {
                    toValue: modal.initialLeft,
                    duration: 200,
                });
            },
            animateTop: function () {
                return Animated.timing(modal.containerStyles.top, {
                    toValue: modal.initialTop,
                    duration: 200,
                });
            },
            animateVerticalPosition: function () {
                return Animated.spring(modal.position, {
                    toValue: modal.containerStyles.top,
                    bounciness: 12,
                });
            },
            animateHorizontalPosition: function () {
                return Animated.spring(modal.position, {
                    toValue: modal.containerStyles.left,
                    bounciness: 12,
                });
            },
        }); };
        _this.animateModalStretch = function (id, stretchingValue) {
            if (stretchingValue === void 0) { stretchingValue = "5%"; }
            var modalIndex = _this.findModalIndexById(id);
            var modal = _this.state.modals[modalIndex];
            if (modal) {
                if (modal.verticalDirection)
                    return _this.animateModalVerticalStretch(modal, stretchingValue);
                return _this.animateModalHorizontalStretch(modal, stretchingValue);
            }
        };
        _this.animateModalVerticalStretch = function (modal, stretchingValue) {
            var stretchAnimation = _this.animateVerticalStretch(modal, stretchingValue);
            var animateWidth = stretchAnimation.animateWidth, animateHeight = stretchAnimation.animateHeight, animateLeft = stretchAnimation.animateLeft, animatePosition = stretchAnimation.animatePosition;
            Animated.parallel([animateWidth(), animateHeight(), animateLeft(), animatePosition()]).start();
        };
        _this.animateVerticalStretch = function (modal, stretchingValue) { return ({
            animateWidth: function () {
                return Animated.timing(modal.containerStyles.width, {
                    toValue: modal.initialWidth - _this.parseModalHorizontalPositionStatement(stretchingValue),
                    duration: 200,
                });
            },
            animateHeight: function () {
                return Animated.timing(modal.containerStyles.height, {
                    toValue: modal.initialHeight + _this.parseModalVerticalPositionStatement(stretchingValue),
                    duration: 200,
                });
            },
            animateLeft: function () {
                return Animated.timing(modal.containerStyles.left, {
                    toValue: modal.initialLeft + _this.parseModalHorizontalPositionStretchingStatement(stretchingValue),
                    duration: 200,
                });
            },
            animatePosition: function () {
                return Animated.timing(modal.position, {
                    toValue: modal.containerStyles.top - _this.parseModalVerticalPositionStretchingStatement(stretchingValue),
                    duration: 200,
                });
            },
        }); };
        _this.animateModalHorizontalStretch = function (modal, stretchingValue) {
            var stretchAnimation = _this.animateHorizontalStretch(modal, stretchingValue);
            var animateWidth = stretchAnimation.animateWidth, animateHeight = stretchAnimation.animateHeight, animateTop = stretchAnimation.animateTop, animatePosition = stretchAnimation.animatePosition;
            Animated.parallel([animateWidth(), animateHeight(), animateTop(), animatePosition()]).start();
        };
        _this.animateHorizontalStretch = function (modal, stretchingValue) { return ({
            animateWidth: function () {
                return Animated.timing(modal.containerStyles.width, {
                    toValue: modal.initialWidth + _this.parseModalHorizontalPositionStatement(stretchingValue),
                    duration: 200,
                });
            },
            animateHeight: function () {
                return Animated.timing(modal.containerStyles.height, {
                    toValue: modal.initialHeight - _this.parseModalVerticalPositionStatement(stretchingValue),
                    duration: 200,
                });
            },
            animateTop: function () {
                return Animated.timing(modal.containerStyles.top, {
                    toValue: modal.initialTop + _this.parseModalVerticalPositionStretchingStatement(stretchingValue),
                    duration: 200,
                });
            },
            animatePosition: function () {
                return Animated.timing(modal.position, {
                    toValue: modal.containerStyles.left - _this.parseModalHorizontalPositionStretchingStatement(stretchingValue),
                    duration: 200,
                });
            },
        }); };
        _this.changeModalPosition = function (id, position) {
            var modalIndex = _this.findModalIndexById(id);
            var modals = _this.state.modals.map(function (modal) {
                if (modal.id === id && modal.verticalDirection)
                    return _this.changeModalVerticalPosition(modal, position);
                if (modal.id === id)
                    return _this.changeModalHorizontalPosition(modal, position);
                return modal;
            });
            _this.setState({ modals: modals }, function () {
                if (modals[modalIndex] && modals[modalIndex].verticalDirection) {
                    return _this.animateModalVerticalAppearance(modalIndex);
                }
                return _this.animateModalHorizontalAppearance(modalIndex);
            });
        };
        _this.changeModalHorizontalPosition = function (modal, position) {
            return __assign({}, modal, { containerStyles: __assign({}, modal.containerStyles, { left: modal.containerStyles.left + _this.parseModalHorizontalPositionStatement(position) }) });
        };
        _this.changeModalVerticalPosition = function (modal, position) {
            return __assign({}, modal, { containerStyles: __assign({}, modal.containerStyles, { top: modal.containerStyles.top + _this.parseModalVerticalPositionStatement(position) }) });
        };
        _this.findModalIndexById = function (id) { return _this.state.modals.findIndex(function (modal) { return modal.id === id; }); };
        _this.deleteModalsById = function (id) {
            var modalIndex = _this.findModalIndexById(id);
            if (!id)
                modalIndex = 0;
            if (modalIndex >= 0)
                _this.animateModalsDisappearanceSequence(modalIndex);
        };
        _this.animateModalsDisappearanceSequence = function (modalIndex) {
            var modals = _this.state.modals;
            var modalsToHide = modals.splice(modalIndex, modals.length);
            var sequenceOfModalDisappearanceAnimations = modalsToHide.map(_this.animateModalDisappearance);
            Animated.sequence(sequenceOfModalDisappearanceAnimations.reverse()).start(function () {
                return _this.deleteModals(modals, modalIndex);
            });
        };
        _this.animateModalDisappearance = function (modal) {
            if (modal.verticalDirection) {
                return Animated.timing(modal.position, {
                    toValue: modal.initialPosition,
                    duration: 150,
                });
            }
            return Animated.timing(modal.position, {
                toValue: modal.initialPosition,
                duration: 150,
            });
        };
        _this.deleteModals = function (modals, modalIndex) {
            _this.setState({
                showBackDrop: _this.isModalBackDropShown(modalIndex),
                modals: modals.slice(),
            });
        };
        _this.isModalBackDropShown = function (modalIndex) {
            if (modalIndex === 0)
                return false;
            return _this.state.showBackDrop;
        };
        _this.showModal = function (component, properties) {
            if (_this.isModalAlreadyExist(properties.id))
                return undefined;
            return _this.setState({
                showBackDrop: !properties.dontShowBackdrop,
                modals: _this.state.modals.concat([_this.createCurrentModalState(component, properties)]),
            });
        };
        _this.createCurrentModalState = function (component, properties) {
            var containerStyles = _this.parseContainerStyles(properties.containerStyles);
            var initialModalPosition = _this.getInitialModalPosition(properties);
            return {
                component: component,
                id: properties.id || "0",
                onBackdropPress: properties.onBackdropPress,
                containerStyles: __assign({}, containerStyles, { top: _this.setTopModalValue(properties, containerStyles.top), left: _this.setLeftModalValue(properties, containerStyles.left), width: new Animated.Value(containerStyles.width), height: new Animated.Value(containerStyles.height) }),
                initialTop: containerStyles.top,
                initialWidth: containerStyles.width,
                initialHeight: containerStyles.height,
                initialLeft: containerStyles.left,
                initialPosition: initialModalPosition,
                closeOnBackdropPress: !properties.onBackdropPress,
                verticalDirection: !!properties.verticalDirection,
                position: new Animated.Value(initialModalPosition),
                shadow: properties.shadow || 12,
            };
        };
        _this.getInitialModalPosition = function (properties) {
            if (!properties.initialPosition && !properties.verticalDirection) {
                return _this.INITIAL_MODAL_HORIZONTAL_POSITION;
            }
            if (properties.initialPosition && !properties.verticalDirection) {
                return _this.parseModalHorizontalPositionStatement(properties.initialPosition);
            }
            if (properties.initialPosition && properties.verticalDirection) {
                return _this.parseModalVerticalPositionStatement(properties.initialPosition);
            }
            return _this.INITIAL_MODAL_VERTICAL_POSITION;
        };
        _this.setTopModalValue = function (properties, topValue) {
            if (properties.verticalDirection)
                return topValue;
            return new Animated.Value(topValue);
        };
        _this.setLeftModalValue = function (properties, leftValue) {
            if (properties.verticalDirection)
                return new Animated.Value(leftValue);
            return leftValue;
        };
        _this.isModalAlreadyExist = function (id) {
            if (id === void 0) { id = "0"; }
            return !!_this.state.modals.find(function (modal) { return modal.id === id; });
        };
        _this.parseContainerStyles = function (modalContainerStyles) {
            var top = modalContainerStyles.top, left = modalContainerStyles.left, width = modalContainerStyles.width, height = modalContainerStyles.height;
            return __assign({}, modalContainerStyles, { top: _this.parseModalVerticalPositionStatement(top), left: _this.parseModalHorizontalPositionStatement(left), width: _this.parseModalHorizontalPositionStatement(width), height: _this.parseModalVerticalPositionStatement(height) });
        };
        _this.parseModalHorizontalPositionStatement = function (statement) {
            if (typeof statement === "number")
                return statement;
            return (parseInt(statement) / 100) * windowWidth;
        };
        _this.parseModalVerticalPositionStatement = function (statement) {
            if (typeof statement === "number")
                return statement;
            return (parseInt(statement) / 100) * windowHeight;
        };
        _this.parseModalVerticalPositionStretchingStatement = function (statement) {
            if (typeof statement === "number")
                return statement / 2;
            return (parseInt(statement) / 100 / 2) * windowHeight;
        };
        _this.parseModalHorizontalPositionStretchingStatement = function (statement) {
            if (typeof statement === "number")
                return statement / 2;
            return (parseInt(statement) / 100 / 2) * windowWidth;
        };
        return _this;
    }
    RootWrapper.prototype.render = function () {
        return (<View style={this.props.styles}>
        {this.props.children}
        {this.renderBackDrop()}
        {this.renderModals()}
      </View>);
    };
    return RootWrapper;
}(React.PureComponent));
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    backDropContainer: {
        position: "absolute",
        width: windowWidth,
        height: windowHeight,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.shadow,
    },
    modalContainer: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: undefined,
    },
});
// @ts-ignore
export default RootWrapper;
