const {
  init,
  setUserIdentifier,
  trace
} = require("./fabanalytics.js");

const initConfig = "ABC";

init(initConfig, (initResponse) => {
  console.log(initResponse.status)
});
