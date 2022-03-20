/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    var _date =  new Date(date);

    return {
        add: function(number, unit) {
            if (number < 0) {
                throw new TypeError;
            } else if (unit === "minutes") {
                _date.setMinutes(_date.getMinutes() + number);
            } else if (unit === "hours") {
                _date.setHours(_date.getHours() + number);
            } else if (unit === "days") {
                _date.setDate(_date.getDate() + number);
            } else if (unit === "months") {
                _date.setMonth(_date.getMonth() + number);
            } else if (unit === "years") {
                _date.setFullYear(_date.getFullYear() + number);
            } else {
                throw new TypeError;
            }
            return this;
        },

        subtract: function(number, unit) {
            if (number < 0) {
                throw new TypeError;
            } else if (unit === "minutes") {
                _date.setMinutes(_date.getMinutes() - number);
            } else if (unit === "hours") {
                _date.setHours(_date.getHours() - number);
            } else if (unit === "days") {
                _date.setDate(_date.getDate() - number);
            } else if (unit === "months") {
                _date.setMonth(_date.getMonth() - number);
            } else if (unit === "years") {
                _date.setFullYear(_date.getFullYear() - number);
            } else {
                throw new TypeError;
            }
            return this;
        },

        get value() {
            _date.setMinutes(_date.getMinutes() - _date.getTimezoneOffset());
            return _date.toISOString().slice(0, 16).replace('T', ' ');
        }
    }
};
