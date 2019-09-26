export declare type ParsedDataUrlType = {
    mimeType: string;
    isBase64: boolean;
    url: string;
};
export declare const parseDataUrl: (data: string) => ParsedDataUrlType;
