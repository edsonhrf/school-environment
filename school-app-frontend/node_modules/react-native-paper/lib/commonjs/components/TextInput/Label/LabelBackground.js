"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _theming = require("../../../core/theming");
var _AnimatedText = _interopRequireDefault(require("../../Typography/AnimatedText"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const LabelBackground = _ref => {
  let {
    parentState,
    labelProps: {
      placeholderStyle,
      baseLabelTranslateX,
      topPosition,
      hasActiveOutline,
      label,
      backgroundColor,
      roundness
    },
    labelStyle,
    maxFontSizeMultiplier
  } = _ref;
  const hasFocus = hasActiveOutline || parentState.value;
  const opacity = parentState.labeled.interpolate({
    inputRange: [0, 1],
    outputRange: [hasFocus ? 1 : 0, 0]
  });
  const {
    isV3
  } = (0, _theming.useInternalTheme)();
  const labelTranslationX = {
    translateX: parentState.labeled.interpolate({
      inputRange: [0, 1],
      outputRange: [-baseLabelTranslateX, 0]
    })
  };
  const labelTextScaleY = {
    scaleY: parentState.labeled.interpolate({
      inputRange: [0, 1],
      outputRange: [0.2, 1]
    })
  };
  const labelTextTransform = [...labelStyle.transform, labelTextScaleY];
  const labelTextWidth = isV3 ? {
    width: parentState.labelLayout.width - placeholderStyle.paddingHorizontal
  } : {
    maxWidth: parentState.labelLayout.width - 2 * placeholderStyle.paddingHorizontal
  };
  return label ? [/*#__PURE__*/React.createElement(_reactNative.Animated.View, {
    key: "labelBackground-view",
    pointerEvents: "none",
    style: [_reactNative.StyleSheet.absoluteFill, styles.view, {
      backgroundColor,
      maxHeight: Math.max(roundness / 3, 2),
      opacity,
      bottom: Math.max(roundness, 2),
      transform: [labelTranslationX]
    }]
  }), /*#__PURE__*/React.createElement(_AnimatedText.default, {
    key: "labelBackground-text",
    style: [placeholderStyle, labelStyle, styles.outlinedLabel, isV3 && styles.md3OutlinedLabel, {
      top: topPosition + 1,
      backgroundColor,
      opacity,
      transform: labelTextTransform
    }, labelTextWidth],
    numberOfLines: 1,
    maxFontSizeMultiplier: maxFontSizeMultiplier
  }, label)] : null;
};
var _default = LabelBackground;
exports.default = _default;
const styles = _reactNative.StyleSheet.create({
  view: {
    position: 'absolute',
    top: 6,
    left: 10,
    width: 12
  },
  outlinedLabel: {
    position: 'absolute',
    left: 18,
    paddingHorizontal: 0,
    color: 'transparent'
  },
  md3OutlinedLabel: {
    left: 8
  }
});
//# sourceMappingURL=LabelBackground.js.map