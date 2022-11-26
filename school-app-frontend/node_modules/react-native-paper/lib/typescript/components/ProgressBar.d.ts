import * as React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import type { InternalTheme } from '../types';
export declare type Props = React.ComponentPropsWithRef<typeof View> & {
    /**
     * Animated value (between 0 and 1). This tells the progress bar to rely on this value to animate it.
     * Note: It should not be used in parallel with the `progress` prop.
     */
    animatedValue?: number;
    /**
     * Progress value (between 0 and 1).
     * Note: It should not be used in parallel with the `animatedValue` prop.
     */
    progress?: number;
    /**
     * Color of the progress bar. The background color will be calculated based on this but you can change it by passing `backgroundColor` to `style` prop.
     */
    color?: string;
    /**
     * If the progress bar will show indeterminate progress.
     */
    indeterminate?: boolean;
    /**
     * Whether to show the ProgressBar (true, the default) or hide it (false).
     */
    visible?: boolean;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
};
declare const _default: React.ComponentType<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    /**
     * Animated value (between 0 and 1). This tells the progress bar to rely on this value to animate it.
     * Note: It should not be used in parallel with the `progress` prop.
     */
    animatedValue?: number | undefined;
    /**
     * Progress value (between 0 and 1).
     * Note: It should not be used in parallel with the `animatedValue` prop.
     */
    progress?: number | undefined;
    /**
     * Color of the progress bar. The background color will be calculated based on this but you can change it by passing `backgroundColor` to `style` prop.
     */
    color?: string | undefined;
    /**
     * If the progress bar will show indeterminate progress.
     */
    indeterminate?: boolean | undefined;
    /**
     * Whether to show the ProgressBar (true, the default) or hide it (false).
     */
    visible?: boolean | undefined;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
}, "progress" | "color" | "visible" | keyof import("react-native").ViewProps | keyof React.RefAttributes<View> | "indeterminate" | "animatedValue"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<import("react-native").ViewProps & React.RefAttributes<View> & {
    /**
     * Animated value (between 0 and 1). This tells the progress bar to rely on this value to animate it.
     * Note: It should not be used in parallel with the `progress` prop.
     */
    animatedValue?: number | undefined;
    /**
     * Progress value (between 0 and 1).
     * Note: It should not be used in parallel with the `animatedValue` prop.
     */
    progress?: number | undefined;
    /**
     * Color of the progress bar. The background color will be calculated based on this but you can change it by passing `backgroundColor` to `style` prop.
     */
    color?: string | undefined;
    /**
     * If the progress bar will show indeterminate progress.
     */
    indeterminate?: boolean | undefined;
    /**
     * Whether to show the ProgressBar (true, the default) or hide it (false).
     */
    visible?: boolean | undefined;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
}> & (({ color, indeterminate, style, progress, visible, theme, animatedValue, ...rest }: Props) => JSX.Element), {}>;
export default _default;
