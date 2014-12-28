/**
 * sails-hook-healthcheck hook
 */

module.exports = function (sails) {
  return {

    // Run when sails loads-- be sure and call `next()`.
    initialize: function (next) {
      return next();
    },

    routes: {

      before: {
        '/_healthcheck': function returnTime(req, res, next) {
          return res.end(new Date().getTime().toString());
        },
        '/_healthcheck/ping': function returnPong(req, res, next) {
          return res.end('pong');
        }
      }

    }

  };
};
