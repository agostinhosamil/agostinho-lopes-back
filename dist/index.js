"use strict";

var _app = require("./app");

var _log = require("./config/log");

_app.app.listen(process.env.PORT || 3333, () => {
  (0, _log.log)(`Server Started at: ${new Date().toISOString()}`);
});