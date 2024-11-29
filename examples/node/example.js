const {
  init,
  setUserIdentifier,
  trace
} = require("./fabanalytics.js");

const initConfig = { appId: "64e3dXXXX597fb" };

init(initConfig, (initResponse) => {
  console.log(initResponse.status)
});

setUserIdentifier("ABC")

trace("home","settings","menu",{type:"global-nav"});