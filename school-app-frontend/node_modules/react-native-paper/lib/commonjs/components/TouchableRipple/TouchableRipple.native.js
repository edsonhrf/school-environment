"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _theming = require("../../core/theming");
var _utils = require("./utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const ANDROID_VERSION_LOLLIPOP = 21;
const ANDROID_VERSION_PIE = 28;
const TouchableRipple = _ref => {
  let {
    style,
    background,
    borderless = false,
    disabled: disabledProp,
    rippleColor,
    underlayColor,
    children,
    theme,
    ...rest
  } = _ref;
  const [showUnderlay, setShowUnderlay] = React.useState(false);
  const disabled = disabledProp || !rest.onPress;
  const {
    calculatedRippleColor,
    calculatedUnderlayColor
  } = (0, _utils.getTouchableRippleColors)({
    theme,
    rippleColor,
    underlayColor
  });

  // A workaround for ripple on Android P is to use useForeground + overflow: 'hidden'
  // https://github.com/facebook/react-native/issues/6480
  const useForeground = _reactNative.Platform.OS === 'android' && _reactNative.Platform.Version >= ANDROID_VERSION_PIE && borderless;
  const handlePressIn = e => {
    var _rest$onPressIn;
    setShowUnderlay(true);
    (_rest$onPressIn = rest.onPressIn) === null || _rest$onPressIn === void 0 ? void 0 : _rest$onPressIn.call(rest, e);
  };
  const handlePressOut = e => {
    var _rest$onPressOut;
    setShowUnderlay(false);
    (_rest$onPressOut = rest.onPressOut) === null || _rest$onPressOut === void 0 ? void 0 : _rest$onPressOut.call(rest, e);
  };
  if (TouchableRipple.supported) {
    return /*#__PURE__*/React.createElement(_reactNative.Pressable, _extends({}, rest, {
      disabled: disabled,
      style: [borderless && styles.overflowHidden, style],
      android_ripple: background != null ? background : {
        color: calculatedRippleColor,
        borderless,
        foreground: useForeground
      }
    }), React.Children.only(children));
  }
  return /*#__PURE__*/React.createElement(_reactNative.Pressable, _extends({}, rest, {
    disabled: disabled,
    style: [borderless && styles.overflowHidden, showUnderlay && {
      backgroundColor: calculatedUnderlayColor
    }, style],
    onPressIn: handlePressIn,
    onPressOut: handlePressOut
  }), React.Children.only(children));
};
TouchableRipple.supported = _reactNative.Platform.OS === 'android' && _reactNative.Platform.Version >= ANDROID_VERSION_LOLLIPOP;
const styles = _reactNative.StyleSheet.create({
  overflowHidden: {
    overflow: 'hidden'
  }
});
var _default = (0, _theming.withInternalTheme)(TouchableRipple);
exports.default = _default;
//# sourceMappingURL=TouchableRipple.native.js.map