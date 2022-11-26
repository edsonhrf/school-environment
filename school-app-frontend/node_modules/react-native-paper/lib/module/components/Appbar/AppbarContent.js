function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { Platform, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import color from 'color';
import { withInternalTheme } from '../../core/theming';
import { white } from '../../styles/themes/v2/colors';
import Text from '../Typography/Text';
import { modeTextVariant } from './utils';
/**
 * A component used to display a title and optional subtitle in an appbar.
 *
 * <div class="screenshots">
 *   <img class="small" src="screenshots/appbar-content.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Appbar } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *     <Appbar.Header>
 *        <Appbar.Content title="Title" />
 *     </Appbar.Header>
 * );
 *
 * export default MyComponent;
 * ```
 */
const AppbarContent = _ref => {
  let {
    color: titleColor,
    subtitle,
    subtitleStyle,
    onPress,
    style,
    titleRef,
    titleStyle,
    theme,
    title,
    mode = 'small',
    ...rest
  } = _ref;
  const {
    isV3,
    colors
  } = theme;
  const titleTextColor = titleColor ? titleColor : isV3 ? colors.onSurface : white;
  const subtitleColor = color(titleTextColor).alpha(0.7).rgb().string();
  const modeContainerStyles = {
    small: styles.v3DefaultContainer,
    medium: styles.v3MediumContainer,
    large: styles.v3LargeContainer,
    'center-aligned': styles.v3DefaultContainer
  };
  const variant = modeTextVariant[mode];
  return /*#__PURE__*/React.createElement(TouchableWithoutFeedback, {
    accessibilityRole: "button",
    onPress: onPress,
    disabled: !onPress
  }, /*#__PURE__*/React.createElement(View, _extends({
    pointerEvents: "box-none",
    style: [styles.container, isV3 && modeContainerStyles[mode], style]
  }, rest), /*#__PURE__*/React.createElement(Text, _extends({}, isV3 && {
    variant
  }, {
    ref: titleRef,
    style: [{
      color: titleTextColor,
      ...(isV3 ? theme.fonts[variant] : Platform.OS === 'ios' ? theme.fonts.regular : theme.fonts.medium)
    }, !isV3 && styles.title, titleStyle],
    numberOfLines: 1,
    accessible: true
    // @ts-ignore Type '"heading"' is not assignable to type ...
    ,
    accessibilityRole: Platform.OS === 'web' ? 'heading' : 'header'
  }), title), !isV3 && subtitle ? /*#__PURE__*/React.createElement(Text, {
    style: [styles.subtitle, {
      color: subtitleColor
    }, subtitleStyle],
    numberOfLines: 1
  }, subtitle) : null));
};
AppbarContent.displayName = 'Appbar.Content';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12
  },
  v3DefaultContainer: {
    paddingHorizontal: 0
  },
  v3MediumContainer: {
    paddingHorizontal: 0,
    justifyContent: 'flex-end',
    paddingBottom: 24
  },
  v3LargeContainer: {
    paddingHorizontal: 0,
    paddingTop: 36,
    justifyContent: 'flex-end',
    paddingBottom: 28
  },
  title: {
    fontSize: Platform.OS === 'ios' ? 17 : 20
  },
  subtitle: {
    fontSize: Platform.OS === 'ios' ? 11 : 14
  }
});
export default withInternalTheme(AppbarContent);

// @component-docs ignore-next-line
const AppbarContentWithTheme = withInternalTheme(AppbarContent);
// @component-docs ignore-next-line
export { AppbarContentWithTheme as AppbarContent };
//# sourceMappingURL=AppbarContent.js.map