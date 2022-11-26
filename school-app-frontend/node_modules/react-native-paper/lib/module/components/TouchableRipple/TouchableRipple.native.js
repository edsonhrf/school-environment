function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { Platform, StyleSheet, Pressable } from 'react-native';
import { withInternalTheme } from '../../core/theming';
import { getTouchableRippleColors } from './utils';
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
  } = getTouchableRippleColors({
    theme,
    rippleColor,
    underlayColor
  });

  // A workaround for ripple on Android P is to use useForeground + overflow: 'hidden'
  // https://github.com/facebook/react-native/issues/6480
  const useForeground = Platform.OS === 'android' && Platform.Version >= ANDROID_VERSION_PIE && borderless;
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
    return /*#__PURE__*/React.createElement(Pressable, _extends({}, rest, {
      disabled: disabled,
      style: [borderless && styles.overflowHidden, style],
      android_ripple: background != null ? background : {
        color: calculatedRippleColor,
        borderless,
        foreground: useForeground
      }
    }), React.Children.only(children));
  }
  return /*#__PURE__*/React.createElement(Pressable, _extends({}, rest, {
    disabled: disabled,
    style: [borderless && styles.overflowHidden, showUnderlay && {
      backgroundColor: calculatedUnderlayColor
    }, style],
    onPressIn: handlePressIn,
    onPressOut: handlePressOut
  }), React.Children.only(children));
};
TouchableRipple.supported = Platform.OS === 'android' && Platform.Version >= ANDROID_VERSION_LOLLIPOP;
const styles = StyleSheet.create({
  overflowHidden: {
    overflow: 'hidden'
  }
});
export default withInternalTheme(TouchableRipple);
//# sourceMappingURL=TouchableRipple.native.js.map