/**
 * @param {Number} hours
 * @param {Number} minutes
 * @returns {Boolean}
 */
module.exports = function (hours, minutes) {
    return 0 <= hours && hours <= 23 && 0 <= minutes && minutes <= 59;
};
