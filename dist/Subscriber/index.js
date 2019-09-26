var Subscriber = /** @class */ (function () {
    function Subscriber() {
        var _this = this;
        this.subscribeShowModal = function (fn) {
            _this.onShowModal = fn;
        };
        this.subscribeHideModal = function (fn) {
            _this.onHideModal = fn;
        };
        this.subscribeChangeModalPosition = function (fn) {
            _this.onChangeModalPosition = fn;
        };
        this.subscribeStretchModal = function (fn) {
            _this.onStretchModal = fn;
        };
        this.showModal = function (Component, properties) {
            if (_this.onShowModal) {
                _this.onShowModal(Component, properties);
            }
        };
        this.changeModalPosition = function (id, positionShift) {
            if (_this.onChangeModalPosition) {
                _this.onChangeModalPosition(id, positionShift);
            }
        };
        this.stretchModal = function (id, stretchingValue) {
            if (_this.onStretchModal) {
                _this.onStretchModal(id, stretchingValue);
            }
        };
        this.hideModal = function (id) {
            if (id === void 0) { id = "0"; }
            if (_this.onHideModal) {
                _this.onHideModal(id);
            }
        };
    }
    return Subscriber;
}());
export default new Subscriber();
