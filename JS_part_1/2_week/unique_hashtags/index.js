/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    var uniqueHashtags = [];
    hashtags.forEach(element => {
        var tagLow = element.toLowerCase();
        if (tagLow !== '') {
            if (uniqueHashtags.indexOf(tagLow) === -1) {
                uniqueHashtags.push(tagLow);
            }
        }
    })
    return uniqueHashtags.join(', ');
};
