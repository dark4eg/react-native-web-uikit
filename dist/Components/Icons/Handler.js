import * as React from "react";
import { Svg, Path } from "react-native-svg";
export default (function (_a) {
    var width = _a.width, height = _a.height, color = _a.color;
    return (<Svg width={width || 30} height={height || 15} viewBox="0 0 20 10">
    <Path fill="none" fillRule="nonzero" stroke={color} strokeLinecap="square" strokeWidth="4" d="M1 1h16"/>
  </Svg>);
});
