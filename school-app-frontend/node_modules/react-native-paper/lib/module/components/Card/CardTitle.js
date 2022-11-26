import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { withInternalTheme } from '../../core/theming';
import Text from '../Typography/Text';
import Caption from '../Typography/v2/Caption';
import Title from '../Typography/v2/Title';
const LEFT_SIZE = 40;

/**
 * A component to show a title, subtitle and an avatar inside a Card.
 *
 * <div class="screenshots">
 *   <img class="small" src="screenshots/card-title-1.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Avatar, Card, IconButton } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Card.Title
 *     title="Card Title"
 *     subtitle="Card Subtitle"
 *     left={(props) => <Avatar.Icon {...props} icon="folder" />}
 *     right={(props) => <IconButton {...props} icon="more-vert" onPress={() => {}} />}
 *   />
 * );
 *
 * export default MyComponent;
 * ```
 */
const CardTitle = _ref => {
  let {
    title,
    titleStyle,
    titleNumberOfLines = 1,
    titleVariant = 'bodyLarge',
    subtitle,
    subtitleStyle,
    subtitleNumberOfLines = 1,
    subtitleVariant = 'bodyMedium',
    left,
    leftStyle,
    right,
    rightStyle,
    style,
    theme
  } = _ref;
  const titleComponent = props => theme.isV3 ? /*#__PURE__*/React.createElement(Text, props) : /*#__PURE__*/React.createElement(Title, props);
  const subtitleComponent = props => theme.isV3 ? /*#__PURE__*/React.createElement(Text, props) : /*#__PURE__*/React.createElement(Caption, props);
  const TextComponent = /*#__PURE__*/React.memo(_ref2 => {
    let {
      component,
      ...rest
    } = _ref2;
    return /*#__PURE__*/React.createElement(component, rest);
  });
  return /*#__PURE__*/React.createElement(View, {
    style: [styles.container, {
      minHeight: subtitle || left || right ? 72 : 50
    }, style]
  }, left ? /*#__PURE__*/React.createElement(View, {
    style: [styles.left, leftStyle]
  }, left({
    size: LEFT_SIZE
  })) : null, /*#__PURE__*/React.createElement(View, {
    style: [styles.titles]
  }, title && /*#__PURE__*/React.createElement(TextComponent, {
    component: titleComponent,
    style: [styles.title, {
      marginBottom: subtitle ? 0 : 2
    }, titleStyle],
    numberOfLines: titleNumberOfLines,
    variant: titleVariant
  }, title), subtitle && /*#__PURE__*/React.createElement(TextComponent, {
    component: subtitleComponent,
    style: [styles.subtitle, subtitleStyle],
    numberOfLines: subtitleNumberOfLines,
    variant: subtitleVariant
  }, subtitle)), /*#__PURE__*/React.createElement(View, {
    style: rightStyle
  }, right ? right({
    size: 24
  }) : null));
};
CardTitle.displayName = 'Card.Title';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 16
  },
  left: {
    justifyContent: 'center',
    marginRight: 16,
    height: LEFT_SIZE,
    width: LEFT_SIZE
  },
  titles: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  title: {
    minHeight: 30,
    paddingRight: 16
  },
  subtitle: {
    minHeight: 20,
    marginVertical: 0,
    paddingRight: 16
  }
});
export default withInternalTheme(CardTitle);

// @component-docs ignore-next-line
export { CardTitle };
//# sourceMappingURL=CardTitle.js.map