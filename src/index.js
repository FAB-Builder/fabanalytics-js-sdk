const { ERROR_CODES, DEFAULT } = require("./appConstants");
let initConfig, userIdetifier;
/**
 * fabanalytics client library for easy integration with fabanalytics platform.
 * @module fabanalytics
 */

module.exports = {
  /**
   * Initialize the library with machine user credentials.
   *    @param {json} config Credentials of machine user.
   *    @param {String} config.clientId
   *    @param {String} config.clientSecret
   *    @param {String} config.operatorId
   * @param {function} callback
   */
  init: (config, callback) => {
    if (!config) {
      console.error("fabanalytics: config is required");
      return;
    }
    initConfig = config;
    callback({ status: "success" });
  },
  setUserIdentifier: (identifier) => {
    userIdetifier = identifier;
  },
  trace: (src, dest, params, identifier) => {
    const tracingUrl = `${DEFAULT.API_HOST}/api/tracing`
    axios
      .get(tracingUrl)
      .then(function (response) {
        callback(identifier, src, dest, params, response);
      })
      .catch(function (error) {
        console.log(error);
        // handle error
        callback(undefined, ERROR_CODES.TRACING_REQUEST_FAILED);
      })
      .then(function () {
        // always executed
      });
  }
};
