import * as React from 'react';
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native';
import type { InternalTheme, MD3TypescaleKey } from '../../types';
export declare type Props = React.ComponentPropsWithRef<typeof View> & {
    /**
     * Text for the title. Note that this will only accept a string or `<Text>`-based node.
     */
    title: React.ReactNode;
    /**
     * Style for the title.
     */
    titleStyle?: StyleProp<TextStyle>;
    /**
     * Number of lines for the title.
     */
    titleNumberOfLines?: number;
    /**
     * @supported Available in v5.x with theme version 3
     *
     * Title text variant defines appropriate text styles for type role and its size.
     * Available variants:
     *
     *  Display: `displayLarge`, `displayMedium`, `displaySmall`
     *
     *  Headline: `headlineLarge`, `headlineMedium`, `headlineSmall`
     *
     *  Title: `titleLarge`, `titleMedium`, `titleSmall`
     *
     *  Label:  `labelLarge`, `labelMedium`, `labelSmall`
     *
     *  Body: `bodyLarge`, `bodyMedium`, `bodySmall`
     */
    titleVariant?: keyof typeof MD3TypescaleKey;
    /**
     * Text for the subtitle. Note that this will only accept a string or `<Text>`-based node.
     */
    subtitle?: React.ReactNode;
    /**
     * Style for the subtitle.
     */
    subtitleStyle?: StyleProp<TextStyle>;
    /**
     * Number of lines for the subtitle.
     */
    subtitleNumberOfLines?: number;
    /**
     * @supported Available in v5.x with theme version 3
     *
     * Subtitle text variant defines appropriate text styles for type role and its size.
     * Available variants:
     *
     *  Display: `displayLarge`, `displayMedium`, `displaySmall`
     *
     *  Headline: `headlineLarge`, `headlineMedium`, `headlineSmall`
     *
     *  Title: `titleLarge`, `titleMedium`, `titleSmall`
     *
     *  Label:  `labelLarge`, `labelMedium`, `labelSmall`
     *
     *  Body: `bodyLarge`, `bodyMedium`, `bodySmall`
     */
    subtitleVariant?: keyof typeof MD3TypescaleKey;
    /**
     * Callback which returns a React element to display on the left side.
     */
    left?: (props: {
        size: number;
    }) => React.ReactNode;
    /**
     * Style for the left element wrapper.
     */
    leftStyle?: StyleProp<ViewStyle>;
    /**
     * Callback which returns a React element to display on the right side.
     */
    right?: (props: {
        size: number;
    }) => React.ReactNode;
    /**
     * Style for the right element wrapper.
     */
    rightStyle?: StyleProp<ViewStyle>;
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
declare const CardTitle: {
    ({ title, titleStyle, titleNumberOfLines, titleVariant, subtitle, subtitleStyle, subtitleNumberOfLines, subtitleVariant, left, leftStyle, right, rightStyle, style, theme, }: Props): JSX.Element;
    displayName: string;
};
declare const _default: React.ComponentType<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    /**
     * Text for the title. Note that this will only accept a string or `<Text>`-based node.
     */
    title: React.ReactNode;
    /**
     * Style for the title.
     */
    titleStyle?: StyleProp<TextStyle>;
    /**
     * Number of lines for the title.
     */
    titleNumberOfLines?: number | undefined;
    /**
     * @supported Available in v5.x with theme version 3
     *
     * Title text variant defines appropriate text styles for type role and its size.
     * Available variants:
     *
     *  Display: `displayLarge`, `displayMedium`, `displaySmall`
     *
     *  Headline: `headlineLarge`, `headlineMedium`, `headlineSmall`
     *
     *  Title: `titleLarge`, `titleMedium`, `titleSmall`
     *
     *  Label:  `labelLarge`, `labelMedium`, `labelSmall`
     *
     *  Body: `bodyLarge`, `bodyMedium`, `bodySmall`
     */
    titleVariant?: "displayLarge" | "displayMedium" | "displaySmall" | "headlineLarge" | "headlineMedium" | "headlineSmall" | "titleLarge" | "titleMedium" | "titleSmall" | "labelLarge" | "labelMedium" | "labelSmall" | "bodyLarge" | "bodyMedium" | "bodySmall" | undefined;
    /**
     * Text for the subtitle. Note that this will only accept a string or `<Text>`-based node.
     */
    subtitle?: React.ReactNode;
    /**
     * Style for the subtitle.
     */
    subtitleStyle?: StyleProp<TextStyle>;
    /**
     * Number of lines for the subtitle.
     */
    subtitleNumberOfLines?: number | undefined;
    /**
     * @supported Available in v5.x with theme version 3
     *
     * Subtitle text variant defines appropriate text styles for type role and its size.
     * Available variants:
     *
     *  Display: `displayLarge`, `displayMedium`, `displaySmall`
     *
     *  Headline: `headlineLarge`, `headlineMedium`, `headlineSmall`
     *
     *  Title: `titleLarge`, `titleMedium`, `titleSmall`
     *
     *  Label:  `labelLarge`, `labelMedium`, `labelSmall`
     *
     *  Body: `bodyLarge`, `bodyMedium`, `bodySmall`
     */
    subtitleVariant?: "displayLarge" | "displayMedium" | "displaySmall" | "headlineLarge" | "headlineMedium" | "headlineSmall" | "titleLarge" | "titleMedium" | "titleSmall" | "labelLarge" | "labelMedium" | "labelSmall" | "bodyLarge" | "bodyMedium" | "bodySmall" | undefined;
    /**
     * Callback which returns a React element to display on the left side.
     */
    left?: ((props: {
        size: number;
    }) => React.ReactNode) | undefined;
    /**
     * Style for the left element wrapper.
     */
    leftStyle?: StyleProp<ViewStyle>;
    /**
     * Callback which returns a React element to display on the right side.
     */
    right?: ((props: {
        size: number;
    }) => React.ReactNode) | undefined;
    /**
     * Style for the right element wrapper.
     */
    rightStyle?: StyleProp<ViewStyle>;
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
}, "title" | "left" | "right" | keyof import("react-native").ViewProps | keyof React.RefAttributes<View> | "titleStyle" | "titleNumberOfLines" | "index" | "total" | "titleVariant" | "subtitle" | "subtitleStyle" | "subtitleNumberOfLines" | "subtitleVariant" | "leftStyle" | "rightStyle"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<import("react-native").ViewProps & React.RefAttributes<View> & {
    /**
     * Text for the title. Note that this will only accept a string or `<Text>`-based node.
     */
    title: React.ReactNode;
    /**
     * Style for the title.
     */
    titleStyle?: StyleProp<TextStyle>;
    /**
     * Number of lines for the title.
     */
    titleNumberOfLines?: number | undefined;
    /**
     * @supported Available in v5.x with theme version 3
     *
     * Title text variant defines appropriate text styles for type role and its size.
     * Available variants:
     *
     *  Display: `displayLarge`, `displayMedium`, `displaySmall`
     *
     *  Headline: `headlineLarge`, `headlineMedium`, `headlineSmall`
     *
     *  Title: `titleLarge`, `titleMedium`, `titleSmall`
     *
     *  Label:  `labelLarge`, `labelMedium`, `labelSmall`
     *
     *  Body: `bodyLarge`, `bodyMedium`, `bodySmall`
     */
    titleVariant?: "displayLarge" | "displayMedium" | "displaySmall" | "headlineLarge" | "headlineMedium" | "headlineSmall" | "titleLarge" | "titleMedium" | "titleSmall" | "labelLarge" | "labelMedium" | "labelSmall" | "bodyLarge" | "bodyMedium" | "bodySmall" | undefined;
    /**
     * Text for the subtitle. Note that this will only accept a string or `<Text>`-based node.
     */
    subtitle?: React.ReactNode;
    /**
     * Style for the subtitle.
     */
    subtitleStyle?: StyleProp<TextStyle>;
    /**
     * Number of lines for the subtitle.
     */
    subtitleNumberOfLines?: number | undefined;
    /**
     * @supported Available in v5.x with theme version 3
     *
     * Subtitle text variant defines appropriate text styles for type role and its size.
     * Available variants:
     *
     *  Display: `displayLarge`, `displayMedium`, `displaySmall`
     *
     *  Headline: `headlineLarge`, `headlineMedium`, `headlineSmall`
     *
     *  Title: `titleLarge`, `titleMedium`, `titleSmall`
     *
     *  Label:  `labelLarge`, `labelMedium`, `labelSmall`
     *
     *  Body: `bodyLarge`, `bodyMedium`, `bodySmall`
     */
    subtitleVariant?: "displayLarge" | "displayMedium" | "displaySmall" | "headlineLarge" | "headlineMedium" | "headlineSmall" | "titleLarge" | "titleMedium" | "titleSmall" | "labelLarge" | "labelMedium" | "labelSmall" | "bodyLarge" | "bodyMedium" | "bodySmall" | undefined;
    /**
     * Callback which returns a React element to display on the left side.
     */
    left?: ((props: {
        size: number;
    }) => React.ReactNode) | undefined;
    /**
     * Style for the left element wrapper.
     */
    leftStyle?: StyleProp<ViewStyle>;
    /**
     * Callback which returns a React element to display on the right side.
     */
    right?: ((props: {
        size: number;
    }) => React.ReactNode) | undefined;
    /**
     * Style for the right element wrapper.
     */
    rightStyle?: StyleProp<ViewStyle>;
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
    ({ title, titleStyle, titleNumberOfLines, titleVariant, subtitle, subtitleStyle, subtitleNumberOfLines, subtitleVariant, left, leftStyle, right, rightStyle, style, theme, }: Props): JSX.Element;
    displayName: string;
}, {}>;
export default _default;
export { CardTitle };
