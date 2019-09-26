import * as React from "react";
import { modalPropertiesType } from "../Subscriber";
interface ModalProps extends modalPropertiesType {
    component: React.ReactNode;
    isModalOpen: boolean;
}
declare class Modal extends React.PureComponent<ModalProps> {
    componentDidMount: () => void;
    componentWillReceiveProps: (nextProps: ModalProps) => void;
    render(): JSX.Element;
    showModal: () => void;
    hideAllModals: () => void;
}
export default Modal;
