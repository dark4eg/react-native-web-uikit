export var parseDataUrl = function (data) {
    var dataUrl = data.replace(/(.*?),/, "");
    var dataBeforeUrl = data.replace(dataUrl, "");
    var isBase64 = dataBeforeUrl.includes("base64");
    var afterMimeTypeStringRegexp = isBase64 ? /((;base64).*)/ : /((,).*)/;
    var mimeType = data.replace(afterMimeTypeStringRegexp, "").replace(/(data:)/, "");
    return {
        mimeType: mimeType,
        isBase64: isBase64,
        url: dataUrl,
    };
};
