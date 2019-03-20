import * as React from "react";
import { Svg, Circle, G, Path } from "react-native-svg";
import { iconType } from "./iconType";

export default ({ width, height, color }: iconType) => {
  return (
    <Svg width={width || 20} height={height || 18} viewBox="0 0 20 18">
      <G fill="none" fill-rule="evenodd" transform="translate(-2 -3)">
        <Path d="M0 0h24v24H0z" />
        <Path
          fill={color}
          fill-rule="nonzero"
          d="M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 12v2H8v-4h8v2zm2-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4h-2z"
        />
        <Circle cx="18" cy="11.5" r="1" fill="#000" />
      </G>
    </Svg>
  );
};
