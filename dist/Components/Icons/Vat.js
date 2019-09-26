import * as React from "react";
import { Svg, Text, TSpan } from "react-native-svg";
export default (function (_a) {
    var width = _a.width, height = _a.height, color = _a.color;
    return (<Svg width={width || 27} height={height || 10} viewBox="0 0 27 3">
      <Text fill={color || "#29464D"} fillRule="evenodd" fontFamily="Roboto-Medium, Roboto" fontSize="14" fontWeight="400" transform="translate(-326 -540)">
        <TSpan x="326" y="546">
          VAT
        </TSpan>
      </Text>
    </Svg>);
});
