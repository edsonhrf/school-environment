import * as React from 'react';
import { Image, StyleProp, ViewStyle } from 'react-native';
import type { InternalTheme } from '../../types';
export declare type Props = React.ComponentPropsWithRef<typeof Image> & {
    /**
     * @internal
     */
    index?: number;
    /**
     * @internal
     */
    total?: number;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
};
/**
 * A component to show a cover image inside a Card.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="small" src="screenshots/card-cover.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Card } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Card>
 *     <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
 *   </Card>
 * );
 *
 * export default MyComponent;
 * ```
 *
 * @extends Image props https://reactnative.dev/docs/image#props
 */
declare const CardCover: {
    ({ index, total, style, theme, ...rest }: Props): JSX.Element;
    displayName: string;
};
declare const _default: React.ComponentType<Pick<import("react-native").ImageProps & React.RefAttributes<Image> & {
    /**
     * @internal
     */
    index?: number | undefined;
    /**
     * @internal
     */
    total?: number | undefined;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
}, keyof import("react-native").ImageProps | "index" | "total" | keyof React.RefAttributes<Image>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<import("react-native").ImageProps & React.RefAttributes<Image> & {
    /**
     * @internal
     */
    index?: number | undefined;
    /**
     * @internal
     */
    total?: number | undefined;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
}> & {
    ({ index, total, style, theme, ...rest }: Props): JSX.Element;
    displayName: string;
}, {}>;
export default _default;
export { CardCover };
