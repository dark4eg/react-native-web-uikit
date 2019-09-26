/// <reference types="react" />
declare type Component = React.ReactNode;
export declare type IdType = string;
export declare type modalPropertiesType = {
    containerStyles: {
        top: string | number;
        left: string | number;
        width: string | number;
        height: string | number;
        backgroundColor?: string;
        borderRadius?: number;
        borderBottomLeftRadius?: number;
        borderBottomRightRadius?: number;
        borderTopLeftRadius?: number;
        borderTopRightRadius?: number;
    };
    id?: IdType;
    onBackdropPress?: Function;
    initialPosition?: string | number;
    dontShowBackdrop?: boolean;
    verticalDirection?: boolean;
    shadow?: number;
};
declare type onShowModal = (Component: Component, props: modalPropertiesType) => void;
declare type onHideModal = (id: IdType) => void;
declare type onChangeModalPosition = (id: IdType, positionShift: string | number) => void;
declare type onStretchModal = (id: IdType, stretchingValue?: string | number) => void;
interface ISubscriber {
    subscribeShowModal(fn: onShowModal): void;
    showModal(Component: Component, containerStyles?: any): void;
}
declare class Subscriber implements ISubscriber {
    private onShowModal?;
    private onHideModal?;
    private onStretchModal?;
    private onChangeModalPosition?;
    subscribeShowModal: (fn: onShowModal) => void;
    subscribeHideModal: (fn: onHideModal) => void;
    subscribeChangeModalPosition: (fn: onChangeModalPosition) => void;
    subscribeStretchModal: (fn: onStretchModal) => void;
    showModal: (Component: import("react").ReactNode, properties: modalPropertiesType) => void;
    changeModalPosition: (id: string, positionShift: import("react").ReactText) => void;
    stretchModal: (id: string, stretchingValue?: string | number | undefined) => void;
    hideModal: (id?: string) => void;
}
declare const _default: Subscriber;
export default _default;
