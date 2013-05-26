module.exports = function (text, objectHash) {
    text = text || "";
    objectHash = objectHash || {};
    var placeholderRegex = /(?:#\{([^}]+)+\})+?/g;
    var placeholderReplace = function (placeholder, configVar) {
        if (typeof objectHash[configVar] !== 'undefined') {
          return objectHash[configVar];
        } else {
          return placeholder;
        }
    };
    return text.replace(placeholderRegex, placeholderReplace);
};
