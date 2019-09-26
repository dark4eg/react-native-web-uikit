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
import { View } from "react-native";
import Subscriber from "../Subscriber";
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentDidMount = function () {
            if (_this.props.isModalOpen) {
                setTimeout(_this.showModal, 500);
            }
        };
        _this.componentWillReceiveProps = function (nextProps) {
            if (!nextProps.isModalOpen)
                return _this.hideAllModals();
            if (nextProps.isModalOpen) {
                return _this.showModal();
            }
        };
        _this.showModal = function () {
            Subscriber.showModal(_this.props.component, {
                id: _this.props.id,
                containerStyles: _this.props.containerStyles,
                shadow: _this.props.shadow,
                dontShowBackdrop: _this.props.dontShowBackdrop,
                verticalDirection: _this.props.verticalDirection,
                onBackdropPress: _this.props.onBackdropPress,
                initialPosition: _this.props.initialPosition,
            });
        };
        _this.hideAllModals = function () {
            Subscriber.hideModal();
        };
        return _this;
    }
    Modal.prototype.render = function () {
        return <View />;
    };
    return Modal;
}(React.PureComponent));
export default Modal;
