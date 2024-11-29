const { ERROR_CODES, DEFAULT } = require("./appConstants");
const axios = require("axios").default;
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
  trace: (src, dest, action, params, callback) => {
    const tracingUrl = `${DEFAULT.API_HOST}/api/tenant/${initConfig.appId}/trace/${userIdetifier}/new`;
    axios
      .post(tracingUrl, {
        "src": src,
        "dest": dest,
        "action": action,
        "params": params,
        "platform": initConfig.platform || "web",
        "version": initConfig.version || "version",
        "packageName": initConfig.packageName || "js",
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(function (response) {
        if (callback) {
          callback(userIdetifier, src, dest, action, params, response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
        // handle error
        if (callback) {
          callback(undefined, ERROR_CODES.TRACING_REQUEST_FAILED);
        }
      })
      .then(function () {
        // always executed
      });
  }
};
