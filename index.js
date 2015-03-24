'use strict';
module.exports = function (ms) {
  return function (func) {
    return setTimeout(func, ms);
  };
};
