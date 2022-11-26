import * as React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import type { InternalTheme } from 'src/types';
import Text from '../Typography/Text';
export declare type Props = React.ComponentProps<typeof Text> & {
    /**
     * @optional
     */
    theme?: InternalTheme;
    /**
     * Style that is passed to Text element.
     */
    style?: StyleProp<TextStyle>;
};
/**
 * A component used to display a header in lists.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { List } from 'react-native-paper';
 *
 * const MyComponent = () => <List.Subheader>My List Title</List.Subheader>;
 *
 * export default MyComponent;
 * ```
 */
declare const ListSubheader: {
    ({ style, theme: overrideTheme, ...rest }: Props): JSX.Element;
    displayName: string;
};
export default ListSubheader;
