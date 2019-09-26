import * as React from "react";
import { Svg, G, Path } from "react-native-svg";
export default (function (_a) {
    var width = _a.width, height = _a.height, color = _a.color;
    return (<Svg width={width || 44} height={height || 40} viewBox="0 0 24 24">
      <G fill={color || "green"} fillRule="evenodd" strokeWidth="1.5" transform="translate(-1 1)">
        <Path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        <Path d="M0 0h24v24H0z" fill="none"/>
      </G>
    </Svg>);
});
