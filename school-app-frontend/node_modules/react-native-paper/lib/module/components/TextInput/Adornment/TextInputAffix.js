import React from 'react';
import { Animated, StyleSheet, Text } from 'react-native';
import color from 'color';
import { withInternalTheme } from '../../../core/theming';
import { getConstants } from '../helpers';
import { AdornmentSide } from './enums';
const AffixContext = /*#__PURE__*/React.createContext({
  textStyle: {
    fontFamily: '',
    color: ''
  },
  topPosition: null,
  side: AdornmentSide.Left
});
const AffixAdornment = _ref => {
  let {
    affix,
    side,
    textStyle,
    topPosition,
    onLayout,
    visible,
    paddingHorizontal,
    maxFontSizeMultiplier,
    testID
  } = _ref;
  return /*#__PURE__*/React.createElement(AffixContext.Provider, {
    value: {
      side,
      textStyle,
      topPosition,
      onLayout,
      visible,
      paddingHorizontal,
      maxFontSizeMultiplier,
      testID
    }
  }, affix);
};

/**
 * A component to render a leading / trailing text in the TextInput
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="small" src="screenshots/textinput-outline.affix.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { TextInput } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [text, setText] = React.useState('');
 *
 *   return (
 *     <TextInput
 *       mode="outlined"
 *       label="Outlined input"
 *       placeholder="Type something"
 *       right={<TextInput.Affix text="/100" />}
 *     />
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */

const TextInputAffix = _ref2 => {
  var _theme$colors;
  let {
    text,
    textStyle: labelStyle,
    theme
  } = _ref2;
  const {
    AFFIX_OFFSET
  } = getConstants(theme.isV3);
  const {
    textStyle,
    onLayout,
    topPosition,
    side,
    visible,
    paddingHorizontal,
    maxFontSizeMultiplier,
    testID
  } = React.useContext(AffixContext);
  const textColor = color(theme.isV3 ? theme.colors.onSurface : (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.text).alpha(theme.dark ? 0.7 : 0.54).rgb().string();
  const offset = typeof paddingHorizontal === 'number' ? paddingHorizontal : AFFIX_OFFSET;
  const style = {
    top: topPosition,
    [side]: offset
  };
  return /*#__PURE__*/React.createElement(Animated.View, {
    style: [styles.container, style, {
      opacity: (visible === null || visible === void 0 ? void 0 : visible.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0]
      })) || 1
    }],
    onLayout: onLayout,
    testID: testID
  }, /*#__PURE__*/React.createElement(Text, {
    maxFontSizeMultiplier: maxFontSizeMultiplier,
    style: [{
      color: textColor
    }, textStyle, labelStyle]
  }, text));
};
TextInputAffix.displayName = 'TextInput.Affix';
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default withInternalTheme(TextInputAffix);

// @component-docs ignore-next-line
export { TextInputAffix, AffixAdornment };
//# sourceMappingURL=TextInputAffix.js.map