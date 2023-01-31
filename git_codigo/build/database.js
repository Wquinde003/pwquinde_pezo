"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//mongoose.connect("mongodb://Localhost/companydb")
//    .then(db=> console.log('la databse se conecto'))
//    .catch(error => console.log(error))

_mongoose["default"].connect("mongodb://Localhost/companydb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function (db) {
  return console.log('Conexión exitosa.');
})["catch"](function (db) {
  return console.log(error);
});