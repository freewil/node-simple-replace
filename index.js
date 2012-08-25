
var simpleReplace = module.exports = function (text, objectHash) {
    text = text || "";
    objectHash = objectHash || {};
    var placeholerDefaultValueRegex = /(?:[^:-]+)+:-(.*)+/;
    var placeholderRegex = /(?:\$\{([^}]+)+\})+?/g;
    var placeholderReplace = function (placeholder, configVar) {
        if (objectHash[configVar]) {
            return objectHash[configVar];
        } else if (!configVar.match(placeholerDefaultValueRegex)) {
            return placeholder;
        } else {
            return configVar.replace(placeholerDefaultValueRegex, "$1");
        }
    };
    return text.replace(placeholderRegex, placeholderReplace);
}