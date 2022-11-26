function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { Animated, I18nManager, StyleSheet } from 'react-native';
import { withInternalTheme } from '../../core/theming';
import { MD3TypescaleKey } from '../../types';
/**
 * Animated text component which follows styles from the theme.
 *
 * @extends Text props https://reactnative.dev/docs/text#props
 */
function AnimatedText(_ref) {
  let {
    style,
    theme,
    variant,
    ...rest
  } = _ref;
  const writingDirection = I18nManager.getConstants().isRTL ? 'rtl' : 'ltr';
  if (theme.isV3 && variant) {
    const stylesByVariant = Object.keys(MD3TypescaleKey).reduce((acc, key) => {
      const {
        fontSize,
        fontWeight,
        lineHeight,
        letterSpacing,
        fontFamily
      } = theme.fonts[key];
      return {
        ...acc,
        [key]: {
          fontFamily,
          fontSize,
          fontWeight,
          lineHeight: lineHeight,
          letterSpacing,
          color: theme.colors.onSurface
        }
      };
    }, {});
    const styleForVariant = stylesByVariant[variant];
    return /*#__PURE__*/React.createElement(Animated.Text, _extends({}, rest, {
      style: [styleForVariant, styles.text, {
        writingDirection
      }, style]
    }));
  } else {
    const font = !theme.isV3 ? theme.fonts.regular : theme.fonts.bodyMedium;
    const textStyle = {
      ...font,
      color: theme.isV3 ? theme.colors.onSurface : theme.colors.text
    };
    return /*#__PURE__*/React.createElement(Animated.Text, _extends({}, rest, {
      style: [styles.text, textStyle, {
        writingDirection
      }, style]
    }));
  }
}
const styles = StyleSheet.create({
  text: {
    textAlign: 'left'
  }
});
export default withInternalTheme(AnimatedText);
//# sourceMappingURL=AnimatedText.js.map