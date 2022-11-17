"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Badge = function Badge(props) {
  return <div className={"badge ".concat(!props.value ? 'badge--none' : '', " ")}>
            <h4>{props.value || 0}</h4>
        </div>;
};
var _default = Badge;
exports.default = _default;