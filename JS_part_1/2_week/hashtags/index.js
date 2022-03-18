/**
 * @param {String} tweet
 * @returns {String[]}
 */

module.exports = function (tweet) {
    var tweetList = tweet.split(' ');
    var hashtagList = tweetList.filter(word => {
        return word[0] === '#';
    });
    var tagList = [];
    hashtagList.forEach(element => {
        tagList.push(element.slice(1))
    })
    return tagList;
};
