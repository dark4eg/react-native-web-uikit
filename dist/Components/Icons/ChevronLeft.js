import * as React from "react";
import { Svg, G, Path } from "react-native-svg";
export default (function (_a) {
    var width = _a.width, height = _a.height, color = _a.color;
    return (<Svg width={width || 8} height={height || 12} viewBox="0 0 8 12">
      <G fill="none" fillRule="evenodd">
        <Path fill={color} d="M7.4 1.4L6 0 0 6l6 6 1.4-1.4L2.8 6z"/>
        <Path d="M16-6H-8v24h24z"/>
      </G>
    </Svg>);
});
