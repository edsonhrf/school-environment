import * as React from 'react';
import { GestureResponderEvent, Pressable, StyleProp, ViewStyle } from 'react-native';
import type { InternalTheme } from '../../types';
export declare type Props = React.ComponentPropsWithRef<typeof Pressable> & {
    /**
     * Whether to render the ripple outside the view bounds.
     */
    borderless?: boolean;
    /**
     * Type of background drawabale to display the feedback (Android).
     * https://reactnative.dev/docs/pressable#rippleconfig
     */
    background?: Object;
    /**
     * Whether to start the ripple at the center (Web).
     */
    centered?: boolean;
    /**
     * Whether to prevent interaction with the touchable.
     */
    disabled?: boolean;
    /**
     * Function to execute on press. If not set, will cause the touchable to be disabled.
     */
    onPress?: (e: GestureResponderEvent) => void;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (e: GestureResponderEvent) => void;
    /**
     * Color of the ripple effect (Android >= 5.0 and Web).
     */
    rippleColor?: string;
    /**
     * Color of the underlay for the highlight effect (Android < 5.0 and iOS).
     */
    underlayColor?: string;
    /**
     * Content of the `TouchableRipple`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
};
declare const _default: React.ComponentType<Pick<import("react-native").PressableProps & React.RefAttributes<import("react-native").View> & {
    /**
     * Whether to render the ripple outside the view bounds.
     */
    borderless?: boolean | undefined;
    /**
     * Type of background drawabale to display the feedback (Android).
     * https://reactnative.dev/docs/pressable#rippleconfig
     */
    background?: Object | undefined;
    /**
     * Whether to start the ripple at the center (Web).
     */
    centered?: boolean | undefined;
    /**
     * Whether to prevent interaction with the touchable.
     */
    disabled?: boolean | undefined;
    /**
     * Function to execute on press. If not set, will cause the touchable to be disabled.
     */
    onPress?: ((e: GestureResponderEvent) => void) | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: ((e: GestureResponderEvent) => void) | undefined;
    /**
     * Color of the ripple effect (Android >= 5.0 and Web).
     */
    rippleColor?: string | undefined;
    /**
     * Color of the underlay for the highlight effect (Android < 5.0 and iOS).
     */
    underlayColor?: string | undefined;
    /**
     * Content of the `TouchableRipple`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
}, "background" | "underlayColor" | "rippleColor" | keyof import("react-native").PressableProps | keyof React.RefAttributes<import("react-native").View> | "borderless" | "centered"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<import("react-native").PressableProps & React.RefAttributes<import("react-native").View> & {
    /**
     * Whether to render the ripple outside the view bounds.
     */
    borderless?: boolean | undefined;
    /**
     * Type of background drawabale to display the feedback (Android).
     * https://reactnative.dev/docs/pressable#rippleconfig
     */
    background?: Object | undefined;
    /**
     * Whether to start the ripple at the center (Web).
     */
    centered?: boolean | undefined;
    /**
     * Whether to prevent interaction with the touchable.
     */
    disabled?: boolean | undefined;
    /**
     * Function to execute on press. If not set, will cause the touchable to be disabled.
     */
    onPress?: ((e: GestureResponderEvent) => void) | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: ((e: GestureResponderEvent) => void) | undefined;
    /**
     * Color of the ripple effect (Android >= 5.0 and Web).
     */
    rippleColor?: string | undefined;
    /**
     * Color of the underlay for the highlight effect (Android < 5.0 and iOS).
     */
    underlayColor?: string | undefined;
    /**
     * Content of the `TouchableRipple`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
}> & {
    ({ style, background: _background, borderless, disabled: disabledProp, rippleColor, underlayColor: _underlayColor, children, theme, ...rest }: Props): JSX.Element;
    /**
     * Whether ripple effect is supported.
     */
    supported: boolean;
}, {}>;
export default _default;
