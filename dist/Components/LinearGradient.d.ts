import * as React from "react";
declare type Props = {
    gradientStartColor: string;
    gradientEndColor: string;
    children?: React.ReactChild;
    start?: {
        x: number;
        y: number;
    };
    end?: {
        x: number;
        y: number;
    };
    style?: any;
};
declare class Gradient extends React.PureComponent<Props> {
    render(): JSX.Element;
}
export default Gradient;
