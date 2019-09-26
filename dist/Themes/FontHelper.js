import { PixelRatio } from "react-native";
export var normalize = function (size) {
    return Math.round(PixelRatio.roundToNearestPixel(size));
};
