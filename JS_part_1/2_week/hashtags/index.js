/**
 * @param {String} tweet
 * @returns {String[]}
 */

module.exports = function (tweet) {
    var tweetList = tweet.split(' ');
    var hashtagList = tweetList.filter(isHashtag);
    var tagList = [];
    for (var i = 0; i < hashtagList.length; i++) {
        tagList.push(hashtagList[i].slice(1));
    }
    return tagList;
};

function isHashtag (word) {
    return word[0] === '#';

}