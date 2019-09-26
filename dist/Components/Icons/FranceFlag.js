import * as React from "react";
import { Svg, G, Path } from "react-native-svg";
export default (function (_a) {
    var height = _a.height, width = _a.width;
    return (<Svg height={height || 17} width={width || 23} viewBox="0 0 23 17">
      <G fill="none" fillRule="evenodd">
        <Path d="M1.5 0h6.167v17H1.5A1.5 1.5 0 0 1 0 15.5v-14A1.5 1.5 0 0 1 1.5 0z" fill="#1035BB"/>
        <Path d="M7.667 0h7.667v17H7.667z" fill="#FFF"/>
        <Path d="M15.333 0H21.5A1.5 1.5 0 0 1 23 1.5v14a1.5 1.5 0 0 1-1.5 1.5h-6.167V0z" fill="#A94442"/>
      </G>
    </Svg>);
});
