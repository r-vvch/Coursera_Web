var events = [];

module.exports = {

    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        events.push([event, subscriber, handler]);
        return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        for (var i = 0; i < events.length; i++) {
            if (events[i][0] === event && events[i][1] === subscriber) {
                events.splice(i, 1);
                i--;
            }
        }
        return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        for (var i = 0; i < events.length; i++) {
            if (events[i][0] === event) {
                events[i][2].call(events[i][1]);
            }
        }
        return this;
    }
};
