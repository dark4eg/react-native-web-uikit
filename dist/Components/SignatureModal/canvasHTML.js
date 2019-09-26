import { canvasScript } from "./canvasScript";
import { isWeb } from "../../Helpers/platform";
import { Dimensions } from "react-native";
var height = Dimensions.get("window").height;
var canvas = isWeb
    ? "<canvas id=\"signatureCanvas\" height=" + height * 0.8 + "></canvas>"
    : "<canvas id=\"signatureCanvas\"></canvas>";
export var canvasHTML = "<html>\n    <body>\n      " + canvas + "\n      <script>\n        " + canvasScript + "\n      </script>\n    </body>\n  </html>";
