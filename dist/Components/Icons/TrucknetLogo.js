var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from "react";
import { Svg, G, Path, Defs, Stop, LinearGradient } from "react-native-svg";
// export default ({ height, width, color }: iconType) => (
//   <Svg width={width || 120} height={height || 22} viewBox="0 0 140 22">
//     <Defs>
//       <LinearGradient id="a" x1="0" y1="0" y2="100">
//         <Stop offset="0" stopColor="#2CCEB3" />
//         <Stop offset="1" stopColor="#2CCE62" />
//       </LinearGradient>
//     </Defs>
//     <G fill="none" fillRule="evenodd">
//       <Path
//         fill={color || "#1F3239"}
//         fillRule="nonzero"
//         d="M99.872.309l-2.94 10.903L93.134.308h-5.157L82.083 21.73h5.66l3.113-11.323 3.827 11.322h5.062L105.5.31h-5.628zm8.441 16.367l.936-3.46h7.915l1.302-4.887h-7.915l.8-2.945h8.987l1.49-5.076H107.13l-5.975 21.422h21.824l.93-3.432.432-1.623-16.028.001z"
//       />
//       <Path
//         fill={color || "#1F3239"}
//         d="M123.392.309l-1.381 5.075h5.344l1.352-5.076 2.99 10.506-8.705 10.915h5.787l4.413-16.345h5.385l1.387-5.076z"
//       />
//       <Path
//         fill="url(#a)"
//         fillRule="nonzero"
//         d="M34.228 6.029c.33-3.6-1.645-5.72-5.332-5.72h-9.54l-5.96 21.406h5.796l2.317-7.844h1.873l.469 7.87h6.003l-.944-8.877c3.564-1.298 5.063-4.037 5.32-6.836h-.002zm-5.958.799c-.157 1.721-1.698 2.275-2.587 2.275h-2.911l1.075-3.968h2.734c.982 0 1.803.462 1.69 1.693h-.001zM17.704.32l-1.36 5.034-5.05-.066L6.88 21.714H1.023L5.44 5.29H0L1.347.31 17.704.32zm31.01 0h5.824L50.902 13.1c-1.225 4.615-4.189 8.768-10.253 8.768s-8.01-4.096-6.705-8.92L37.547.308h5.82L39.61 13.533c-.58 2.123.046 3.383 1.801 3.383 1.872 0 3.033-1.629 3.528-3.473L48.713.32zm44.42-.013l-9.602 9.01 4.212 12.411-6.445-.007-2.561-8.098-2.82 2.553-1.473 5.564H68.45L74.378.319h5.84l-1.884 7h.15L85.746.31h7.387V.308zM63.306 14.332l5.664.869c-1.572 4.576-5.553 6.698-9.389 6.698-5.556 0-8.474-3.537-7.088-8.613l1.341-4.921C55.045 3.905 57.84 0 63.37 0c4.25 0 6.915 1.722 7.257 5.475l-5.482 2.06c.012-2.06-1.107-2.49-2.149-2.49-1.724 0-2.74 1.353-3.185 2.983l-1.572 5.875c-.45 1.6-.103 3.012 1.888 3.012 1.249 0 2.266-.707 3.179-2.582z"
//       />
//     </G>
//   </Svg>
// );
var TrucknetLogo = /** @class */ (function (_super) {
    __extends(TrucknetLogo, _super);
    function TrucknetLogo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TrucknetLogo.prototype.render = function () {
        var _a = this.props, height = _a.height, width = _a.width, color = _a.color;
        return (<Svg width={width || 120} height={height || 22} viewBox="0 0 140 22">
        <Defs>
          <LinearGradient id="a" x1="0" y1="0" y2="100">
            <Stop offset="0" stopColor="#2CCEB3"/>
            <Stop offset="1" stopColor="#2CCE62"/>
          </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
          <Path fill={color || "#1F3239"} fillRule="nonzero" d="M99.872.309l-2.94 10.903L93.134.308h-5.157L82.083 21.73h5.66l3.113-11.323 3.827 11.322h5.062L105.5.31h-5.628zm8.441 16.367l.936-3.46h7.915l1.302-4.887h-7.915l.8-2.945h8.987l1.49-5.076H107.13l-5.975 21.422h21.824l.93-3.432.432-1.623-16.028.001z"/>
          <Path fill={color || "#1F3239"} d="M123.392.309l-1.381 5.075h5.344l1.352-5.076 2.99 10.506-8.705 10.915h5.787l4.413-16.345h5.385l1.387-5.076z"/>
          <Path fill="url(#a)" fillRule="nonzero" d="M34.228 6.029c.33-3.6-1.645-5.72-5.332-5.72h-9.54l-5.96 21.406h5.796l2.317-7.844h1.873l.469 7.87h6.003l-.944-8.877c3.564-1.298 5.063-4.037 5.32-6.836h-.002zm-5.958.799c-.157 1.721-1.698 2.275-2.587 2.275h-2.911l1.075-3.968h2.734c.982 0 1.803.462 1.69 1.693h-.001zM17.704.32l-1.36 5.034-5.05-.066L6.88 21.714H1.023L5.44 5.29H0L1.347.31 17.704.32zm31.01 0h5.824L50.902 13.1c-1.225 4.615-4.189 8.768-10.253 8.768s-8.01-4.096-6.705-8.92L37.547.308h5.82L39.61 13.533c-.58 2.123.046 3.383 1.801 3.383 1.872 0 3.033-1.629 3.528-3.473L48.713.32zm44.42-.013l-9.602 9.01 4.212 12.411-6.445-.007-2.561-8.098-2.82 2.553-1.473 5.564H68.45L74.378.319h5.84l-1.884 7h.15L85.746.31h7.387V.308zM63.306 14.332l5.664.869c-1.572 4.576-5.553 6.698-9.389 6.698-5.556 0-8.474-3.537-7.088-8.613l1.341-4.921C55.045 3.905 57.84 0 63.37 0c4.25 0 6.915 1.722 7.257 5.475l-5.482 2.06c.012-2.06-1.107-2.49-2.149-2.49-1.724 0-2.74 1.353-3.185 2.983l-1.572 5.875c-.45 1.6-.103 3.012 1.888 3.012 1.249 0 2.266-.707 3.179-2.582z"/>
        </G>
      </Svg>);
    };
    return TrucknetLogo;
}(React.PureComponent));
export default TrucknetLogo;
