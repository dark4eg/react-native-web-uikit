declare const createShadowStyles: (size?: number | undefined) => {
    elevation: number;
    boxShadow?: undefined;
    zIndex?: undefined;
    shadowColor?: undefined;
    shadowOffset?: undefined;
    shadowOpacity?: undefined;
    shadowRadius?: undefined;
} | {
    boxShadow: string;
    zIndex: number;
    elevation?: undefined;
    shadowColor?: undefined;
    shadowOffset?: undefined;
    shadowOpacity?: undefined;
    shadowRadius?: undefined;
} | {
    shadowColor: string;
    shadowOffset: {
        width: number;
        height: number;
    };
    shadowOpacity: number;
    shadowRadius: number;
    elevation?: undefined;
    boxShadow?: undefined;
    zIndex?: undefined;
};
export default createShadowStyles;
