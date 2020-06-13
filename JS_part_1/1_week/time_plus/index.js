/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    // проверка
    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        return "Wrong time";
    }
    // часы
    var new_minutes = minutes + interval;
    var new_hours = (hours + Math.floor(new_minutes / 60)) % 24;
    new_minutes = new_minutes % 60;
    if (new_hours < 10) {
        new_hours = "0" + String(new_hours);
    }
    if (new_minutes < 10) {
        new_minutes = "0" + String(new_minutes);
    }
    return new_hours + ":" + new_minutes;
};
