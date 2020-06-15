/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    if (hashtags.length === 0) {
        return "";
    }
    var unique = [];
    for (var i = 0; i < hashtags.length; i++) {
        var tagLow = hashtags[i].toLowerCase();
        if (tagLow === '') {
            continue;
        }
        var isRepeat = 0;
        if (unique.indexOf(tagLow) === -1) {
            unique.push(tagLow);
        }
    }
    return unique.join(', ');
};
