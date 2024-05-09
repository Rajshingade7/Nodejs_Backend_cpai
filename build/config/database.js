"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DataTypes", {
  enumerable: true,
  get: function get() {
    return _sequelize.DataTypes;
  }
});
exports["default"] = void 0;
var _sequelize = _interopRequireWildcard(require("sequelize"));
var _logger = _interopRequireDefault(require("../config/logger"));
var _dotenv = _interopRequireDefault(require("dotenv"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
_dotenv["default"].config();
var DATABASE = process.env.DATABASE;
var USERNAME = process.env.USERNAME_DB;
var PASSWORD = process.env.PASSWORD;
var HOST = process.env.HOST;
var PORT = process.env.PORT;
var DIALECT = process.env.DIALECT;
if (process.env.NODE_ENV === 'test') {
  DATABASE = process.env.DATABASE_TEST;
  USERNAME = process.env.USERNAME_TEST;
  PASSWORD = process.env.PASSWORD_TEST;
  HOST = process.env.HOST_TEST;
  PORT = process.env.PORT_TEST;
  DIALECT = process.env.DIALECT_TEST;
}

// const sequelize = new Sequelize("mssql://sa:Raj@12345.database.windows.net:1433", {
//   host: HOST,
//   port: PORT,
//   dialect: DIALECT,
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// });
var sequelize = new _sequelize["default"]('First', 'sa', 'Raj@12345', {
  host: HOST,
  port: PORT,
  dialect: DIALECT
});
sequelize.authenticate().then(function () {
  _logger["default"].info('Connected to the database.');
})["catch"](function (error) {
  _logger["default"].error('Could not connect to the database.', error);
});
sequelize.sync();
var _default = exports["default"] = sequelize;