import * as React from 'react';
import { Animated, StyleProp, TextStyle } from 'react-native';
import type { InternalTheme } from '../types';
export declare type Props = React.ComponentProps<typeof Animated.Text> & {
    /**
     * Whether the badge is visible
     */
    visible?: boolean;
    /**
     * Content of the `Badge`.
     */
    children?: string | number;
    /**
     * Size of the `Badge`.
     */
    size?: number;
    style?: StyleProp<TextStyle>;
    ref?: React.RefObject<typeof Animated.Text>;
    /**
     * @optional
     */
    theme: InternalTheme;
};
declare const _default: React.ComponentType<Pick<Animated.AnimatedProps<import("react-native").TextProps & React.RefAttributes<import("react-native").Text>> & {
    /**
     * Whether the badge is visible
     */
    visible?: boolean | undefined;
    /**
     * Content of the `Badge`.
     */
    children?: string | number | undefined;
    /**
     * Size of the `Badge`.
     */
    size?: number | undefined;
    style?: StyleProp<TextStyle>;
    ref?: React.RefObject<Animated.AnimatedComponent<typeof import("react-native").Text>> | undefined;
    /**
     * @optional
     */
    theme: InternalTheme;
}, "size" | "visible" | keyof import("react-native").TextProps | keyof React.RefAttributes<import("react-native").Text>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Animated.AnimatedProps<import("react-native").TextProps & React.RefAttributes<import("react-native").Text>> & {
    /**
     * Whether the badge is visible
     */
    visible?: boolean | undefined;
    /**
     * Content of the `Badge`.
     */
    children?: string | number | undefined;
    /**
     * Size of the `Badge`.
     */
    size?: number | undefined;
    style?: StyleProp<TextStyle>;
    ref?: React.RefObject<Animated.AnimatedComponent<typeof import("react-native").Text>> | undefined;
    /**
     * @optional
     */
    theme: InternalTheme;
}> & (({ children, size, style, theme, visible, ...rest }: Props) => JSX.Element), {}>;
export default _default;
